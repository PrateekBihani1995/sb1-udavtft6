import React from 'react';
import { BookOpen } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <BookOpen size={28} className="text-indigo-600" />
            <span className="text-xl font-bold">PageTurn Press</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/books">Books</NavLink>
            <NavLink href="/publish">Publish</NavLink>
            <NavLink href="/resources">Author Resources</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
          <button className="md:hidden p-2">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}