'use client';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      window.google?.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google?.accounts.id.renderButton(
        document.getElementById('googleSignInDiv'),
        { theme: 'outline', size: 'large' }
      );
    };
    document.body.appendChild(script);
  }, []);

  const handleCredentialResponse = async (response) => {
    const res = await fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: response.credential })
    });
    const data = await res.json();
    localStorage.setItem('token', data.jwt);
    window.location.href = '/seller/dashboard';
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold mb-4">Seller Login</h1>
      <div id="googleSignInDiv" className="flex justify-center"></div>
    </div>
  );
}