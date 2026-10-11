import React from 'react';
import { SITE_CONFIG } from '../config';

interface CtaButtonProps {
  text: string;
  subtext?: string;
  className?: string;
  size?: 'normal' | 'large';
  fullWidth?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  subtext,
  className = '',
  size = 'large',
  fullWidth = false
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If the checkout URL is still a placeholder, scroll smoothly to the offer section
    if (SITE_CONFIG.checkoutUrl === '[CHECKOUT_URL]' || SITE_CONFIG.checkoutUrl.startsWith('[')) {
      e.preventDefault();
      const offerSection = document.getElementById('oferta');
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isExternal = SITE_CONFIG.checkoutUrl.startsWith('http');

  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a
        href={SITE_CONFIG.checkoutUrl.startsWith('[') ? '#oferta' : SITE_CONFIG.checkoutUrl}
        onClick={handleClick}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`group inline-flex items-center justify-center font-bold text-white transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center ${
          size === 'large'
            ? 'px-6 sm:px-10 py-4 sm:py-4.5 text-lg sm:text-xl rounded-[14px]'
            : 'px-5 py-3.5 text-base rounded-[12px]'
        } ${fullWidth ? 'w-full' : 'w-full sm:w-auto'} ${className}`}
        style={{
          backgroundColor: '#22C55E',
          boxShadow: '0 8px 24px rgba(34, 197, 94, 0.28)'
        }}
      >
        <span className="flex items-center gap-2">
          {text}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>

      {subtext && (
        <p className="mt-2.5 text-xs sm:text-sm text-slate-500 font-medium text-center">
          {subtext}
        </p>
      )}
    </div>
  );
};
