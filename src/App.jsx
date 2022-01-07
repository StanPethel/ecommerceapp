import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Success from "./Success";
import Pay from "./Pay";

const App = () => {
  return (
         <Router>
          <Routes>
            <Route path="/pay">
              <Pay />
              </Route>
              <Route path="/success">
                <Success />
             </Route>
           </Routes>
          </Router>
    );
          
};

export default App;