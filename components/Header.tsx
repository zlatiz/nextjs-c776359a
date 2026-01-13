import Link from 'next/link';
import Image from 'next/image';

const NAV = [
  { label: 'Home', href: 'https://johnkeanestudios.com/' },
  { label: 'About', href: 'https://johnkeanestudios.com/html/about' },
  { label: 'Discography', href: 'https://johnkeanestudios.com/html/discography' },
  { label: 'Recording Services', href: 'https://johnkeanestudios.com/html/recordingservices' },
  { label: 'Client List', href: 'https://johnkeanestudios.com/html/clientlist' },
  { label: 'Equipment', href: 'https://johnkeanestudios.com/html/equipment' },
  { label: 'Music Clips', href: 'https://johnkeanestudios.com/html/clips' },
  { label: 'Photos', href: 'https://johnkeanestudios.com/html/photos' },
  { label: 'Contact', href: 'https://johnkeanestudios.com/html/contact' }
];

export default function Header(): JSX.Element {
  const banner = 'https://johnkeanestudios.com/Images/j.keane2.jpg';
  const safeBanner = encodeURI(banner);

  return (
    <header className="w-full sticky top-0 z-40 bg-[rgba(7,8,10,0.6)] backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-black/20 flex-shrink-0">
                <Image src={safeBanner} alt="John Keane" width={48} height={48} unoptimized />
              </div>
              <div>
                <div className="text-lg font-semibold">John Keane</div>
              </div>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-4">
            {(Array.isArray(NAV) ? NAV : []).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
}
