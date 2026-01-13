import React from 'react';
import Image from 'next/image';

type CardProps = {
  title?: string;
  image?: string;
};

export default function Card({ title, image }: CardProps) {
  const safeSrc = image ? encodeURI(image) : undefined;
  return (
    <article className="glass p-4 rounded-md shadow-sm">
      {safeSrc && (
        <div className="w-full h-40 overflow-hidden rounded-md mb-3">
          <Image src={safeSrc} alt={title ?? 'card-image'} width={800} height={400} className="object-cover w-full h-full" unoptimized />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
    </article>
  );
}
