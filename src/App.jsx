import './App.css'

function App() {
  return (
    <div className="App">
      {/* SEÇÃO SOBRE */}
      <section id="sobre">
        <h1>Samylle Ribeiro de Carvalho</h1>
        <p>Estudante de tecnologia em sistemas para internet pela UAPI</p>
      </section>

      <hr />

      {/* SEÇÃO 1: Meus Projetos */}
      <section id="projetos">
        <h2>📂 Meus Projetos</h2>
        <ul className="lista-projetos">
          <li>
            <a
              href="https://samyllecarvalho.github.io/ferramenta-par-ou-impar/"
              target="_blank"
              rel="noreferrer"
            >
              Ferramenta Par ou Ímpar
            </a>
          </li>
          <li>
            <a
              href="https://samyllecarvalho.github.io/calcular-m-dia/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora de Média
            </a>
          </li>
          <li>
            <a
              href="https://samyllecarvalho.github.io/MeuPortif-lio/"
              target="_blank"
              rel="noreferrer"
            >
              Meu Portifólio
            </a>
          </li>
        </ul>
      </section>

      {/* SEÇÃO 2: Contatos */}
      <section id="contatos">
        <h2>📱 Contatos</h2>
        <ul className="contatos-lista">
          <li>
            <a
              href="https://github.com/SamylleCarvalho"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5586981774652"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:samylliribeiro2018@gmail.com">
              <i className="fa-regular fa-envelope"></i> E-mail
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App