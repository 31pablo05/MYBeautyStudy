import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll inmediato sin delay
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Asegurar scroll después del render usando requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    
    // Scroll adicional después de que se complete la carga de componentes
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
