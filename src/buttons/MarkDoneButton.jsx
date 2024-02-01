import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

const MarkDone = ({ onMark }) => {
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
          <FontAwesomeIcon icon={faCheck} />
          {' '} Mark All Done
        </>
      ) : (
        <FontAwesomeIcon icon={faCheck} />
      )}
    </button>
  );
};

export default MarkDone;
