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

export function getEdgePosts() {}
