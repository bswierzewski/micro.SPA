export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  created: Date;
  roles: string[];
  lastActive: Date;
  token: string;
}
