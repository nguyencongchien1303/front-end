export interface User {
  id: string;
  name: string;
  birthDate: Date;
  gender: number;
  username: string;
  password: string;
  phone: number;
  address: string;
  role: number;
  status: number;
  point: number;
  jwtToken: string;
  refreshToken: string;
}
