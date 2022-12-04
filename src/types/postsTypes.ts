export interface PostStructure {
  userId: string;
  day: number;
  title: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  image: string;
  imageBackup: string;
  createdAt: string;
  id: string;
}

export interface PostsState {
  list: PostStructure[];
}

export interface PostCardComponents {
  day: number;
  title: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  image: string;
}
