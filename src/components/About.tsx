import { FaRegCheckCircle } from "react-icons/fa";
import { useIntersect } from "../hooks/useIntersect";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";

function About() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const destaqueTitleRef = useRef(null);
  const liRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [destaquesRef, isVisible] = useIntersect<HTMLDivElement>({ threshold: 0.5 });
  const [sobreRef, sobreVisible] = useIntersect<HTMLDivElement>({ threshold: 0.5 });

  const destaquesAnimated = useRef(false);
  const sobreAnimated = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.matchMedia();
    // Destaques Profissionais - Animações (Titulo e Listas)
    ctx.add("(min-width: 768px)", () => {
      gsap.set([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)], { x: -700, opacity: 0 });
      return () => {
        gsap.killTweensOf([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)]);
      };
    });
    ctx.add("(max-width: 767px)", () => {
      gsap.set([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)], { y: -200, opacity: 0 });
      return () => {
        gsap.killTweensOf([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)]);
      };
    });
    // Sobre Mim - Animações (Título e Parágrafos)
    ctx.add("(min-width: 768px)", () => {
      gsap.set([titleRef.current, subtitleRef.current], { x: 500, opacity: 0 });
      return () => {
        gsap.killTweensOf([titleRef.current, subtitleRef.current]);
      };
    });
    ctx.add("(max-width: 767px)", () => {
      gsap.set([titleRef.current, subtitleRef.current], { y: 200, opacity: 0 });
      return () => {
        gsap.killTweensOf([titleRef.current, subtitleRef.current]);
      };
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Destaques Profissionais - Entrada Unica
    if (isVisible && !destaquesAnimated.current) {
      const tl = gsap.timeline({ ease: "power2.out" });

      const listItems = liRefs.map(ref => ref.current);

      if (window.innerWidth >= 768) {
        tl.to(destaqueTitleRef.current, { x: 0, opacity: 1, duration: 1 })
          .to(listItems, { x: 0, opacity: 1, duration: 0.7, stagger: 0.2 }, "-=0.8");
      } else {
        tl.to(destaqueTitleRef.current, { y: 0, opacity: 1, duration: 1 })
          .to(listItems, { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 }, "-=0.8");
      }
      destaquesAnimated.current = true;
    }
    // Sobre Mim
    if (sobreVisible && !sobreAnimated.current) {
      const tl = gsap.timeline({ ease: "power2.out" });

      if (window.innerWidth >= 768) {
        tl.to(titleRef.current, { x: 0, opacity: 1, duration: 1 })
          .to(subtitleRef.current, { x: 0, opacity: 1, duration: 1 }, "-=0.5");
      } else {
        tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1 })
          .to(subtitleRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
      }
      sobreAnimated.current = true;
    }
  }, [isVisible, sobreVisible]);

  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900">
      <div ref={sobreRef} className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300 text-bold text-center mb-4">Sobre Mim</h2>
        <p ref={titleRef} className="text-lg leading-relaxed mb-4 dark:text-gray-300">
          Olá! Sou o Hallysson Mateus, sou engenheiro de automação que fiz transição para Desenvolvedor Web Full Stack com foco em tecnologias C#(.NET), Javascript, React.js. Minha jornada profissional é guiada em criar soluções impactantes e entregar valor através da tecnologia.
        </p>
        <p ref={subtitleRef} className="text-lg leading-relaxed dark:text-gray-300">
          Como a maioria dos desenvolvedores, aprecio tomar café, gosto de assistir animes, filmes de ação/comédia/terror, séries, ir á academia, jogar games e apreciar com minha familia e amigos.
        </p>
      </div>

      <div ref={destaquesRef} className="container text-left flex flex-col items-center py-6 px-40">
        <h3 ref={destaqueTitleRef} className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Destaques Profissionais</h3>
        <ul className="space-y-4 text-gray-700">
          <li ref={liRefs[0]} className="flex items-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg" />
            Experiência em desenvolvimento de aplicações com .NET, C# e SQL Server</li>
          <li ref={liRefs[1]} className="flex items-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg" />
            Vivência com React, JavaScript, HTML5 e CSS3 no front-end</li>
          <li ref={liRefs[2]} className="flex items-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg" />
            Conhecimentos em APIs REST, Git/GitHub, metodologias ágeis (Scrum/Kanban)</li>
          <li ref={liRefs[3]} className="flex items-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg" />
            Foco em aprendizado contínuo, análise de problemas e desenvolvimento de soluções eficientes</li>
        </ul>
      </div>
    </section>
  )
}

export default About