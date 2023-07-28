import { Box } from "@mui/material";
import { Home } from "./components/home/Index";
import { Top } from "./components/layouts/Top";
import { ToolProvider } from "./core/context/ToolContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Book } from "./components/home/form/Book";
import { About } from "./components/home/About";
import { Reservations } from "./components/home/Reservations"
import { Update } from "./components/home/form/Update";

function App() {
  return (
    <Box width="100%" height="100%">
        <ToolProvider>
            <Router>
                <Top/>
                <Switch>
                    <Route exact path="/" render={(a) => <Home/>}/>
                    <Route exact path="/book/:reservation" render={(a) => <Book {...a}/>}/>
                    <Route exact path="/reservation/update/:update" render={(a) => <Update {...a}/>}/>
                    <Route exact path="/about" render={(a) => <About/>}/>
                    <Route exact path="/reservations" render={(a) => <Reservations/>}/>
                </Switch>
            </Router>
        </ToolProvider>
    </Box>
  );
}

export default App;