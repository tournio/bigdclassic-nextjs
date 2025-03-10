import React from 'react';

import RootLayout from "../components/Layout/Layout";
import TriosRules from "../components/TriosRules/TriosRules";
import flyer from '../images/trios-flyer.jpg';
import Image from "next/image";
import Link from "next/link";
import {REGISTER_URL} from "../utils/misc";

const Page = () => {
  return (
    <div>
      <div className={'d-none d-md-block'}>
        <Image src={flyer}
               alt={'Flyer with event information'}
               className={'img-fluid'}
        />
        <div className={'text-center mb-3'}>
          <Link className={'btn btn-sm btn-primary'}
                href={REGISTER_URL}>
            Register Your Team
            <i className="bi bi-arrow-right ps-2" aria-hidden={true}/>
          </Link>
        </div>
      </div>
      <TriosRules/>
      <div className={'text-center mb-3'}>
        <Link className={'btn btn-lg btn-primary'}
              href={REGISTER_URL}>
          Register Your Team
          <i className="bi bi-arrow-right ps-2" aria-hidden={true}/>
        </Link>
      </div>
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
