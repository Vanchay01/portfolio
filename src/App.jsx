import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
// import Navbar from "./components/Navbar";
import About from "./components/view/About";
import Contact from "./components/view/Contact";
import Home from "./components/view/Home";
import Skill from "./components/view/Skill";
import Work from "./components/view/Work";
import { Navbars } from "./components/view/Navbars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workdetail from "./components/view/Workdetail";
import EducationDetail from "./components/view/EducationDetail";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="scroll-smooth ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbars dark={dark} setDark={setDark} />
                <section id="home" className="h-screen">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skill />
                </section>
                <section id="work">
                  <Work />
                </section>
                <section id="contact">
                  <Contact />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/work/:id" element={<Workdetail />} />
          <Route path="/sru" element={<EducationDetail />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
