import logo from './logo.svg';
import './App.css';

import Post from './components/Post';
import PostForm from './components/Postform';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PostForm />
        <hr />
        <Post />
      </header>
    </div>
  );
}

export default App;
