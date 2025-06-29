export default function BookCard({ book }) {
  return (
    <li>
      <strong>{book.bookName}</strong> - {book.userName} ({book.email}) - ₹{book.price}
    </li>
  );
}