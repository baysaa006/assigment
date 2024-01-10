export interface User {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  bio: string;
  address: string;
}

export interface UserInput {
  name: string;
  email: string;
  phone: string;
  bio: string;
}
