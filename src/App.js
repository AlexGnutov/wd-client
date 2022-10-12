import './App.css';
import './css/normalize.css';
import './css/styles.scss';

import Header from "./components/header/Header";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  );
}

export default App;
