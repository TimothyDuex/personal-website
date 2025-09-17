import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = "",
}) => {
  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom component overrides
          h1: ({ children }) => (
            <h1 className="adaptive-text-heading mb-6 mt-8">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="adaptive-text-subheading mb-4 mt-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-semibold adaptive-text-body mb-3 mt-5">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 adaptive-text-body-line-height adaptive-text-body">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 adaptive-text-body">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 adaptive-text-body">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="ml-4">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-fill-border pl-4 py-2 mb-2 italic bg-secondary-bg adaptive-text-caption">
              {children}
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto">{children}</pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-secondary-text hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="max-w-full h-auto rounded-lg shadow-md my-4"
            />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-secondary-border bg-secondary-bg px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-secondary-border px-4 py-2">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
