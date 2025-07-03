import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        // Custom styling for different markdown elements
        h1: ({ children }) => (
          <h1 className="text-3xl md:text-4xl font-bold text-[#264065] mt-8 mb-6 font-['Poppins'] leading-tight">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl md:text-3xl font-bold text-[#264065] mt-8 mb-4 font-['Poppins'] leading-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl md:text-2xl font-bold text-[#264065] mt-6 mb-3 font-['Poppins'] leading-tight">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg md:text-xl font-bold text-[#264065] mt-4 mb-2 font-['Poppins'] leading-tight">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-base md:text-lg font-bold text-[#264065] mt-4 mb-2 font-['Poppins'] leading-tight">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-sm md:text-base font-bold text-[#264065] mt-4 mb-2 font-['Poppins'] leading-tight">
            {children}
          </h6>
        ),
        p: ({ children }) => (
          <p className="text-[#6c757d] font-['Poppins'] text-base md:text-lg leading-relaxed mb-6">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-[#264065]">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-[#264065]">
            {children}
          </em>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-[#6c757d] font-['Poppins'] text-base md:text-lg leading-relaxed">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#C88652] pl-6 py-4 mb-6 bg-[#FAF8F5] rounded-r-lg">
            <div className="text-[#264065] font-['Poppins'] text-base md:text-lg leading-relaxed italic">
              {children}
            </div>
          </blockquote>
        ),
        code: ({ children, node, ...props }) => {
          const isInline = node?.position?.start.line === node?.position?.end.line;
          if (isInline) {
            return (
              <code className="bg-gray-100 text-[#264065] px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className="block bg-gray-100 text-[#264065] p-4 rounded-lg text-sm font-mono overflow-x-auto mb-6">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-gray-100 text-[#264065] p-4 rounded-lg text-sm font-mono overflow-x-auto mb-6">
            {children}
          </pre>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-[#C88652] hover:text-[#264065] underline transition-colors duration-200"
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
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
        ),
        hr: () => (
          <hr className="border-t border-gray-200 my-8" />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 bg-[#FAF8F5] px-4 py-2 text-left font-bold text-[#264065]">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2 text-[#6c757d]">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
} 