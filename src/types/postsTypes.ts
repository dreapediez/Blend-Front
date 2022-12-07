export interface PostStructure {
  day: number;
  title: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  image: string;
  id: string;
}

export interface PostsState {
  list: PostStructure[];
}
