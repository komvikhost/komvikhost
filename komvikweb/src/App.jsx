import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ich from "./pages/Ich";
import Skills from "./pages/Skills";
import Zeugnisse from "./pages/Zeugnisse";
import Projekte from "./pages/Projekte";
import Blog from "./pages/Blog";
import Kontakt from "./pages/Kontakt";

export default function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="mt-16 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ich" element={<Ich />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/zeugnisse" element={<Zeugnisse />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}