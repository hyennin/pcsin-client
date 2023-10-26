import Header from '../components/Header';
import styles from '../styles/Posting.module.css';
import { useNavigate } from 'react-router-dom';

const Posting = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Header/>
            <form className={styles.form}>
                <label className={styles.label}>제목</label>
                <input className={styles.title}/>
                <label className={styles.label}>내용</label>
                <textarea className={styles.content}/>
            </form>
            <button className={styles.posting_btn} onClick={() => navigate('/')}>작성완료</button>        
        </div>
    )
}

export default Posting;