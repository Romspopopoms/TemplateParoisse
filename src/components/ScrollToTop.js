import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Fonction pour gérer le défilement vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Afficher le bouton uniquement lorsque l'utilisateur a défilé de plus de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-12 w-16 h-16 bg-[#61c6c6] rounded-full flex items-center justify-center shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-black text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
