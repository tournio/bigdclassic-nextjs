import React from 'react';

import Navigation from './navigation';
import SiteHeader from './siteHeader';

// import utilClasses from '../styles/utils.module.scss';
import {Container} from "react-bootstrap";

const layout = ({children, home}) => {
  return (
    <Container className="md-container">
      <SiteHeader />
      <header>
        <Navigation />
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
