import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ActionButton = ({ onAction, children }) => {
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
    <button onClick={onAction}>
      {isLargeScreen ? (
        <>
          <FontAwesomeIcon icon={faTrash} />
          {' '} {children}
        </>
      ) : (
        <FontAwesomeIcon icon={faTrash} />
      )}
    </button>
  );
};

export default ActionButton;
