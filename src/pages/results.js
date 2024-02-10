import React from 'react';

import RootLayout from "../components/Layout/Layout";

import Results from "../components/Results/Results";

const Page = () => {

  return (
    <div>
      <Results/>
    </div>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default Page;
