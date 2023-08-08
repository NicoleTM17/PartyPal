// import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import Birthdays from './components/Birthdays.js';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Noto+Serif+Vithkuqi:wght@50'
    ],
  },
});


library.add(faCakeCandles);

function App() {
  return (
    <div className="container">
      <Birthdays/>
    </div>
  );
}

export default App;
