import { useEffect, useRef } from "react";
import { useInView } from 'framer-motion';
import "./counter.css";

export const Counter = () => {
    const counterRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(counterRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView && counterRef.current) {
      counterRef.current.style.animation = "none";
      setTimeout(() => {
        if (counterRef.current) {
          counterRef.current.style.animation = "";
        }
      }, 50);
    }
  }, [isInView]);

    return (
        <div
            ref={counterRef}
            className="counter-div text-xl animate-counter font-poppins font-semibold"
        ></div>
    )
}
