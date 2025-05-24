import Image from "next/image";

export function Features() {
  return (
    <section className="px-6 py-16 bg-white">
      <h3 className="text-center text-3xl text-yellow-600 font-semibold mb-4">Optimiza Cada Proceso</h3>
      <h2 className="text-center text-4xl font-bold mb-4">Funcionalidades diseñadas para ti.</h2>
      <p className="text-center text-lg text-gray-800 max-w-xl mx-auto mb-32">
        Explora cómo nuestra plataforma simplifica las tareas complejas de la administración de propiedades.
      </p>

      <div className="space-y-32">
        {/* Primer feature */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="w-full flex justify-center">
            <Image
              src="/feature-1.png"
              alt="Organización Impecable"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="w-full">
            <h4 className="text-yellow-600 text-3xl font-semibold text-gray-800 mb-4">Organización Impecable</h4>
            <h3 className="font-bold text-4xl mb-4">Contratos y Control de Pagos Centralizados</h3>
            <p className="text-gray-700 mb-4">
              Digitaliza y almacena contratos de forma segura. Programa recordatorios de pago y mantén un control absoluto de tus ingresos y el estado de cuenta de cada inquilino.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Almacenamiento digital seguro de contratos.</li>
              <li>Recordatorios automáticos de fechas de pago.</li>
              <li>Historial de transacciones y pagos detallado.</li>
            </ul>
          </div>
        </div>

        {/* Segundo feature */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="w-full order-2 md:order-1">
            <h4 className="text-yellow-600 font-semibold text-3xl text-gray-800 mb-4">Decisiones Estratégicas</h4>
            <h3 className="font-bold text-4xl mb-4">Reportes Inteligentes y Claros</h3>
            <p className="text-gray-700 mb-4">
              Obtén una visión completa de tus finanzas y el rendimiento de tus propiedades con reportes personalizables y fáciles de entender.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Análisis de ingresos y gastos.</li>
              <li>Métricas de ocupación y rentabilidad.</li>
              <li>Exportación de datos simplificada.</li>
            </ul>
          </div>
          <div className="w-full flex justify-center order-1 md:order-2">
            <Image
              src="/feature-2.png"
              alt="Reportes Inteligentes"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
