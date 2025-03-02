import {useNavigate} from "react-router-dom";
import styles from "./Login.module.scss";
import Logo from "../../assets/Tela Login/logo.png";

function Login() {

const navigate = useNavigate() //Iniciando o hook navigate


//Função para quando eu clicar no botão de entrar, me levar para a tela de reembolsos
const irParaReembolsos = () => {
  navigate("/reembolsos") //Redirecionando para a página de reembolsos
}

  return (
    <main>
      <section className={styles.containerNavio}></section>

      <section className={styles.containerFormulario}>
        <img src={Logo} alt="Logo da wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />

          <a href=""> Esqueci minha senha</a>

          <div>

            <button className={styles.buttonEntrar} onClick={irParaReembolsos}> Entrar</button>
            <button className={styles.buttonCriarconta}>Criar contar </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
