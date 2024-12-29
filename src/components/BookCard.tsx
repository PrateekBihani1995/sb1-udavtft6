import React from 'react';
import { Book } from '../types';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onRead: (book: Book) => void;
}

export function BookCard({ book, onRead }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-gray-700 mb-4 line-clamp-2">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${book.price}</span>
          <button
            onClick={() => onRead(book)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <BookOpen size={20} />
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
}