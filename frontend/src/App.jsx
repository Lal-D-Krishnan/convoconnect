import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import "./App.css"

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
