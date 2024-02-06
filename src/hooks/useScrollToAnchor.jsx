import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    console.log('Hash changed:', hash);
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      console.log('Element:', element);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [hash]);
};
export default useScrollToAnchor;
