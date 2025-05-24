import { Button } from "./Button";

export const CTA = () => {
  return (
    <section className="text-center py-16">
      <h4 className=" font-semibold text-3xl text-yellow-600">Comienza Sin Riesgo</h4>
      <h2 className="text-4xl font-bold mt-2">¿Listo para llevar tu gestión al siguiente nivel?</h2>
      <p className="mt-2 text-2xl text-gray-600">Descubre cómo nuestra solución puede simplificar tu administración y potenciar tu rentabilidad.</p>
      <div className="mt-4">
        <Button variant="gradient">Empezar Ahora</Button>
      </div>
    </section>
  );
};
