import styles from '../styles/Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>로그인</h2>
            <form className={styles.form}>
                <label className={styles.label}>이메일</label>
                <input type='text' className={styles.input} placeholder='이메일을 입력해주세요.'/>
                <label className={styles.label}>비밀번호</label>
                <input type='password' className={styles.input} placeholder='비밀번호를 입력해주세요.'/>
                <button type='submit' className={styles.login_btn}>로그인</button>
            </form>
                <button className={styles.signup_btn} onClick={() => navigate('/회원가입')}>회원가입</button>
        </div>
    );
}

export default Login;