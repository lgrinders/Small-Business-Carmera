import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";
import { Portfolio } from "./pages/Portfolio";

export default function app() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
  );
}
