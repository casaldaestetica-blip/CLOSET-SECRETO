import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [valor, setValor] = useState("");
  const [qtd, setQtd] = useState("");

  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [busca, setBusca] = useState("");

  const [produtos, setProdutos] = useState([]);
  const [caixa, setCaixa] = useState(0);

  function cadastrar() {
    if (!nome || !valor || !qtd) return;

    setProdutos([
      ...produtos,
      {
        nome,
        etiqueta,
        valor,
        qtd: Number(qtd)
      }
    ]);

    setNome("");
    setEtiqueta("");
    setValor("");
    setQtd("");
  }

  function vender(index) {
    const item = produtos[index];
    if (item.qtd <= 0) return;

    const novos = [...produtos];
    novos[index].qtd -= 1;
    setProdutos(novos);

    setCaixa(caixa + Number(item.valor));

    const msg =
`Parabéns pela escolha ✨

Afinal exclusividade são pra poucas 💖`;

    const link =
`https://wa.me/5541987149001?text=${encodeURIComponent(msg)}`;

    window.open(link, "_blank");

    setCliente("");
    setTelefone("");
  }

  const lista = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.etiqueta.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{
      padding:"20px",
      background:"#ffe4ef",
      minHeight:"100vh",
      fontFamily:"Arial"
    }}>

      <h1>Closet Secreto 🎀</h1>

      <h2>Cadastrar Produto</h2>

      <input placeholder="Nome"
        value={nome}
        onChange={(e)=>setNome(e.target.value)} /><br /><br />

      <input placeholder="Etiqueta"
        value={etiqueta}
        onChange={(e)=>setEtiqueta(e.target.value)} /><br /><br />

      <input placeholder="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)} /><br /><br />

      <input placeholder="Quantidade"
        value={qtd}
        onChange={(e)=>setQtd(e.target.value)} /><br /><br />

      <button onClick={cadastrar}>
        Cadastrar 💖
      </button>

      <hr />

      <h2>Nova Venda</h2>

      <input placeholder="Buscar produto"
        value={busca}
        onChange={(e)=>setBusca(e.target.value)} /><br /><br />

      <input placeholder="Nome cliente"
        value={cliente}
        onChange={(e)=>setCliente(e.target.value)} /><br /><br />

      <input placeholder="Telefone"
        value={telefone}
        onChange={(e)=>setTelefone(e.target.value)} /><br /><br />

      <h2>Caixa do Dia: R$ {caixa}</h2>

      {lista.map((p,i)=>(
        <div key={i}
          style={{
            background:"#fff",
            padding:"10px",
            margin:"10px 0",
            borderRadius:"10px"
          }}>
          {p.nome} |
          Etiqueta: {p.etiqueta} |
          R$ {p.valor} |
          Qtd: {p.qtd}

          <br /><br />

          <button onClick={()=>vender(i)}>
            Fechar Venda 💖
          </button>
        </div>
      ))}

    </div>
  );
}
