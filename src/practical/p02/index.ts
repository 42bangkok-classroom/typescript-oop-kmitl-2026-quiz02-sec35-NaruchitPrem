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

export const getPostsByUser = async (userId: number): Promise<PostResult[]> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get<ApiResult[]>(url);
    if (!data || data.length === 0) {
      return [];
    }
    const result: PostResult[] = [];
    for (const post of data){
      if (post.userId === userId){
        result.push({
          id: post.id,
          title: post.title
        });
      }
    }
    return result;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed : ${error.message}`);
    } else {
      throw new Error('Unkown Error');
    }
  }
}