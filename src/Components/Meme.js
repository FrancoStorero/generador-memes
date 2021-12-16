import { useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

export default function Meme() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value);
  };

  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value);
  };

  const onChangeImagen = (event) => {
    setImagen(event.target.value);
  };

  /* -------- Generar y descargar imagen --------  */

  const onClickExportar = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });

    setLinea1('');
    setLinea2('');
    


  };

    /* -------- STYLED-COMPONENTS--------  */

  const Imagen = styled.div`
    width: 100%;
    height: 50vh;
    background: url(../images/${imagen}.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  `;

  return (
    <div className="container">
      <div className="navbar">Generador de Memes</div>
      <select onChange={onChangeImagen} className="mySelect">
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history-channel">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="batman">Batman</option>
        <option value="nerd">Nerd</option>
      </select>
      <div className="inputs">
        <input onChange={onChangeLinea1} type="text" placeholder="Linea arriba" />
        <input onChange={onChangeLinea2} type="text" placeholder="Linea abajo" />
      </div>
      <Imagen onChange={imagen} id="meme">
        <div className="linea1">{linea1}</div>

        <div className="linea2">{linea2}</div>
      </Imagen>
      <button className="myButton" type="submit" onClick={onClickExportar}>Export</button>
    </div>
  );
}
