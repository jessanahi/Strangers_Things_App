import axios from 'axios';
import { POSTS_URL } from './constants';

function PostList({ token, setPosts, posts }) {
  return (
    <div className='styles.postList'>
      <button
        onClick={async () => {
          try {
            const response = await axios.get(POSTS_URL, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            });
            setPosts(response.data.data.posts);
          } catch (e) {
            console.log('ERROR??? No posts fetched.');
            console.error(e);
          }
        }}
      >
        See All Strange Posts
      </button>

      <ul>
        {posts.map((post) => {
          return <li key={post._id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default PostList;
