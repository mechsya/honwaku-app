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
  chapter: IChapter[];
  comment: IComment[];
  created_at: string;
  updated_at: string;
}

export interface IComment {
  id: number;
  user_id: number;
  novel_id: number;
  content: string;
  like: number;
}

export interface IChapter {
  id: number;
  novel_id: number;
  slug: string;
  title: string;
  volume: number;
  chapter: number;
  content: string;
  view: number;
  created_at: string;
  updated_at: string;
}
