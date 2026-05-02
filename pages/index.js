import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [valor, setValor] = useState("");
  const [qtd, setQtd] = useState("");
  const [produtos, setProdutos] = useState([]);

  function cadastrar() {
    if (!nome || !valor || !qtd) return;

    setProdutos([
      ...produtos,
      { nome, etiqueta, valor, qtd }
    ]);

    setNome("");
    setEtiqueta("");
    setValor("");
    setQtd("");
  }

  return (
    <div style={{
      padding:"20px",
      minHeight:"100vh",
      background:"#ffe4ef",
      fontFamily:"Arial"
    }}>
      <h1>Closet Secreto 🎀</h1>

      <h2>Cadastrar Produto</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
      /><br /><br />

      <input
        placeholder="Etiqueta"
        value={etiqueta}
        onChange={(e)=>setEtiqueta(e.target.value)}
      /><br /><br />

      <input
        placeholder="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)}
      /><br /><br />

      <input
        placeholder="Quantidade"
        value={qtd}
        onChange={(e)=>setQtd(e.target.value)}
      /><br /><br />

      <button onClick={cadastrar}>
        Cadastrar 💖
      </button>

      <h2>Estoque</h2>

      {produtos.map((p,i)=>(
        <div key={i}
          style={{
            background:"#fff",
            padding:"10px",
            margin:"10px 0",
            borderRadius:"10px"
          }}>
          {p.nome} | Etiqueta: {p.etiqueta} |
          R$ {p.valor} | Qtd: {p.qtd}
        </div>
      ))}
    </div>
  );
}
