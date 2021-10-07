import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Post from './components/Post';
import PostForm from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <PostForm />
          <hr />
          <Post />
        </header>
      </div>
    </Provider>
  );
}

export default App;
