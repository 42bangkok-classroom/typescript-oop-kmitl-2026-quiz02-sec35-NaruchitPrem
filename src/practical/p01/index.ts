import axios from 'axios';

interface ApiResult {
  userId : number;
  id : number;
  title: string;
  body: string;
}

interface PostResult {
  id: number;
  title: string;
}

export const getEdgePosts = async (): Promise<PostResult[]> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get<ApiResult[]>(url);
    if (!data || data.length === 0) {
      return [];
    }
    const firstPost = data[0];
    const lastPost = data[data.length - 1];
    
    const result: PostResult[] = [];

    result.push({
      id: firstPost.id,
      title: firstPost.title
    });

    result.push({
      id: lastPost.id,
      title: lastPost.title
    });

    return result;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed : ${error.message}`);
    } else {
      throw new Error('Unkown Error');
    }
  }
}