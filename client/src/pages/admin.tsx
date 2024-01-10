import { User } from "@common/interfaces";
import Navbar from "components/navbar";

export interface UserResponse {
  data: User[];
}

export const Admin = () => {
  
  return (
    <div>
      <Navbar brandText={"Assigment"} />
    </div>
  );
};

export default Admin;
