import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./styles/style.css";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                //-exact routing要完全符合/，才會顯示Homepage
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/About" exact>
                    <About />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
