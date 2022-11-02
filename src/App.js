import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="slogan"> Slogan</div>

        <buttun className="menuDIV clique">Quem somos</buttun>
        <buttun className="menuDIV clique">Parcerias</buttun>
        <buttun className="menuDIV clique">Quero adotar</buttun>
        <buttun className="menuDIV clique">Quero ajudar</buttun>

        <div>
        <buttun className="cadastrar clique">Cadastrar</buttun>
        </div>
      </div>

      <h1>Adote seu primeiro animal aqui!</h1>

      <buttun className="buttun_fim">Quero adotar</buttun>

      <buttun className="buttun_fim">Quero doar um animal</buttun>

      <h2>Pets disponíveis no momento</h2>

      <div className="carregando"></div>

    </div>
  );
}
export default App;


<img src="https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg" width="300px" height="300px"/>