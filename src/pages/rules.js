import React from 'react';

import RootLayout from "../components/Layout/Layout";
import Rules from "../components/Rules/Rules";

const Page = () => {
  return (
    <div>
      <Rules/>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default Page;
