//--components--//
import Header from "components/header/Header";
import GreetingsBox from "components/greetingsBox/GreetingsBox";
import ServiceBox from "components/serviceBox/ServiceBox";
//--styles and assets--//
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Header/>
      <GreetingsBox/>
      <ServiceBox/>
    </div>
  );
}

export default App;
