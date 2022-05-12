export interface ClientSatisfaction {
  rate: number;
  title: string;
  description: string;
  user: User;
}

interface User {
  name: string;
  company: string;
  photo: string;
}
