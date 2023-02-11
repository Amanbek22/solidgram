import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import ChatPage from "./pages/chatPage/ChatPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  const [isAuth, setAuth] = useState(true);

  return (
    <div className="App">
      <Routes>
        {/* TODO: protect our routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<h1>Hello post</h1>} />
        <Route path="/interesting" element={<HomePage />} />
        <Route path="/reels" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute isAuth={isAuth}>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isAuth}>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
