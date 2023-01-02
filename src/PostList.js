import { useEffect } from 'react';
import styles from './PostList.module.css';
import { getPosts } from './apiRequests';
import Post from './Post';

function PostList({ token, posts, setPosts }) {
  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((e) => {
        console.error(
          'ERROR: Unable to get post list; invalid token || sign in.'
        );
      });
  }, [token, setPosts]);

  return (
    <div className={styles.postlist}>
      {posts.map((post) => {
        return ( 
          <Post key={post._id} post={post} />
        )
      })}
    </div>
  );
};

export default PostList;
