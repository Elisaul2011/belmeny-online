import { type FC, useEffect, useState, useRef } from "react";

interface ImagenProps {
  imagen: string;
  speed?: number; // Prop opcional para la velocidad del parallax
}

const ParallaxSection: FC<ImagenProps> = ({ imagen, speed = 0.5 }) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); // Referencia a la sección

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Verifica si la referencia existe
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollTop = window.pageYOffset;

        // Calcula el offset solo si la sección está en el viewport
        if (
          scrollTop + window.innerHeight >= sectionTop &&
          scrollTop <= sectionTop + sectionHeight
        ) {
          setOffset(scrollTop - sectionTop);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" ref={sectionRef}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset * speed}px)`, // Usa la prop speed
        }}
      />
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white"></div>
    </section>
  );
};

export default ParallaxSection;
