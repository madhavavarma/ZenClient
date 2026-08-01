import HeroCarousel from '../components/hero/HeroCarousel';

export default function Home() {
  return (
    <section className="w-full max-w-6xl text-center px-2 sm:px-0">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] mb-2">
          Organic living, reimagined
        </p>
        <h1 className="text-4xl font-semibold mb-3 home-heading">
          Welcome to <span className="millettvan-text">MILLETVAAN</span>
        </h1>

      </div>

      <HeroCarousel />
    </section>
  );
}
