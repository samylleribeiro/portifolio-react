import './App.css'

function App() {
  return (
    <div className="App">
      {/* SEÇÃO SOBRE */}
      <section id="sobre">
        <h1>Bem Vindos(as)</h1>
        <p>Olá eu sou Samylle Ribeiro de Carvalho</p>
        <p>Estudante de tecnologia em sistemas para internet pela UAPI</p>
        <p>Sou natural de Sigefredo Pacheco/PI</p>
      </section>

      <hr />

      {/* SEÇÃO 1: Meus Projetos */}
      <section id="projetos">
        <h2> Meus Projetos</h2>
        <p>Tenho a honra de apresentar aqui alguns dos meus projetos</p>
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
              href="https://samylleribeiro.github.io/meu-portifolio-html/"
              target="_blank"
              rel="noreferrer"
            >
              Meu Portifólio html
            </a>
          </li>
          <li>
            <a
              href=" https://samylleribeiro.github.io/calculadora-de-porcentagem/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora de Porcentagem
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/ferramenta-positivo-negativo/"
              target="_blank"
              rel="noreferrer"
            >
              Ferramenta positivo ou negativo
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/calculadora-para-divisao/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora para divisão
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/calculadora-para-multiplicar./"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora para multiplicação
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/calculadora-para-subtrair/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora para subtração
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/calculadora-para-somar/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora para somar
            </a>
          </li>
          <li>
            <a
              href="https://samylleribeiro.github.io/media-aritmetica/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadora para média
            </a>
          </li>
        </ul>
      </section>

      {/* SEÇÃO 2: Contatos */}
      <section id="contatos">
        <h2> Contatos</h2>
        <p>Fale comigo atravez dos seguintes canais:</p>
        <ul className="contatos-lista">
          <li>
            <a
              href="https://github.com/Samylleribeiro"
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