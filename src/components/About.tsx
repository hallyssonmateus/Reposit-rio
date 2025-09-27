import { FaRegCheckCircle } from "react-icons/fa";
import { useIntersect } from "../hooks/useIntersect";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";

function About (){
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const destaqueTitleRef = useRef(null);
  const liRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [destaquesRef, isVisible] = useIntersect<HTMLDivElement>({ threshold: 0.5 });
  const [sobreRef, sobreVisible] = useIntersect<HTMLDivElement>({ threshold: 0.5 });

    useLayoutEffect(() => {
      const ctx = gsap.matchMedia();
      // Destaques Profissionais
      ctx.add("(min-width: 768px)", () => {
        gsap.set(destaqueTitleRef.current, { x: -700, opacity: 0 });
        liRefs.forEach(ref => gsap.set(ref.current, { x: -700, opacity: 0 }));
        return () => {
          gsap.killTweensOf([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)]);
        };
      });
      ctx.add("(max-width: 767px)", () => {
        gsap.set(destaqueTitleRef.current, { y: -200, opacity: 0 });
        liRefs.forEach(ref => gsap.set(ref.current, { y: -200, opacity: 0 }));
        return () => {
          gsap.killTweensOf([destaqueTitleRef.current, ...liRefs.map(ref => ref.current)]);
        };
      });
      // Sobre Mim
      ctx.add("(min-width: 768px)", () => {
        gsap.set(sobreRef.current, { x: 500, opacity: 0 });
        return () => {
          gsap.killTweensOf(sobreRef.current);
        };
      });
      ctx.add("(max-width: 767px)", () => {
        gsap.set(sobreRef.current, { y: 200, opacity: 0 });
        return () => {
          gsap.killTweensOf(sobreRef.current);
        };
      });
      return () => ctx.revert();
    }, []);

    useEffect(() => {
      // Destaques Profissionais
      if (isVisible) {
        if (window.innerWidth >= 768) {
          gsap.to(destaqueTitleRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
          liRefs.forEach((ref, i) => {
            gsap.to(ref.current, { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 * i });
          });
        } else {
          gsap.to(destaqueTitleRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
          liRefs.forEach((ref, i) => {
            gsap.to(ref.current, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 * i });
          });
        }
      } else {
        if (window.innerWidth >= 768) {
          gsap.to(destaqueTitleRef.current, { x: -700, opacity: 0 });
          liRefs.forEach(ref => gsap.to(ref.current, { x: -700, opacity: 0 }));
        } else {
          gsap.to(destaqueTitleRef.current, { y: -200, opacity: 0 });
          liRefs.forEach(ref => gsap.to(ref.current, { y: -200, opacity: 0 }));
        }
      }
      // Sobre Mim
      if (sobreVisible) {
        if (window.innerWidth >= 768) {
          gsap.to(sobreRef.current, { x: 0, opacity: 1, duration: 1, ease: "power2.out" });
        } else {
          gsap.to(sobreRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
        }
      } else {
        if (window.innerWidth >= 768) {
          gsap.to(sobreRef.current, { x: 500, opacity: 0 });
        } else {
          gsap.to(sobreRef.current, { y: 200, opacity: 0 });
        }
      }
    }, [isVisible, sobreVisible]);

    return (
      <section className="py-16 bg-gray-100 text-gray-800 dark:bg-gray-900">
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
        <h3 ref={destaqueTitleRef} className="text-2x1 font-bold mb-4 text-gray-900 dark:text-gray-300">Destaques Profissionais</h3>
        <ul className="space-y-4 text-gray-700">
          <li ref={liRefs[0]} className="flex itens-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Experiência em desenvolvimento de aplicações com .NET, C# e SQL Server</li>
          <li ref={liRefs[1]} className="flex itens-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Vivência com React, JavaScript, HTML5 e CSS3 no front-end</li>
          <li ref={liRefs[2]} className="flex itens-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Conhecimentos em APIs REST, Git/GitHub, metodologias ágeis (Scrum/Kanban)</li>
          <li ref={liRefs[3]} className="flex itens-center gap-2 dark:text-gray-300">
            <FaRegCheckCircle className="text-blue-600 text-lg"/>
            Foco em aprendizado contínuo, análise de problemas e desenvolvimento de soluções eficientes</li>
        </ul>
      </div>
    </section>  
    )
}

export default About