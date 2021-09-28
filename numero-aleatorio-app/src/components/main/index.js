import React from "react";
import {useState} from "react";
import "./style.css";
function Main(){    

    const [numeroGerado,SetNumero] = useState(1)

    function SortearNumero(){
        var num = Math.floor(Math.random()*100);
        SetNumero(num); //Atribui o numero gerado a variavel SetNumero, que transforma na tela atravez de numeroGerado

    }

    return(
        
        <div className="container">
            <h3>Numero Aleatório</h3>
            <h1>{numeroGerado}</h1>

            <label>Clique no botão abaixo para gerar um número Aleatório</label>
            <button onClick={SortearNumero}> Gerar Numero</button> {/*Nesta linha se atribui a funão sortear numero ao clicar do botao*/}

        </div>
    );
}
export default Main;
