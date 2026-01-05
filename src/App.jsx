import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './components/Home.jsx';
import AiChatBot from './components/AiChatBot.jsx';
import FakeLogin from './components/FakeLogin.jsx';
import Dashboard from './components/Dashboard.jsx';
import Blogs from './components/Blogs.jsx';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Root shows original Home page */}
          <Route path='/' element={<Home />} />
          {/* Keep fake login available on a separate route for testing */}
          <Route path='/fake-login' element={<FakeLogin />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/chatbot' element={<AiChatBot />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
