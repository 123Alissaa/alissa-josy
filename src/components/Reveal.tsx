import { ElementType, ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
};

const Reveal = ({ as: Component = "div", children, className = "", delay }: RevealProps) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!element || reduceMotion || !("IntersectionObserver" in window)) {
      element?.classList.add("is-visible");
      return;
    }

    document.documentElement.classList.add("reveal-enabled");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.classList.add("is-visible");
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Component ref={elementRef} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default Reveal;