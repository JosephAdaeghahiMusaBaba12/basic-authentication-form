import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function App() {

  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact="true" path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
