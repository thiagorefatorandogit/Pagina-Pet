'use client';

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 pt-6 flex justify-end">

        <nav className="flex gap-6 text-white font-medium">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#sobre" className="hover:text-gray-200">Sobre</a>
          <a href="#services" className="hover:text-gray-200">Serviços</a>
          <a href="#marcas" className="hover:text-gray-200">Marcas</a>
        </nav>

      </div>
    </header>
  );
}
