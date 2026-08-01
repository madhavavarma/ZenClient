import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Secure checkout',
    text: 'Protected payments and trusted delivery every time.',
  },
  {
    icon: Clock3,
    title: '24/7 support',
    text: 'Friendly help whenever you need it, day or night.',
  },
  {
    icon: BadgeCheck,
    title: 'Easy returns',
    text: 'Hassle-free returns and a smooth shopping experience.',
  },
  {
    icon: Truck,
    title: 'Fast delivery',
    text: 'Quick dispatch so your favorites arrive promptly.',
  },
];

export default function TrustStrip() {
  return (
    <section className="mt-8 mb-8 w-full" aria-label="Customer trust highlights">
      <div className="w-full border-y border-dashed border-[var(--border)]">
        <div className="grid gap-0 border-x border-dashed border-[var(--border)] grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === trustItems.length - 1;

            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center ${isLast ? '' : 'border-b border-dashed border-[var(--border)] pb-4 sm:border-b-0 sm:border-r sm:border-dashed sm:pr-4 sm:pb-0'} ${index % 2 === 0 ? 'border-r border-dashed border-[var(--border)] pr-2' : 'pl-2'}`}
              >
                <div className="mb-3 flex h-32 w-32 items-center justify-center text-[var(--accent)] sm:h-36 sm:w-36">
                  <Icon size={56} aria-hidden="true" />
                </div>
                <div className="max-w-[180px] text-center">
                  <h3 className="mb-1 text-base font-semibold text-[var(--text-h)]">{item.title}</h3>
                  <p className="text-[0.78rem] italic leading-5 text-[var(--text)]">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
