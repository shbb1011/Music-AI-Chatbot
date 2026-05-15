/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavBar } from "./components/TopNavBar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-canvas text-body font-body-md antialiased min-h-screen flex flex-col">
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

