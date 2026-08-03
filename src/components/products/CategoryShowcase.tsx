import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CategoryItem = {
  name: string;
  image: string;
  description: string;
};

export const categories: CategoryItem[] = [
  {
    name: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    description: 'Gentle rituals and calming essentials.',
  },
  {
    name: 'Home',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Thoughtful pieces for a more serene space.',
  },
  {
    name: 'Daily rituals',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    description: 'Small comforts for your everyday rhythm.',
  },
  {
    name: 'Gifting',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    description: 'Beautiful bundles for thoughtful occasions.',
  },
  {
    name: 'New arrivals',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04bca7fb?auto=format&fit=crop&w=900&q=80',
    description: 'Freshly curated picks for the season.',
  },
];

export default function CategoryShowcase() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="mt-8 mb-8 w-full" aria-label="Shop by category">
      <div className="mb-4 flex items-end justify-between gap-3 px-2 sm:px-0">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Browse by mood</p>
          <h3 className="text-xl font-semibold text-[var(--text-h)]">Popular categories to explore</h3>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollCarousel('left')}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:flex"
          aria-label="Scroll categories left"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={carouselRef}
          className="relative flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {categories.map((category) => (
            <article
              key={category.name}
              className="group min-w-[220px] max-w-[220px] snap-start overflow-hidden rounded-[1.5rem] border border-emerald-200/70 bg-white shadow-[0_14px_30px_rgba(8,68,35,0.06)] transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_18px_36px_rgba(8,68,35,0.1)] sm:min-w-[240px] sm:max-w-[240px]"
            >
              <div className="relative h-56 overflow-hidden rounded-[1.2rem] p-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full rounded-[1rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-2 rounded-[1rem] bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent" />
              </div>

              <div className="px-3 pb-4 pt-2">
                <h4 className="text-base font-semibold text-[var(--text-h)]">{category.name}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--text)]/70">{category.description}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCarousel('right')}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:flex"
          aria-label="Scroll categories right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
