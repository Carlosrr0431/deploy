import axios from "axios"

export const getPostsRequests = async() => await axios.get('http://localhost:3000/posts');

export const createPostsRequests = async(post) => {

  const form = new FormData();

  for ( let key in post ){
    form.append(key, post[key]);
  }

  return await axios.post('http://localhost:3000/posts', form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

export const deletePostRequest = async (id) => await axios.delete(`http://localhost:3000/posts/${id}`)

export const gestPostRequest = async (id) => await axios.get(`http://localhost:3000/posts/${id}`);

export const updatePostRequest = async (id, newFields ) => await axios.put(`http://localhost:3000/posts/${id}`, newFields);