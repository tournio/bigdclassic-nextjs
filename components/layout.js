import React from 'react';

import SiteHeader from './siteHeader';

// import utilClasses from '../styles/utils.module.scss';
import {Container} from "react-bootstrap";

const layout = ({children, home}) => {
  return (
    <Container className="md-container">
      <SiteHeader />
      <header>
        <h1>
          This comes from the layout...
        </h1>
      </header>
      <main>
        {children}
      </main>
      {home ? (
        <>
          {/* sponsors for home layout */}
        </>
      ) : (
        <>
          {/* sponsors for non-home layout */}
        </>
      )
      }
      {/* footer */}
    </Container>
  );
}

export default layout;
