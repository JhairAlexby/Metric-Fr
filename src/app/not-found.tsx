import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Error 404</h1>
      <p className="text-lg mb-6">Página no encontrada</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la página principal
      </Link>
    </div>
  );
}