import { useEffect, useRef } from 'react';
import './cursor.css'; 
export const Cursor = () => {
    const dotRef = useRef<HTMLDivElement>(null); // Ссылка на белую точку
    const circleRef = useRef<HTMLDivElement>(null); // Ссылка на магнитный круг
  
    useEffect(() => {
      const dot = dotRef.current;
      const circle = circleRef.current;
  
      let mouseX = 0;
      let mouseY = 0;
      let circleX = 0;
      let circleY = 0;
  
      const ease = 0.1; // Коэффициент плавности для магнитного круга
  
      const moveCursor = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
  
        // Белая точка следует за курсором мгновенно
        if (dot) {
          dot.style.left = `${mouseX}px`;
          dot.style.top = `${mouseY}px`;
        }
      };
  
      const animate = () => {
        if (circle) {
          // Магнитный круг плавно догоняет точку
          circleX += (mouseX - circleX) * ease;
          circleY += (mouseY - circleY) * ease;
  
          circle.style.left = `${circleX}px`;
          circle.style.top = `${circleY}px`;
        }
  
        requestAnimationFrame(animate);
      };
  
      window.addEventListener('mousemove', moveCursor);
      animate();
  
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);
  
    return (
      <>
        <div ref={dotRef} className="white-dot-cursor"></div>
        <div ref={circleRef} className="magnetic-circle-cursor"></div>
      </>
    );
};