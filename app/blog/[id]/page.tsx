'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function Blog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blogContent, setBlogContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogContent = async () => {
      if (params.id) {
        try {
          const response = await fetch(`/api/getBlog?id=${params.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch the blog content');
          }
          const data = await response.json();
          setBlogContent(data.blogContent);
        } catch (err) {
          setError('Error fetching blog content. Please try again.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchBlogContent();
  }, [params.id]);

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
        <div className="mt-8 text-center">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}