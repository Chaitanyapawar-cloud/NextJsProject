"use client"
import { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard';

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(setBooks)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Book Listings</h2>
      <ul>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}