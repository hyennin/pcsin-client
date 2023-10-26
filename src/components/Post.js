import styles from '../styles/Post.module.css';
import filledHeart from '../assets/filled_heart.png';
import reply from '../assets/reply.png';

const Post = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.content.length < 45 ? props.content : props.content.slice(0, 35) + '...'}</div>
        <div className={styles.sub_menu}>
            <div className={styles.sub_btn}>
                <img className={styles.icon} src={filledHeart}/>
                {props.heartCnt ? props.heartCnt : 0}
            </div>
            <div className={styles.sub_btn}>
                <img className={styles.icon} src={reply}/> 
                {props.replyCnt ? props.replyCnt : 0}
            </div>
        </div>
    </div>
  );
}

export default Post;