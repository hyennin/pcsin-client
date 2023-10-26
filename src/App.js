import { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="App">
      <div className="top_menu">
        <label htmlFor={checked}>
          <input
            type="checkbox"
            checked={checked}
            onChange={({ target: { checked } }) => setChecked(checked)}
          />
          <p>내가 쓴 글 보기</p>
        </label>
        <div>

        </div>
      </div>
      <Post title="제목입니다." content="내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다."/>
    </div>
  );
}

export default App;