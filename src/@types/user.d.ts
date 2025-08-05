interface ICreateUserData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  description?: string;
  tags: string[];
}

interface ILoginUserData {
  login: string;
  password: string;
}
