export interface CalendarStructure {
  userId: string;
  isActive: boolean;
  createdAt?: string;
  windows: WindowStructure[];
}

export interface WindowState {
  list: WindowStructure[];
}

export interface WindowStructure {
  day: number;
  title: string;
  teaType: string;
  brewed: string;
  ingredients: string;
  time: number;
  temperature: number;
}

export interface PostsStructure {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  image: string;
}

export interface WindowApi {
  windows: WindowStructure[];
}
