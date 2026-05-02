import { useState } from "react";

export default function Home() {
  const [produto, setProduto] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [valor, setValor] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estoque, setEstoque] = useState([]);
  const [caixa, setCaixa] = useState(0);

  function addProduto() {
    if (!produto || !valor) return;
    setEstoque([
      ...estoque,
      { produto, etiqueta, valor, qtd: 1 }
    ]);
    setProduto("");
    setEtiqueta("");
    setValor("");
  }

  function vender(item) {
    const msg =
`Parabéns pela escolha ✨

Afinal exclusividade são pra poucas 💖`;

    const link =
`https://wa.me/5541987149001?text=${encodeURIComponent(msg)}`;

    setCaixa(caixa + Number(item.valor));

    setEstoque(
      estoque.map((p) =>
        p.produto === item.produto
          ? { ...p, qtd: p.qtd - 1 }
          : p
      )
    );

    window.open(link, "_blank");
  }

  return (
    <div style={{
      background:"#ffe4ef",
      minHeight:"100vh",
      padding:"20px",
      fontFamily:"Arial"
    }}>
      <h1>Closet Secreto 🎀</h1>

      <input placeholder="Produto"
        value={produto}
        onChange={(e)=>setProduto(e.target.value)} />

      <input placeholder="Etiqueta"
        value={etiqueta}
        onChange={(e)=>setEtiqueta(e.target.value)} />

      <input placeholder="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)} />

      <br /><br />

      <button onClick={addProduto}>
        Adicionar ao Estoque
      </button>

      <h2>Caixa do Dia: R$ {caixa}</h2>

      <h2>Estoque</h2>

      {estoque.map((item,i)=>(
        <div key={i}
          style={{
            background:"#fff",
            padding:"10px",
            margin:"10px 0",
            borderRadius:"10px"
          }}>
          {item.produto} |
          Etiqueta: {item.etiqueta} |
          R$ {item.valor} |
          Qtd: {item.qtd}

          <br /><br />

          <button onClick={()=>vender(item)}>
            Fechar Venda 💖
          </button>
        </div>
      ))}
    </div>
  );
}
