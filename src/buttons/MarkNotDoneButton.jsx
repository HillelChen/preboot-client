import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MarkNotDone = ({ onMark }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button onClick={onMark}>
      {isLargeScreen ? (
        <>
          <FontAwesomeIcon icon={faTimes} />
          {' '} Didn't Do All
        </>
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
    </button>
  );
};

export default MarkNotDone;
