interface ICreateUserData {
  email: string;
  password: string;
  confirmPassword: string;
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

interface IUserDetails {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  email: string;
  username: string;
  dateCreated: Date;
  userId: string;
}

interface IFollower {
  userId: string;
  dateCreated: Date;
  total: number;
}

interface IUserOutput {
  firstName: string;
  username: string;
  lastName: string;
  country: string;
  state: string;
  email: string;
  dateCreated: Date;
  userId: string;
}

type ISubscribedUser = IFollower & IUserOutput;
