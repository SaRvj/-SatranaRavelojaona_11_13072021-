import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import APropos from './pages/APropos.js';
import FicheLogement from './pages/FicheLogement.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home />}/>
          <Route exact="true" path="/APropos" element={<APropos />}/>
          <Route exact="true" path="/logement/:logementId" element={<FicheLogement />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

