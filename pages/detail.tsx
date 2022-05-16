import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export interface IDetailProps {
}

export default function Detail (props: IDetailProps) {
  return (
    <div>
        <Header></Header>
        <h1>Detail page</h1>
        <Footer></Footer>
    </div>
  );
}
