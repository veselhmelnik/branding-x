//--components--//
import Header from "components/header/Header";
import GreetingsBox from "components/greetingsBox/GreetingsBox";
//--styles and assets--//
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <GreetingsBox/>
    </div>
  );
}

export default App;
