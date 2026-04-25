'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isDark = resolvedTheme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-foreground/10 shadow-[0_1px_24px_rgba(0,0,0,0.15)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto h-full px-8 flex items-center justify-between gap-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-mono text-[15px] font-medium text-foreground tracking-tight flex items-center gap-2 flex-shrink-0"
        >
          <span className="text-accent font-normal">[</span>
          corey.dev
          <span className="text-accent font-normal">]</span>
        </Link>

        {/* Center links (desktop) */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-foreground'
                    : 'text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          {/* Theme toggle — gated behind `mounted` so server HTML matches client first paint */}
          <button
            type="button"
            onClick={() => mounted && setTheme(isDark ? 'light' : 'dark')}
            aria-label={mounted ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme'}
            suppressHydrationWarning
            className="w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent text-foreground/60 hover:border-foreground hover:text-foreground hover:bg-foreground/5 flex items-center justify-center transition-colors duration-150 flex-shrink-0"
          >
            {mounted ? (
              isDark ? <Sun className="w-[15px] h-[15px]" /> : <Moon className="w-[14px] h-[14px]" />
            ) : (
              <span className="w-[15px] h-[15px]" />
            )}
          </button>

          {/* Resume button (hidden on small screens to leave room for hamburger) */}
          <a
            href="/Corey_McNutt_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[13px] font-semibold font-mono text-foreground border border-foreground/20 hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors duration-150 whitespace-nowrap"
          >
            <Download className="w-3 h-3" />
            resume.pdf
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-[34px] h-[34px] rounded-lg border border-foreground/20 bg-transparent text-foreground/60 hover:border-foreground hover:text-foreground hover:bg-foreground/5 flex items-center justify-center transition-colors duration-150 flex-shrink-0"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md border-b border-foreground/10 shadow-lg">
          <ul className="max-w-[1100px] mx-auto px-8 py-4 flex flex-col gap-1 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive(link.href)
                      ? 'text-foreground bg-foreground/5'
                      : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="sm:hidden mt-2">
              <a
                href="/Corey_McNutt_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[13px] font-semibold font-mono text-foreground border border-foreground/20 hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors duration-150"
              >
                <Download className="w-3 h-3" />
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
