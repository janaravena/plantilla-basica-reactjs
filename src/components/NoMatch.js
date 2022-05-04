import React from 'react';
import { Link } from 'react-router-dom';
import { FaMinusCircle } from "react-icons/fa";

const NoMatch = () => {
  return (
    <div>
      <FaMinusCircle color="a73838" size="4em" /><br />
      <strong>NO se encuentra la página</strong><br />
      <Link to="/">
          Volver al home
      </Link>
    </div>
      
  );
};

export default NoMatch;