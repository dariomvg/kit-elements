import { useEffect, useRef, useState } from "react";
import "../styles/containerViews.css";
import { ContainerViewsProps } from "../types";

export const ContainerViews = ({
  children,
  threshold = 0.9,
  effect = "",
}: ContainerViewsProps): JSX.Element => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <section ref={elementRef} className={`content ${effect} ${isVisible ? "animation" : ""}`}>
      {children}
    </section>
  );
};
