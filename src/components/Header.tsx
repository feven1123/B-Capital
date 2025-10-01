'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const publicLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Gallery', href: '/Gallery' },
];

const adminLinks: NavLink[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Listings', href: '/admin/listings' },
  { label: 'News', href: '/admin/news' },
  { label: 'Requests', href: '/admin/requests' },
  { label: 'Profile', href: '/admin/profile' },
  { label: 'Logout', href: '/admin/logout' },
];

export default function Header() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    setIsAdmin(pathname.startsWith('/admin'));
  }, [pathname]);

  const links = isAdmin ? adminLinks : publicLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href={isAdmin ? '/admin/dashboard' : '/'}
            className="flex items-center space-x-0.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/1.png"
              alt="Logo"
              width={100}
              height={50}
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Our Service dropdown */}
            {!isAdmin && (
              <div className="relative group">
                <button className="text-gray-600 hover:text-primary transition-colors font-medium flex items-center">
                  Our Service
                  <svg
                    className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Link
                    href="/Services/Masjid"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white rounded-t-lg"
                  >
                    Indoor Masjid
                  </Link>
                  <Link
                    href="/Services/Shuttle"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white"
                  >
                    Shuttle Service
                  </Link>
                  <Link
                    href="/Services/Gym"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white"
                  >
                    Gym
                  </Link>
                  <Link
                    href="/Restaurant"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white"
                  >
                    Restaurant
                  </Link>
                  <Link
                    href="/Events"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white rounded-b-lg"
                  >
                    Events
                  </Link>
                </div>
              </div>
            )}

            {/* Book Now button */}
            {!isAdmin && (
              <Link
                href="/Book"
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/80 backdrop-blur-md shadow-lg px-4 py-3 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Our Service dropdown (mobile) */}
          {!isAdmin && (
            <div className="space-y-1">
              <button
                className="w-full text-left block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Our Service
              </button>
              {serviceOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    href="/Services/Masjid"
                    className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Indoor Masjid
                  </Link>
                  <Link
                    href="/Services/Shuttle"
                    className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Shuttle Service
                  </Link>
                  <Link
                    href="/Services/Gym"
                    className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Gym
                  </Link>
                  <Link
                    href="/Restaurant"
                    className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Restaurant
                  </Link>
                  <Link
                    href="/Events"
                    className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Book Now button for mobile */}
          {!isAdmin && (
            <Link
              href="/Book"
              className="block py-2 px-3 rounded bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
