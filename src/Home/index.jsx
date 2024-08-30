import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import ListarProdutos from "../Components/ListarProdutos";
import Footer from "../Components/Footer";
export default function Home(){
    const [produtos, setProdutos] = useState([
        {
            nome: "CAMISA TRIAD FLEXIVEL SHUI",
            preço:"R$300",
            tamanho: "G",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/img_0589-dad3fa7ec7366c6089169898852731321-eac40baaa2d6ba48b816989885341283-480-0.webp",
            modelagem: 'Oversized',
            cor: ['Preta']
        },
        {
            nome: "CAMISA CAPANGA TRIAD SHUI",
            preço: "R$349",
            tamanho: "M",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/design-sem-nome-911-cbfee6345b4182025516691807788627-480-0.webp",
            modelagem: 'Boxy',
            cor: ['Preta']
        },
        {
            nome: "MOLETOM CAPANGA TRIAD SHUI",
            preço: "R$290",
            tamanho: "P",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/img_6565-a49f92e4dc314a8b4117186774575454-480-0.webp",
            modelagem: 'Oversized',
            cor: ['Preta']
        },
        {
            nome: "CAMISETA SLIM - SHUI",
            preço: "R$190",
            tamanho: "G",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/img_8388-8bb13e56a4bab3ca0317208148009295-480-0.webp",
            modelagem: 'Slim',
            cor: ['Preta']
        },
        {
            nome: "CAMISETA REGISTRO SHUI",
            preço: "R$199",
            tamanho: "M",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/copia-de-dsc02256-63c46698f88974936117033558719151-480-0.webp",
            modelagem:"Boxy",
            cor: ['Preta']
        },
        
    
])

return (
    <> 
        <Header className="header-home"/>
        <Carousel className="custom-carousel"
            infiniteloop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
        >
            <div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722865719013-8150073180-d23ae538a17ee408ff93efbfa4b5aeb91722865663-1920-1920.webp?547145943"/>
            </div>
            <div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722865719013-6621050144-9ce2306cd00b92e4112e57a63e766ca71722865662-1920-1920.webp?547145943"/>
            </div>
            <div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722865719013-1259196896-ded41b4c39cd18b110aefd4cda4e62441722865660-1920-1920.webp?547145943"/>
            </div>
            <div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722864195912-8910622587-0044636b3a0fa4001b4b538f33f486591722864136-1920-1920.webp?547145943"/>
            </div>
            <div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722863578643-1170646710-d45ad44f7f5ade9377a986162d2317321722863519-1920-1920.webp?547145943"/>
            </div>
                <img src="https://acdn.mitiendanube.com/stores/001/790/777/themes/rio/2-slide-1722543526582-566173487-e48ebd7df4d1e58692fbbd3b171015691722543469-1920-1920.webp?547145943"/>
                
        </Carousel>
        <ListarProdutos produtos={produtos} />
        <Footer />
    </>
);
}