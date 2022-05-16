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
    let [stores, setStore] = React.useState();


    function render() {
        if ( !stores ) {
            return
        } else {
            console.log(stores);
            return stores.map( (store: any) => <li key={store.name}><Link href={`/detail?storeCode=${store.shop_code}`}><a>Store {store.shop_code}</a></Link></li>)
        }
        // return <li><Link href='/detail?storeCode=7789'>Store 7789</Link></li>
    }
    function submitHanle() {
        let payload = {
            "page": 1,
            "name": "大阪",
            "brand_id": "1",
            "offset": 0,
            "limit": 20
        }
        let url = 'https://6nf757147a.execute-api.ap-northeast-1.amazonaws.com/dev-app/webapistoresearch'
        axios.post(url, payload).then(({data}) => setStore(data.data) );
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
                { render() }
            </ul>
        </div>
        <Footer />
    </div>
  );
}
