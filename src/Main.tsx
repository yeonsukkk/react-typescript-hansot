import React from 'react';
import App from './component/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { News } from './page/News';
import { NotFound } from './page/NotFound';
import { Provider } from 'react-redux';
import store from './store';
import './common.css';

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  );
};
export default Main;
