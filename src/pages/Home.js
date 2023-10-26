import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Post from '../components/Post';
import plus from '../assets/plus.png'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false)

  return (
    <div className={styles.contianer}>
      <Header isMain={true}/>
      <div className={styles.top_menu}>
        <label htmlFor={checked}>
          <input
            className={styles.label}
            type="checkbox"
            checked={checked}
            onChange={({ target: { checked } }) => setChecked(checked)}
          />
          <p className={styles.p}>내가 쓴 글 보기</p>
        </label>
        <div>

        </div>
      </div>
      <Post title="제목입니다." content="내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다."/>
      <div className={styles.plus_btn}>
        <img onClick={() => navigate('/글작성')} src={plus}/>
      </div>
    </div>
  );
}

export default Home;