import { type FC, useEffect, useState } from "react";

const ParallaxSection: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <h2 className="text-9xl font-bold text-gray-200 opacity-20">
          INNOVACIÓN
        </h2>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">Nuestro Compromiso</h3>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos dedicados a impulsar la innovación y el crecimiento
            sostenible en todas nuestras operaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
