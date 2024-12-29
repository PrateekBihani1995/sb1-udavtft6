import React, { useState } from 'react';
import { Book } from '../../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ReaderProps {
  book: Book;
  onClose: () => void;
}

export function Reader({ book, onClose }: ReaderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg flex flex-col relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 p-8 overflow-y-auto bg-gray-50">
          <div className="max-w-2xl mx-auto prose">
            {book.preview}
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm">
            Page {currentPage} of {book.pages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(book.pages, p + 1))}
            className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
            disabled={currentPage === book.pages}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}