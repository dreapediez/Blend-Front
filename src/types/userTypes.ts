export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}
