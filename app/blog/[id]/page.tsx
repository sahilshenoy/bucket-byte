'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Loader2, ArrowLeft, Download, AlertTriangle } from 'lucide-react';

export default function Blog() {
  const router = useRouter();
  const params = useParams(); // Use the useParams hook
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [blogContent, setBlogContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogContent = async () => {
      if (id) {
        try {
          console.log(`Fetching blog content for id: ${id}`);
          const url = `https://nh5olre000.execute-api.us-east-1.amazonaws.com/dev/genBlog?id=${encodeURIComponent(id)}`;
          console.log(`Request URL: ${url}`);

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log(`Response status: ${response.status}`);
          console.log(`Response headers:`, Object.fromEntries(response.headers.entries()));

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

          if (data && data.blogContent) {
            setBlogContent(data.blogContent);
          } else if (data && data.error) {
            throw new Error(`Server Error: ${data.error}`);
          } else {
            throw new Error('Unexpected response structure from the server.');
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          console.error(`Error in fetchBlogContent: ${errorMessage}`);
          setError(`Error fetching blog content: ${errorMessage}`);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('No ID found in the URL parameters.');
        setError('No blog ID found in the URL.');
        setLoading(false);
      }
    };
    fetchBlogContent();
  }, [id]);

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([blogContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `blog_${id}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleRetry = () => {
    setLoading(true);
    setError('');
    router.refresh(); // This will re-run the useEffect hook
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">Generated Blog</h1>
            <div className="prose prose-lg max-w-none">
              {loading && (
                <div className="flex flex-col justify-center items-center h-64">
                  <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} />
                  <p className="text-indigo-600">Loading blog content...</p>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="mr-2" />
                    <p className="font-bold">Error</p>
                  </div>
                  <p>{error}</p>
                  <button
                    onClick={handleRetry}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                  >
                    Retry
                  </button>
                </div>
              )}
              {!loading && !error && blogContent && (
                <ReactMarkdown
                  className="text-gray-800"
                  components={{
                    h1: (props) => <h1 className="text-3xl font-bold text-indigo-700 mt-8 mb-4" {...props} />,
                    h2: (props) => <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
                    h3: (props) => <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
                    h4: (props) => <h4 className="text-lg font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
                    h5: (props) => <h5 className="text-md font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
                    h6: (props) => <h6 className="text-sm font-semibold text-indigo-600 mt-6 mb-3" {...props} />,
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
