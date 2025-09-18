export type UserDTO = {
  name: string;
  email: string;
  password: string;
  role: "driver" | "passenger";
  location: {
    type: "Point";
    coordinates: number[];
  };
};

export type loginDataDTO={
    email:string,
    password:string
}