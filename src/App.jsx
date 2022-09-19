//--components--//
import AboutBox from "components/aboutBox/AboutBox";
import Box from "components/Box/Box";
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
      {/* <AboutBox/> */}
    </div>
  );
}

export default App;
