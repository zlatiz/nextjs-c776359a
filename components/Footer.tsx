import Link from 'next/link';

const FOOTER_NAV = [
  { title: 'Site', links: [ { label: 'Home', href: 'https://johnkeanestudios.com/' }, { label: 'About', href: 'https://johnkeanestudios.com/html/about' }, { label: 'Discography', href: 'https://johnkeanestudios.com/html/discography' } ] },
  { title: 'Work', links: [ { label: 'Music Clips', href: 'https://johnkeanestudios.com/html/clips' }, { label: 'Photos', href: 'https://johnkeanestudios.com/html/photos' }, { label: 'Client List', href: 'https://johnkeanestudios.com/html/clientlist' } ] },
  { title: 'Studio', links: [ { label: 'Equipment', href: 'https://johnkeanestudios.com/html/equipment' }, { label: 'Recording Services', href: 'https://johnkeanestudios.com/html/recordingservices' }, { label: 'Contact', href: 'https://johnkeanestudios.com/html/contact' } ] }
];

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(Array.isArray(FOOTER_NAV) ? FOOTER_NAV : []).map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-2">{col.title}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {(Array.isArray(col.links) ? col.links : []).map((lnk) => (
                  <li key={lnk.href}>
                    <Link href={lnk.href} className="hover:text-[var(--foreground)]">{lnk.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-[var(--muted-foreground)] text-sm">
          <p>Copyright 2011, johnkeanestudios.com</p>
        </div>
      </div>
    </footer>
  );
}
