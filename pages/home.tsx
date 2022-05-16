import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';  
import axios from 'axios';
import Link from 'next/link';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
    let user = 'kientt';
    let storeCode = '7789';
    let data: any = [];



    function submitHanle() {
        let payload = {
            "page": 1,
            "name": "7789",
            "brand_id": "1",
            "offset": 0,
            "limit": 20
        }
        let url = 'https://6nf757147a.execute-api.ap-northeast-1.amazonaws.com/dev-app/webapistoresearch'
        axios.post(url, payload).then(({data}) => console.log(data));

    
        // window.location.href = `/detail/?storeCode=${storeCode}`
    }
  return (
    <div>
        <Header />
        <h1>Home page Sukiya</h1>
        <div>
            <input type="text" />
            <button onClick={ submitHanle }>submit</button>
            <ul>
                <li><Link href='/detail?storeCode=7789'>Store 7789</Link></li>
            </ul>
        </div>
        <Footer />
    </div>
  );
}
