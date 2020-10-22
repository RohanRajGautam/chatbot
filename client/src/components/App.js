import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chatbot from './chatbot/Chatbot';

//components
import Header from './Header';
import About from './pages/About';
import Landing from './pages/Landing';
import Shop from './shop/Shop';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/shop' component={Shop} />
        <Chatbot />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
