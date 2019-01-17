import React from 'react';
import ReactDOM  from 'react-dom';

import store from './store'
import App from './components/App';
import './index.css';

ReactDOM.render(<App stories={store.getState().storyState} onArchive={() => {}} />, document.querySelector('#root'));