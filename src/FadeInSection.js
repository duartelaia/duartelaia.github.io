import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;