import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="w-full bg-white py-26">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Texto del Hero */}
        <div>
          <p className="text-2xl font-semibold text-yellow-600 mb-2">
            Gestión Inmobilaria De Vanguardia
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revoluciona La Gestión <br /> De Tus Propiedades
          </h1>

          <p className="text-lg text-black-600 mb-8">
            Nuestra plataforma intuitiva te da el control total <br /> simplificando cada aspecto de la administracion de rentas. <br/> Una solución de <span className="font-bold">MictlanLabs</span> 
          </p>

          <div className="flex gap-12">
            <Button variant="gradient">Empezar Ahora</Button>
            <Button variant="secondary">Empezar Ahora</Button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src="/hero-image.png" 
            alt="IMG"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
