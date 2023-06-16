import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Form, Chat } from "./components"
import './App.css'

const App = () => (
    <BrowserRouter>
     <Switch> 
      <Route exact path="/" componenet={Form} />
      <Route path="/chat" Component={Chat}/>
     </Switch>
    </BrowserRouter>
)

export default App
