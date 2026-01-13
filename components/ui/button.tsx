"use client";
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

export default function Button({ children, onClick, href }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-black font-medium shadow-sm transition-transform transform hover:-translate-y-0.5">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-black font-medium shadow-sm transition-transform transform hover:-translate-y-0.5">
      {children}
    </button>
  );
}
