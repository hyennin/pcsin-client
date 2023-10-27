import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Post from '../components/Post';
import plus from '../assets/plus.png';
import openArrow from '../assets/open_arrow.png';
import closeArrow from '../assets/close_arrow.png';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const [currentValue, setCurrentValue] = useState("최신순");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

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
          <div className={styles.select} onClick={() => {
              console.log(showOptions)
              setShowOptions(!showOptions)
          }}>
            <div className={styles.selected}>
              <div className={styles.label}>{currentValue}</div>
              {
                <img src={showOptions ? closeArrow : openArrow}/>
              }
            </div>
            <div className={styles.option_container} style={{ display: showOptions ? 'block' : 'none'}}>
              <div className={styles.option} onClick={handleOnChangeSelectValue} value='최신순'>최신순</div>
              <div className={styles.option} onClick={handleOnChangeSelectValue} value='인기순'>인기순</div>
              <div className={styles.option} onClick={handleOnChangeSelectValue} value='좋아요순'>좋아요순</div>
            </div>
          </div>
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