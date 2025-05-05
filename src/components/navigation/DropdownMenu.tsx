'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
  subItems?: DropdownItem[];
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function DropdownMenu({ items, isOpen, onClose }: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isOpen) {
      setIsVisible(true);
    } else {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this with transition duration
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className={`absolute left-0 mt-1 z-10 min-w-64 transition-all duration-300 ease-in-out transform
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      onMouseLeave={onClose}
    >
      <div className="p-1 rounded-md shadow-xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5">
        <div className="relative grid gap-1 p-2">
          {items.map((item, index) => (
            <div key={item.label} className="relative">
              {item.subItems ? (
                <div className="group">
                  <button
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium flex justify-between items-center
                      text-gray-700 hover:text-cnbd-red hover:bg-gray-50 transition-all duration-200"
                  >
                    <span>{item.label}</span>
                    <span className="transition-transform duration-200 group-hover:rotate-180">▸</span>
                  </button>
                  
                  <div className="absolute left-full top-0 ml-1 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-left min-w-52">
                    <div className="p-1 rounded-md shadow-xl bg-white/95 backdrop-blur-sm ring-1 ring-black/5">
                      <div className="p-2 grid gap-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-cnbd-red hover:bg-gray-50 transition-all duration-200"
                            onClick={onClose}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="animate-fade-in opacity-0 fill-mode-forwards block px-3 py-2 rounded-md text-sm text-gray-700 hover:text-cnbd-red hover:bg-gray-50 transition-all duration-200"
                  onClick={onClose}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cnbd-red to-red-400 animate-gradient-shift bg-200%"></div>
    </div>
  );
} 