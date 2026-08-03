import { useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Leaf, ShoppingCart, Sparkles, Star, Wheat } from 'lucide-react';
import CategoryShowcase from './CategoryShowcase';

type BadgeItem = {
  label: string;
  icon: typeof Leaf;
  description: string;
};

type ProductItem = {
  name: string;
  price: string;
  unit: string;
  image: string;
  tagline: string;
  badges: BadgeItem[];
};

type ReviewItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
};

type AutoCarouselSectionProps<T> = {
  title: string;
  subtitle: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const arrivals: ProductItem[] = [
  {
    name: 'Pure Harvest Box',
    price: '₹749',
    unit: 'Per box',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    tagline: 'Farm-picked essentials for everyday wellness.',
    badges: [
      { label: 'Organic', icon: Leaf, description: 'Certified organic ingredients sourced close to home.' },
      { label: 'Fresh', icon: Sparkles, description: 'Picked and packed to preserve peak freshness.' },
      { label: 'Local', icon: Wheat, description: 'Made with local produce and mindful farming.' },
    ],
  },
  {
    name: 'Green Glow Tea',
    price: '₹299',
    unit: 'Per pouch',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    tagline: 'A calming blend for balanced mornings.',
    badges: [
      { label: 'Calm', icon: Leaf, description: 'Gentle botanicals designed for peaceful routines.' },
      { label: 'Pure', icon: Sparkles, description: 'No fillers, no artificial color, just clarity.' },
      { label: 'Herbal', icon: Wheat, description: 'Infused with herbs that feel grounded and fresh.' },
    ],
  },
  {
    name: 'Earthy Pantry Kit',
    price: '₹899',
    unit: 'Per kit',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    tagline: 'Staples that bring simplicity to your table.',
    badges: [
      { label: 'Staple', icon: Leaf, description: 'Everyday pantry favorites in one thoughtful box.' },
      { label: 'Nourish', icon: Sparkles, description: 'Rich in wholesome flavor and daily comfort.' },
      { label: 'Eco', icon: Wheat, description: 'Low-waste packaging and everyday sustainability.' },
    ],
  },
  {
    name: 'Morning Bloom Set',
    price: '₹649',
    unit: 'Per set',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04bca7fb?auto=format&fit=crop&w=900&q=80',
    tagline: 'A bright start with nourishing essentials.',
    badges: [
      { label: 'Bright', icon: Leaf, description: 'Vibrant ingredients chosen for energetic mornings.' },
      { label: 'Balance', icon: Sparkles, description: 'Balanced flavor that feels light and satisfying.' },
      { label: 'Clean', icon: Wheat, description: 'Simplified ingredients with a confident finish.' },
    ],
  },
  {
    name: 'Velvet Grove Oil',
    price: '₹549',
    unit: 'Per bottle',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    tagline: 'A grounding ritual for body and calm.',
    badges: [
      { label: 'Soft', icon: Leaf, description: 'Silky finish with a soothing botanical blend.' },
      { label: 'Glow', icon: Sparkles, description: 'A radiant feel that stays light and luxe.' },
      { label: 'Pure', icon: Wheat, description: 'Thoughtfully layered for everyday comfort.' },
    ],
  },
  {
    name: 'Forest Mist Candle',
    price: '₹399',
    unit: 'Per candle',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
    tagline: 'A gentle scent that brings the outdoors in.',
    badges: [
      { label: 'Aroma', icon: Leaf, description: 'Soft fragrance crafted for slow evenings.' },
      { label: 'Cozy', icon: Sparkles, description: 'Warm comfort with a calm, airy finish.' },
      { label: 'Handmade', icon: Wheat, description: 'Carefully made for thoughtful spaces.' },
    ],
  },
];

const bestSellers: ProductItem[] = [
  {
    name: 'Linen Calm Set',
    price: '₹1,199',
    unit: 'Per set',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tagline: 'Soft touches for calmer mornings and evenings.',
    badges: [
      { label: 'Soft', icon: Leaf, description: 'Comfort-first textures with a refined finish.' },
      { label: 'Relax', icon: Sparkles, description: 'Built for slower starts and longer rests.' },
      { label: 'Natural', icon: Wheat, description: 'Earthy tones and clean materials throughout.' },
    ],
  },
  {
    name: 'Sunlit Herb Bundle',
    price: '₹899',
    unit: 'Per bundle',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    tagline: 'Bright herbs for nourishing, everyday meals.',
    badges: [
      { label: 'Vibrant', icon: Leaf, description: 'Fresh herbs chosen for flavor and energy.' },
      { label: 'Cook', icon: Sparkles, description: 'Ready to bring color to everyday cooking.' },
      { label: 'Seasonal', icon: Wheat, description: 'Selected for balance, freshness, and ease.' },
    ],
  },
  {
    name: 'Golden Grain Tea',
    price: '₹349',
    unit: 'Per tin',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80',
    tagline: 'Gentle warmth with a grounding finish.',
    badges: [
      { label: 'Warm', icon: Leaf, description: 'A soothing cup made for slow rituals.' },
      { label: 'Calm', icon: Sparkles, description: 'Fresh flavor with a soft, balanced profile.' },
      { label: 'Pure', icon: Wheat, description: 'Crafted with clarity and mindful simplicity.' },
    ],
  },
  {
    name: 'Bamboo Pantry Box',
    price: '₹799',
    unit: 'Per box',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
    tagline: 'Everyday staples in a polished, minimal format.',
    badges: [
      { label: 'Tidy', icon: Leaf, description: 'Thoughtful storage and smart everyday use.' },
      { label: 'Neat', icon: Sparkles, description: 'Clean, modern presentation with useful essentials.' },
      { label: 'Earth', icon: Wheat, description: 'Designed to feel balanced and modern.' },
    ],
  },
];

const featuredProducts: ProductItem[] = [
  {
    name: 'Amber Glow Serum',
    price: '₹1,499',
    unit: 'Per bottle',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
    tagline: 'A radiant daily ritual for glow and calm.',
    badges: [
      { label: 'Glow', icon: Leaf, description: 'A light finish that feels fresh and polished.' },
      { label: 'Care', icon: Sparkles, description: 'Gentle support for everyday nourishment.' },
      { label: 'Botanics', icon: Wheat, description: 'Made to feel clean, calm, and thoughtful.' },
    ],
  },
  {
    name: 'Dusk Bloom Candle',
    price: '₹599',
    unit: 'Per candle',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
    tagline: 'A warm evening scent that softens the room.',
    badges: [
      { label: 'Evening', icon: Leaf, description: 'A calming fragrance made for unwinding.' },
      { label: 'Warm', icon: Sparkles, description: 'Soft glow and cozy comfort in one.' },
      { label: 'Craft', icon: Wheat, description: 'Thoughtfully made to feel elevated and lasting.' },
    ],
  },
  {
    name: 'Verdant Tea Set',
    price: '₹699',
    unit: 'Per set',
    image: 'https://images.unsplash.com/photo-1465205568425-3f8b1b1b2e5f?auto=format&fit=crop&w=900&q=80',
    tagline: 'A serene pairing for slow mornings.',
    badges: [
      { label: 'Ritual', icon: Leaf, description: 'Made for defined, grounded moments.' },
      { label: 'Fresh', icon: Sparkles, description: 'Bright flavor with refined presentation.' },
      { label: 'Modern', icon: Wheat, description: 'Clean lines and calming tones throughout.' },
    ],
  },
  {
    name: 'Stoneware Pantry Duo',
    price: '₹949',
    unit: 'Per duo',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
    tagline: 'Minimal storage that feels elevated daily.',
    badges: [
      { label: 'Form', icon: Leaf, description: 'Simple, sculptural utility at home.' },
      { label: 'Useful', icon: Sparkles, description: 'Thoughtful pieces for calm routines.' },
      { label: 'Crafted', icon: Wheat, description: 'Made to feel considered and long lasting.' },
    ],
  },
];

const reviews: ReviewItem[] = [
  {
    name: 'Sana R.',
    role: 'Wellness enthusiast',
    quote: 'Everything feels refined, thoughtful, and genuinely easy to love.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Aarav P.',
    role: 'Home curator',
    quote: 'The products look beautiful and the experience feels calm from start to finish.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Nisha T.',
    role: 'Frequent shopper',
    quote: 'The details are premium, the packaging is thoughtful, and the service feels personal.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Milan S.',
    role: 'Design-minded buyer',
    quote: 'It feels like a modern boutique, but warm and grounded at the same time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
];

function AutoCarouselSection<T>({ title, subtitle, items, renderItem }: AutoCarouselSectionProps<T>) {
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
    <section className="mt-12 mb-12 w-full" aria-label={title}>
      <div className="mb-4 flex items-end justify-between gap-3 px-2 sm:px-0">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] text-left">{title}</p>
          <h3 className="text-xl font-semibold text-[var(--text-h)]  text-left">{subtitle}</h3>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollCarousel('left')}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:flex"
          aria-label={`Scroll ${title} left`}
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={carouselRef}
          className="relative flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f8fff4] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#f8fff4] to-transparent" />
          {items.map((item, index) => (
            <div key={index} className="min-w-[280px] max-w-[280px] snap-start sm:min-w-[300px] sm:max-w-[300px]">
              {renderItem(item)}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCarousel('right')}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 sm:flex"
          aria-label={`Scroll ${title} right`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  activeBadge,
  onBadgeHover,
}: {
  product: ProductItem;
  activeBadge: Record<string, string | null>;
  onBadgeHover: (productName: string, badgeLabel: string) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-emerald-200/70 bg-white p-4 shadow-[0_18px_40px_rgba(8,68,35,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_22px_48px_rgba(8,68,35,0.12)]">
      <div className="relative overflow-hidden rounded-[1.2rem]">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/15 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/85 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-800">
          Fresh pick
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col items-start gap-2 text-left">
        <div className="w-full">
          <h4 className="text-lg font-semibold leading-tight text-[var(--text-h)]">{product.name}</h4>
          <p className="mt-1 text-sm leading-6 text-[var(--text)]/80">{product.tagline}</p>
        </div>
      </div>

      <div className="mt-4 flex w-full items-end justify-between gap-3 text-left">
        <div className="flex flex-col items-start">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--text)]/60">{product.unit}</p>
          <p className="mt-1 text-lg font-semibold text-[var(--accent)]">{product.price}</p>
        </div>

        <button type="button" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95">
          <ShoppingCart size={15} />
          Add to cart
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {product.badges.map((badge) => {
          const Icon = badge.icon;
          const isActive = activeBadge[product.name] === badge.label;

          return (
            <button
              key={badge.label}
              type="button"
              onMouseEnter={() => onBadgeHover(product.name, badge.label)}
              onFocus={() => onBadgeHover(product.name, badge.label)}
              onClick={() => onBadgeHover(product.name, badge.label)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${isActive ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-md' : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-[var(--accent)] hover:bg-emerald-100 hover:shadow-sm'}`}
              aria-label={`${badge.label} details`}
            >
              <Icon size={15} />
            </button>
          );
        })}
      </div>

      <p className="mt-4 min-h-[3rem] rounded-2xl border border-emerald-100 bg-white/80 px-3 py-2 text-[0.72rem] leading-5 text-[var(--text)]/80">
        {activeBadge[product.name]
          ? product.badges.find((badge) => badge.label === activeBadge[product.name])?.description
          : 'Tap a badge to reveal quick product details.'}
      </p>
    </article>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article className="rounded-[1.75rem] border border-emerald-200/70 bg-white p-4 text-left shadow-[0_18px_40px_rgba(8,68,35,0.08)]">
      <div className="flex items-center gap-3">
        <img src={review.image} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-[var(--text-h)]">{review.name}</h4>
          <p className="text-sm text-[var(--text)]/70">{review.role}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-amber-500">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="mt-3 text-sm leading-6 text-[var(--text)]/80">“{review.quote}”</p>
    </article>
  );
}

export default function ProductCards() {
  const [activeBadge, setActiveBadge] = useState<Record<string, string | null>>({});

  const handleBadgeHover = (productName: string, badgeLabel: string) => {
    setActiveBadge((prev) => ({ ...prev, [productName]: badgeLabel }));
  };

  return (
    <section className="mt-10 mb-10 w-full" aria-label="Featured collections">

      <CategoryShowcase />

      <AutoCarouselSection
        title="New arrivals"
        subtitle="Fresh essentials for a calmer home"
        items={arrivals}
        renderItem={(product) => <ProductCard product={product as ProductItem} activeBadge={activeBadge} onBadgeHover={handleBadgeHover} />}
      />

      <AutoCarouselSection
        title="Best sellers"
        subtitle="Most-loved picks for everyday rituals"
        items={bestSellers}
        renderItem={(product) => <ProductCard product={product as ProductItem} activeBadge={activeBadge} onBadgeHover={handleBadgeHover} />}
      />

      <AutoCarouselSection
        title="Featured products"
        subtitle="A refined edit for mindful living"
        items={featuredProducts}
        renderItem={(product) => <ProductCard product={product as ProductItem} activeBadge={activeBadge} onBadgeHover={handleBadgeHover} />}
      />

      <AutoCarouselSection
        title="Customer reviews"
        subtitle="Loved by people who value calm, quality, and design"
        items={reviews}
        renderItem={(review) => <ReviewCard review={review as ReviewItem} />}
      />
    </section>
  );
}
