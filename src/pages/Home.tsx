import HeroCarousel from '../components/hero/HeroCarousel';
import TrustStrip from '../components/trust/TrustStrip';

export default function Home() {
  return (
    <section className="w-full text-center px-0 pt-0">
      <div className="mb-6 px-2 sm:px-0">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] mb-2">
          Organic living, reimagined
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 home-heading leading-tight">
          Welcome to <span className="millettvan-text">MILLETVAAN</span>
        </h1>
      </div>

      <HeroCarousel />
      <TrustStrip />
    </section>
  );
}
