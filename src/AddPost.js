import {addpost} from './apiRequests';

function AddPost({ title, description, price, location, setPosts, token }) {
  return (
    <div>
      <h2>Post a Strange Thing for Sale</h2>
      <form
        onSubmit={async (e) => {
            e.preventDefault();

            const response = await addpost(token);

            setPosts(response);
        }}
      >
        <label>
            Name of The Strange&nbsp;
          <input 
            value={title}
            onChange={title}
          />
        </label>

        <label>
            Description&nbsp;
          <input 
            value={description}
            onChange={description}
          />
        </label>

        <label>
            Price&nbsp;
          <input 
            value={price}
            onChange={price}
          />
        </label>

        <label>
            Location&nbsp;
          <input 
            value={location}
            onChange={location}
          />
        </label>
        <button>Post The Strange</button>
      </form>
    </div>
  );
};

export default AddPost;