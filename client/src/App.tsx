import "./App.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Listings from "./pages/Listings";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/create" element={<CreateListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
