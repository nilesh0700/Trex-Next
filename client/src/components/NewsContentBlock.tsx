import React from 'react';
import Image from 'next/image';
import { NewsContentBlock as NewsContentBlockType } from '@/types/strapi';
import MarkdownRenderer from './MarkdownRenderer';

interface NewsContentBlockProps {
  block: NewsContentBlockType;
}

export default function NewsContentBlock({ block }: NewsContentBlockProps) {
  const getImageSizeClasses = (size?: string) => {
    switch (size) {
      case 'small':
        return 'h-48 md:h-64';
      case 'medium':
        return 'h-64 md:h-80';
      case 'large':
        return 'h-80 md:h-96';
      case 'full':
        return 'h-96 md:h-[500px]';
      default:
        return 'h-64 md:h-80';
    }
  };

  const getImagePositionClasses = (position?: string) => {
    switch (position) {
      case 'left':
        return 'float-left mr-6 mb-4 max-w-sm';
      case 'right':
        return 'float-right ml-6 mb-4 max-w-sm';
      case 'center':
        return 'mx-auto';
      case 'full-width':
        return 'w-full';
      default:
        return 'mx-auto';
    }
  };

  switch (block.type) {
    case 'text':
      return (
        <div className="prose prose-lg max-w-none mb-6 prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-em:text-gray-700 prose-li:text-gray-800 prose-blockquote:text-gray-700">
          <MarkdownRenderer content={block.content || ''} />
        </div>
      );

    case 'image':
      if (!block.image) return null;
      
      const imageClasses = `${getImageSizeClasses(block.imageSize)} ${getImagePositionClasses(block.imagePosition)}`;
      
      return (
        <div className={`my-8 ${block.imagePosition === 'left' || block.imagePosition === 'right' ? '' : 'text-center'}`}>
          <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${imageClasses}`}>
            <Image
              src={block.image}
              alt={block.imageAlt || 'News image'}
              fill
              className="object-cover"
            />
          </div>
          {block.imageCaption && (
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              {block.imageCaption}
            </p>
          )}
        </div>
      );

    case 'quote':
      return (
        <blockquote className="my-8 p-6 bg-gray-50 border-l-4 border-[#264065] rounded-r-lg">
          <p className="text-lg italic text-gray-800 mb-4">
            "{block.quoteText}"
          </p>
          {block.quoteAuthor && (
            <cite className="text-sm font-semibold text-[#264065]">
              — {block.quoteAuthor}
            </cite>
          )}
        </blockquote>
      );

    case 'video':
      if (!block.videoUrl) return null;
      
      return (
        <div className="my-8">
          <div className="relative w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
            {block.videoUrl.includes('youtube.com') || block.videoUrl.includes('youtu.be') ? (
              <iframe
                src={block.videoUrl.replace('watch?v=', 'embed/')}
                title="Video content"
                className="w-full h-full"
                allowFullScreen
              />
            ) : (
              <video
                src={block.videoUrl}
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      );

    default:
      return null;
  }
} 