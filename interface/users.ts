export interface UsersAttributes {
  isLoggedIn: boolean;
  email: string | null;
}

export interface LoginValue {
  email: string;
  password: string;
}
