import React from 'react';
import Cart from '../../../../components/refComp/Card';

const Page = ({ params }: { params: { id: string } }) => {
  return <Cart params={{ id: params.id }} />;
};

export default Page;
