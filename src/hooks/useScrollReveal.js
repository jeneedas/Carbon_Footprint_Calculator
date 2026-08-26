import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If IntersectionObserver is not supported, immediately set visible
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isVisible];
}

export function useCountUp(targetNumber, isTriggered, duration = 1400, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    let startTime = null;
    let animationFrame;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = easedProgress * targetNumber;

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, isTriggered, duration]);

  return count.toFixed(decimals);
}
