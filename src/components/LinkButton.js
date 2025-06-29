import Link from 'next/link';

export default function LinkButton({ href, children }) {
  return (
    <Link href={href}>
      <button
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {children}
      </button>
    </Link>
  );
}
