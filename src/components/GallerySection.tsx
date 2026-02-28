import { Profile } from '@/types/profile';
import Image from 'next/image';

export default function GallerySection({ profile }: { profile: Profile }) {
  const images = profile.image_urls || [];
  if (images.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((url, i) => (
            <div key={i} className="break-inside-avoid">
              <img 
                src={url} 
                alt={`Gallery ${i}`} 
                className="w-full rounded-2xl shadow-md hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}