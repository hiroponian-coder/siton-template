import { Profile } from '@/types/profile';

export default function VisualGallery({ profile }: { profile: Profile }) {
  if (!profile.image_urls || profile.image_urls.length < 3) return null;

  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {profile.image_urls.slice(0, 4).map((url, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={url} alt={`Gallery ${i}`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
          </div>
        ))}
      </div>
    </section>
  );
}