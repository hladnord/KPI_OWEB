import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";
import "./style.css"

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Image />
            <div className="store">
                <GoodsCard name="Microsoft Xbox Series S" price="15000 гривень" img="https://content.rozetka.com.ua/goods/images/big/276694901.jpg"/>
                <GoodsCard name="Gigabyte Z590 Aorus" price="45000 гривень" img="https://content.rozetka.com.ua/goods/images/big/162331917.jpg" />
                <GoodsCard name="Artline Overlord" price="280000 гривень" img="https://content.rozetka.com.ua/goods/images/big/163055184.jpg" />
                <GoodsCard name="Samsung Odyssey Ark" price="90000 гривень" img="https://content2.rozetka.com.ua/goods/images/big/297951630.jpg" />
                <GoodsCard name="Apple iPad Pro" price="85000 гривень" img="https://content.rozetka.com.ua/goods/images/big/301709757.jpg" />
                <GoodsCard name="Apple iPhone 14 Pro" price="7500 гривень" img="https://content1.rozetka.com.ua/goods/images/big/284920829.jpg" />
                <GoodsCard name="AMD Ryzen 3990X" price="190000 гривень" img="https://content1.rozetka.com.ua/goods/images/big/116740600.jpg" />
                <GoodsCard name="HTC VIVE PRO" price="70000 гривень" img="https://content.rozetka.com.ua/goods/images/big/27859220.jpg" />
                <GoodsCard name="Sony Alpha 9 II" price="190000 гривень" img="https://content1.rozetka.com.ua/goods/images/big/297598705.jpg" />
                <GoodsCard name="Apple Watch Ultra" price="90000 гривень" img="https://content1.rozetka.com.ua/goods/images/big/285048807.jpg" />
            </div>
        </div>
    );
}

export default App;
