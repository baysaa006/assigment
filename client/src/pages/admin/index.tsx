import { User } from "@common/interfaces";
import Navbar from "components/navbar";
import { useForm, SubmitHandler, Form } from "react-hook-form";

export interface UserResponse {
  data: User[];
}

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Admin = () => {
  const handleFormSubmit = (data: any) => {
    console.log("Form data submitted:", data);
  };
  return (
    <div className="">{/* <ProfileForm onSubmit={handleFormSubmit} /> */}</div>
  );
};

export default Admin;
