import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
            {/* Product id , tittle , rating ,price ,image */}
            <div className="home_row">
                <Product
                    id="1"
                    tittle="The learn startup :How contants Innovation Creates Radiccaly Successsful"
                    price={115.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
                />

                < Product
                    id="2"
                    tittle="Apple iPhone 11 (64GB, Black) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/Month Amazon Gift Card Credit)
                    "
                    price={598.6}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71kZfQA-Y7L.jpg://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
                />
            </div>

            <div className="home_row">

                <Product
                    id="3"
                    tittle="The Apple AirPods with Wireless Charging Case
                    startup "
                    price={250.3}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._AC_SX522_.jpg://images-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
                />
                <Product
                    id="4"
                    tittle="The Apple iPhone XR, 64GB, Coral - Fully Unlocked (Renewed)
                    startup"
                    price={612.59}
                    rating={5}
                    image="https://www.amazon.com/images/I/81bnpX4uejL._AC_SL1500_.jpg-na.ssl-images-amazon.com/images/I/https://images-na.ssl-https://www.amazon.com/images/I/81bnpX4uejL._AC_SL1500_.jpg-amazon.com/images/I/41MujyI4J4L._AC_SL1000_.jpg-VOAjgL._AC_SY200_.jpg"
                />
                <Product
                    id="5"
                    tittle="The learn startup :How contants Innovation Creates Radiccaly Successsful"
                    price={150.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61iqvrkk3nL._AC_SL1500_.jpg://https://images-na.ssl-images-amazon.com/images/I/61iqvrkk3nL._AC_SL1500_.jpg-na.ssl-images-amazon.com/images/I/315t-VOAjgL._AC_SY200_.jpg"
                />

            </div>

            <div className="home_row">
                <Product
                    id="6"
                    tittle="Apple Smart Folio (for iPad Pro 11-inch)
                    "
                    price={560.2}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51H%2BedkTSrL._AC_SL1000_.jpg"
                />

            </div>

        </div>


    )
}

export default Home;
