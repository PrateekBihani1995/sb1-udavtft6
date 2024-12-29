export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  description: string;
  preview: string;
  published: string;
  pages: number;
}

export interface ReadingProgress {
  bookId: string;
  currentPage: number;
  lastRead: Date;
}