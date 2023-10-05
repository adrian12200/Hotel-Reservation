import { Box } from "@mui/material";
import { Home } from "./components/home/Index";
import { ToolProvider } from "./core/context/ToolContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Book } from "./components/home/form/Book";
import { Reservations } from "./components/home/Reservations"
import { Update } from "./components/home/form/Update";

function App() {
  return (
    <Box width="100%" height="100%">
        <ToolProvider>
            <Router>
                <Switch>
                  <Route exact path="/" render={(a) => <Home/>}/>
                  <Route exact path="/book/:reservation" render={(a) => <Book {...a}/>}/>
                  <Route exact path="/reservation/update/:update" render={(a) => <Update {...a}/>}/>
                  <Route exact path="/reservations" render={(a) => <Reservations/>}/>
                </Switch>
            </Router>
        </ToolProvider>
    </Box>
  );
}

export default App;