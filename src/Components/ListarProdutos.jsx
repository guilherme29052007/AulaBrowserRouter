import React from "react"
export default function ListarProdutos ({produtos}){
    return (
        <div className="cards">
            {
            produtos.map((objeto) => (
                <div className="container" key={objeto.id}>
                    <img className="imagem" src={objeto.image}/>
                    <div className="conteudo">
                        <h1 className="nome">{objeto.nome}</h1>
                        <h1 className="valor">{objeto.preço}</h1>
                        <h1 className="tamanho">{objeto.tamanho}</h1>
                        <h1 className="cor">{objeto.cor}</h1>
                        <h1 className="modelagem">{objeto.modelagem}</h1>
                    <button className="comprar">Comprar</button>
                    </div>
                </div>
            ))
        }
        </div>
    )

}



