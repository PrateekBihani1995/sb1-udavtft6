import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}