import { ROUTES, ROUTES_HIDE } from '../../utils/constants';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return Object.entries(ROUTES).map(([key, {name, path}]) => (
      <React.Fragment key={key}>
        {!ROUTES_HIDE.includes(name) && (
          <Link
            to={path}
            className="w-full h-10 my-2 px-5 cursor-pointer text-black"
          >
            {name}
          </Link>
        )}
      </React.Fragment>
    ));
  }
  
  export default Navbar;