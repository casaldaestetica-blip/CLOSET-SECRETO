import { useState } from "react";

export default function Home() {
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [vendas, setVendas] = useState([]);

  function vender() {
    if (!produto || !valor) return;

    setVendas([
      ...vendas,
      {
        produto,
        valor
      }
    ]);

    setProduto("");
    setValor("");
  }

  const total = vendas.reduce((s, item) => s + Number(item.valor), 0);

  return (
    <div style={{
      background:"#000",
      color:"#fff",
      minHeight:"100vh",
      padding:"30px",
      fontFamily:"Arial"
    }}>
      <h1>Closet Secreto</h1>
      <p>Black Luxury</p>

      <input
        placeholder="Produto"
        value={produto}
        onChange={(e)=>setProduto(e.target.value)}
        style={{padding:"10px",margin:"5px",width:"100%"}}
      />

      <input
        placeholder="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)}
        style={{padding:"10px",margin:"5px",width:"100%"}}
      />

      <button
        onClick={vender}
        style={{
          padding:"12px",
          width:"100%",
          background:"#fff",
          color:"#000",
          border:"none",
          marginTop:"10px"
        }}>
        Registrar Venda
      </button>

      <h2 style={{marginTop:"30px"}}>Caixa do Dia: R$ {total}</h2>

      {vendas.map((item,i)=>(
        <div key={i} style={{
          border:"1px solid #333",
          padding:"10px",
          marginTop:"10px"
        }}>
          {item.produto} - R$ {item.valor}
        </div>
      ))}
    </div>
  );
}
