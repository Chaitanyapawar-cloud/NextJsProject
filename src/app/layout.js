import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><div style={{textAlign:"center"}}><h1>Used Books Market</h1>
        {children}</div></body>
    </html>
  );
}
