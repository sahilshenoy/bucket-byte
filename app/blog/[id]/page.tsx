'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Loader2, ArrowLeft, Download } from 'lucide-react';

export default function Blog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blogContent, setBlogContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogContent = async () => {
      if (params.id) {
        try {
          console.log(`Fetching blog content for id: ${params.id}`);
          const response = await fetch(`https://nh5olre000.execute-api.us-east-1.amazonaws.com/dev/genBlog?id=${encodeURIComponent(params.id)}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(`Response status: ${response.status}`);
          console.log(`Response headers:`, response.headers);
          
          const responseText = await response.text();
          console.log(`Response text: ${responseText}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch the blog content: ${response.status} ${response.statusText}\nResponse: ${responseText}`);
          }
          
          let data;
          try {
            data = JSON.parse(responseText);
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            throw new Error(`Failed to parse response as JSON. Raw response: ${responseText}`);
          }

          console.log('Received data:', data);
          if (data.blogContent) {
            setBlogContent(data.blogContent);
          } else {
            throw new Error('Blog content is missing from the response');
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          console.error(`Error in fetchBlogContent: ${errorMessage}`);
          setError(`Error fetching blog content: ${errorMessage}`);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchBlogContent();
  }, [params.id]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([blogContent], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `blog_${params.id}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
              Generated Blog
            </h1>
            <div className="prose prose-lg max-w-none">
              {loading && (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="animate-spin text-indigo-600" size={48} />
                </div>
              )}
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}
              {!loading && !error && blogContent && (
                <ReactMarkdown 
                  className="text-gray-800"
                  components={{
                    h1: (props) => <h1 className="text-3xl font-bold text-indigo-700 mt-8 mb-4" {...props} />,
                    h2: (props) => <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
                    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
                    ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
                    ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
                    blockquote: (props) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4" {...props} />,
                  }}
                >
                  {blogContent}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            onClick={handleDownload}
            disabled={loading || !!error}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Markdown
          </button>
        </div>
      </div>
    </div>
  );
}