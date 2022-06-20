import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
              <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/June2022GW/WRS_ATF/UNREC/Footwear/Unrec-footwear-3000._CB635337188_.jpg" alt="" />
              <div className="home__row">
            <Product
            id='1'
            title='Book Cover Design Formula: Complete DIY Book Cover Design Guide for Self-published and Indie Authors'
            price={13.88}
            image='https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg' 
            rating={3}
            />
            <Product
            id='2'
            title='COMFEE’ 1.6 Cu.ft Portable Washing Machine, 11lbs Capacity Fully Automatic Compact Washer with Wheels, 6 Wash Programs Laundry Washer with Drain Pump, Ideal for Apartments, RV, Camping, Magnetic Gray'
            price={285.88}
            image='https://m.media-amazon.com/images/I/61m2cCUhdbL._AC_SY355_.jpg'
            rating={2}
            />
              </div>
              <div className="home__row">
                <Product
                id='3'
                title='Fossil Men s Minimalist Stainless Steel Slim Casual Quartz Chronograph Watch'
                price={78.73}
                image='https://m.media-amazon.com/images/I/51f1OG6yHrL._AC_UX466_.jpg'
                rating={4}
                />
                <Product 
                id='4'
                title='Timex Ironman Classic 30 Full-Size 38mm Watch'
                price={32.73}
                image='https://m.media-amazon.com/images/I/71GA7Wj8FzL._AC_UY500_.jpg'
                rating={3}
                />
                <Product
                id='5'
                title='Fossil Mens Townsman Stainless Steel and Leather Casual Quartz Chronograph Watch'
                price={91.01}
                image='https://m.media-amazon.com/images/I/81J80MqIAfL._AC_UX466_.jpg'
                rating={2}
                />
              </div>
              <div className="home__row">
                <Product
                id='6'
                title='SAMSUNG 85-Inch Class AU8000 Series Crystal 4K UHD HDR Smart TV with Alexa Built-in, 3 HDMI Ports, Ultra Slim Design (UN85AU8000FXZA, 2021 Model)'
                price={999}
                image='https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX355_.jpg'
                rating={5}
                />
              </div>
              <div className="home__row">
                <Product
                id='7'
                title='Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard'
                price={788}
                image='https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SX355_.jpg'
                rating={5}
                />
                <Product
                id='8'
                title='ASUS TUF Gaming F15 Gaming Laptop, 15.6” 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor, GeForce GTX 1650, 8GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51'
                price={1200}
                image='https://m.media-amazon.com/images/I/81OiT2-NoeL._AC_SY355_.jpg'
                rating={4}
                />
                <Product
                id='9'
                title='Lenovo - Legion 5 - Gaming Laptop - AMD Ryzen 7 5800H - 16GB RAM - 512GB Storage - NVIDIA GeForce RTX 3050Ti - 15.6" FHD Display - Windows 11 Home - Phantom Blue'
                price={1086.93}
                image='https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SY355_.jpg'
                rating={5}
                />
                <Product
                id='10'
                title='MSI Pulse GL66 Gaming Laptop: 15.6" 144Hz FHD 1080p Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3070, 16GB, 512GB SSD, Win10, Black (11UGK-001)'
                price={1294.68}
                image='https://images-na.ssl-images-amazon.com/images/I/61Ze2wc9nyS.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                rating={5}
                />
              </div>
        </div>
    </div>
  )
}

export default Home