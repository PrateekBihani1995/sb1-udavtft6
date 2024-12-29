import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { PublishingServices } from './components/home/PublishingServices';
import { AuthorResources } from './components/home/AuthorResources';
import { BookList } from './components/books/BookList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PublishingServices />
      <BookList />
      <AuthorResources />
    </div>
  );
}

export default App;