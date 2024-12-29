import React, { useState } from 'react';
import { BookCard } from './BookCard';
import { Reader } from './Reader';
import { books } from '../../data/books';
import { Book } from '../../types';

export function BookList() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-xl text-gray-600">
            Discover our latest publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onRead={setSelectedBook}
            />
          ))}
        </div>

        {selectedBook && (
          <Reader
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </div>
    </section>
  );
}