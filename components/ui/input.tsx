"use client";
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="flex flex-col text-sm text-[var(--muted-foreground)]">
      {label && <span className="mb-1">{label}</span>}
      <input {...props} className="px-3 py-2 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]" />
    </label>
  );
}
