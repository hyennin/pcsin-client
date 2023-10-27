import styles from '../styles/SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>회원가입</h1>
        <form className={styles.form}>
            <label className={styles.label}>이메일</label>
            <input type='text' className={styles.input} placeholder='이메일을 입력해주세요.'/>
            <label className={styles.label}>이름</label>
            <input type='text' className={styles.input} placeholder='이름을 입력해주세요.'/>
            <label className={styles.label}>비밀번호</label>
            <input type='password' className={styles.input} placeholder='비밀번호를 입력해주세요.'/>
            <button type='submit' className={styles.signup_btn}>회원가입</button>
        </form>
    </div>
  );
}

export default SignUp;