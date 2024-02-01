import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({ onAdd }) => {
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
    <button onClick={onAdd}>
      {isLargeScreen ? (
        <>
          <FontAwesomeIcon icon={faPlus} />
          {' '} Add
        </>
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
};

export default AddButton;
