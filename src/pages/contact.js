import React from 'react';

import RootLayout from "../components/Layout/Layout";
import Committee from "../components/Committee/Committee";

const Page = () => {
  return (
    <div>
      <Committee/>
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
