import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

export interface IDetailProps {
}

export default function Detail (props: IDetailProps) {
    function render() {
        let payload = {
            "accessCode": "5v73ONDHBvVsO9qtcmfbDipDpvZnauIwPM18nKM4TnUfveAOueMEgTgwS06mgSSH",
            "salesKind": 2,
            "storeCode": "7789"
        };
        let url = 'https://6nf757147a.execute-api.ap-northeast-1.amazonaws.com/dev-app/getmenuinfov2';
        let data =  axios.post(url, payload)
        return <p>detail data</p>
    }
  return (
    <div>
        <Header></Header>
        <h1>Detail page</h1>
        <div> 
            {render()}
        </div>
        <Footer></Footer>
    </div>
  );
}
