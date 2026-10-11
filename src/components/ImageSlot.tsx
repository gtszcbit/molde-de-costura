import React from 'react';
import { Scissors, FileText, Printer, Shirt, Eye, Image as ImageIcon } from 'lucide-react';

interface ImageSlotProps {
  imageSrc: string;
  imageKeyName?: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  label?: string;
  recommendedSize?: string;
  sublabel?: string;
  iconType?: 'scissors' | 'pdf' | 'printer' | 'shirt' | 'detail' | 'default';
  rounded?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  imageSrc,
  imageKeyName,
  alt,
  className = '',
  aspectRatio = 'video',
  label,
  recommendedSize,
  sublabel,
  iconType = 'default',
  rounded = 'rounded-2xl'
}) => {
  // Check if image is a placeholder (starts with '[' or contains '[', or is empty)
  const isPlaceholder = !imageSrc || imageSrc.startsWith('[') || imageSrc.trim() === '';

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video': return 'aspect-[16/10]';
      case 'wide': return 'aspect-[21/9]';
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'auto': return '';
      default: return 'aspect-[16/10]';
    }
  };

  const renderIcon = () => {
    switch (iconType) {
      case 'scissors':
        return <Scissors className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
      case 'pdf':
        return <FileText className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
      case 'printer':
        return <Printer className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
      case 'shirt':
        return <Shirt className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
      case 'detail':
        return <Eye className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
      default:
        return <ImageIcon className="w-8 h-8 text-[#2563EB] mb-2" strokeWidth={1.8} />;
    }
  };

  if (!isPlaceholder) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className} bg-slate-100 shadow-md`}>
        <img
          src={imageSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition duration-300 ${rounded}`}
          loading="lazy"
        />
      </div>
    );
  }

  // Elegant Sewing Blueprint / Pattern Placeholder
  return (
    <div
      className={`relative group overflow-hidden ${rounded} ${getAspectClass()} ${className} bg-gradient-to-br from-[#FFF9F0] via-[#FAF7F2] to-[#F1ECE4] border-2 border-dashed border-[#2563EB]/30 shadow-sm flex flex-col items-center justify-center p-6 text-center select-none`}
    >
      {/* Subtle sewing cutting lines pattern in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none pattern-stitch-dark" />
      
      {/* Corner cut markers representing sewing pattern alignment ticks */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#2563EB]/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#2563EB]/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#2563EB]/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#2563EB]/40 pointer-events-none" />

      {/* Measurement tape simulation accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#2563EB]/10 flex justify-between px-2 overflow-hidden pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="inline-block w-[1px] h-full bg-[#2563EB]/30" />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-sm px-2">
        <div className="p-3 bg-white/90 rounded-2xl shadow-sm border border-[#2563EB]/15 mb-3">
          {renderIcon()}
        </div>

        {label && (
          <h4 className="font-bold text-[#0F172A] text-sm md:text-base leading-snug">
            {label}
          </h4>
        )}

        {sublabel && (
          <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
            {sublabel}
          </p>
        )}

        {imageKeyName && (
          <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[11px] font-mono text-[#1E3A8A] font-semibold">
            <span>clave:</span>
            <span className="text-[#2563EB]">{imageKeyName}</span>
          </div>
        )}

        {recommendedSize && (
          <span className="text-[10px] text-[#94A3B8] mt-1.5 font-medium">
            Sugerido: {recommendedSize}
          </span>
        )}
      </div>
    </div>
  );
};
