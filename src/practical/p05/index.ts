import axios from 'axios';

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentResult {
  id: number;
  body: string;
}

export const safeFetchComment = async (commentId: number): Promise<CommentResult | null> => {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    const { data } = await axios.get<ApiComment>(url);

    return {
      id: data.id,
      body: data.body
    };

  } catch (error) {
    return null;
  }
};