import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";

import AdmissionsPage from "./pages/AdmissionsPage";
import './App.css';
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

const App = () => {
  return (
    <div>
        <Router>
          
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/admissions" element={<AdmissionsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <ChatbotComponent/>
        </Router>
    </div>
    
  )
}

export default App;