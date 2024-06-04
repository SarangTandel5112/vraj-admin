import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full flex">
        <Navbar />
        <section className="flex flex-col grow">
          <header className="p-8 pb-4">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            {/* <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route> */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
