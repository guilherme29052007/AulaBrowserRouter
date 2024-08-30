import Header from "../Components/Header";
import React, { useState } from "react";
import Footer from '../Components/Footer';
import ListarProdutos from "../Components/ListarProdutos";

export default function Ofertas(){
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
        {
            nome: "CAMISETA CONCEITO SHUI",
            preço: "R$285",
            tamanho: "P",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/img_5760-f5a90513c784895ff816989884874215-480-0.webp",
            modelagem: "Boxy",
            cor: ['Preta']
        },
        {
            nome: "CALÇA ALFAIATARIA CHEFE TRIAD ",
            preço: "R$788",
            tamanho: "M",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/design-sem-nome-321-fad0d012e388097e4c16753746287750-480-0.webp",
            modelagem: "Reta",
            cor: ['Preta']
        },
        {
            nome: "CAMISETA OVERSIZED DISTINCT",
            preço: "R$170",
            tamanho: "GG",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/3_0016_prontas-para-subir_0011s_0000_dsc04150-copiar-2-4bc015fb2eeef78e2617008362734041-480-0.webp",
            modelagem: "Boxy",
            cor: ['Preta']
        },
        {
            nome: "CAMISETA OVERSIZED 3D CLOUD PRETO",
            preço: "R$385",
            tamanho: "P",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/73-9a199098ed0664ab3517152756742602-480-0.webp",
            modelagem: "Oversize",
            cor: ['Preta']
        },
        {
            nome: "CAMISETA OVERSIZED ANO DO DRAGÃO",
            preço: "R$170",
            tamanho: "GG",
            image: "https://acdn.mitiendanube.com/stores/001/790/777/products/img_4288-cdf669c46084bb964517153500944281-480-0.webp",
            modelagem: "Boxy",
            cor: ['Preta']
        },
        
        
    ])
    return (
        <>
            <Header />
            <div className="ofertas-container">
                <h1>Ofertas</h1>
                <ListarProdutos produtos={produtos} /> 
            </div>
            <Footer />
        </>
    );
}
