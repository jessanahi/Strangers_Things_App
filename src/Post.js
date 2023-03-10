import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import styles from './Post.module.css';

function Post({ post }) {
    const { createdAt, author: { username }, title, location, _id } = post;

    const history = useHistory();

    return (
        <div className={styles.postcontainer}>
            <h3>{title}</h3>
            <span>Listed By: {username}</span>
            <span>Posted On: {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_MED)}</span>
            <span>Located At: {location}</span>
            <button 
                onClick={() => {
                    history.push(`/posts/${_id}`)
                }
            }>
                View Listing
            </button>
        </div>
    )
};

export default Post;