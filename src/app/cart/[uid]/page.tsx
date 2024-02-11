import React from 'react';
import Cart from '../../../../components/refComp/Card';

const Page = ({ params }: { params: { uid: string } }) => {
  return <Cart uid={params.uid} />;
};

export default Page;
