import styles from '../styles/Header.module.css';
import back from '../assets/back.png';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      { !props.isMain && <img className={styles.back} onClick={() => navigate(-1)} src={back} alt='뒤로가기'/> }
      { props.isMain ? <div className={styles.title1}>컴과인</div> : <div className={styles.title2}>글작성</div> }
    </div>
  );
}

export default Header;