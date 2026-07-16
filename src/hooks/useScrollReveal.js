import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with
 * .sr-up / .sr-left / .sr-right / .sr-scale classes and
 * adds the 'in' class when they enter the viewport.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const selectors = '.sr-up, .sr-left, .sr-right, .sr-scale';
    const observe = () => {
      const els = document.querySelectorAll(selectors);
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return io;
    };

    // small delay so DOM is fully painted
    const t = setTimeout(() => {
      const io = observe();
      return () => io.disconnect();
    }, 80);

    return () => clearTimeout(t);
  }, []);
}
