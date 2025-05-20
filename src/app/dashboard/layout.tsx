import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar para navegación del dashboard */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Inicio Dashboard
          </Link>
          {/* Aquí se pueden añadir más opciones de navegación en el futuro */}
        </nav>
      </aside>
      
      {/* Contenido principal */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}