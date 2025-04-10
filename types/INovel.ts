export interface INovel {
  id: string;
  slug: string;
  title: string;
  author: string;
  status: string;
  cover_url: string;
  ranting: number;
  genres: string;
  sinopsis: string;
  isRecomended: boolean;
  view: number;
  created_at: string;
  updated_at: string;
}
