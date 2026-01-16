import axios from 'axios';

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentCount {
  [postId: number]: number; 
}

export const countCommentsByPost = async (): Promise<CommentCount> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const { data } = await axios.get<ApiComment[]>(url);
    const result: CommentCount = {};
    for (const comment of data) {
      const postId = comment.postId;

      if (postId === undefined || postId === null) {
        continue;
      }
     
      if (result[postId]) {
        result[postId] = result[postId] + 1;
      } else {
        result[postId] = 1;
      }
    }
    return result;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed: ${error.message}`);
    } else {
      throw new Error('Unkown Error');
    }
  }
};