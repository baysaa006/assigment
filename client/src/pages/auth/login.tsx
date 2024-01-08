import { Button, useToast } from "@chakra-ui/react";
import InputField from "components/fields/InputField";
import { AuthContext } from "contexts/auth.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { authenticate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (phone.length < 8) {
      toast({
        title: "Utas",
        description: "Utasnii dgr n buruu bna aa 😎",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (password.length < 3) {
      toast({
        title: "Password",
        description: "3-aas deesh urrtai bna aa",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <div className=" w-4/6 flex-col items-center justify-center align-middle md:w-5/12 md:pl-4 lg:pl-0 xl:w-3/12 ">
      <h4 className="mb-2.5 text-center text-4xl font-bold text-navy-700 dark:text-white">
        Нэвтрэх
      </h4>
      <div className="mb-6 flex items-center">
        <div className="h-px w-full bg-gray-200 dark:bg-gray-600" />
        <div className="h-px w-full bg-gray-200 dark:bg-gray-600" />
      </div>
      <InputField
        className=""
        onChange={(e) => setPhone(e.target.value)}
        variant="auth"
        extra="mb-3"
        label="Утас*"
        placeholder="Утасны дугаараа оруулана уу"
        id="phone"
        type="number"
      />
      <InputField
        password={true}
        onChange={(e) => setPassword(e.target.value)}
        variant="auth"
        extra="mb-3"
        label="Нууц үг*"
        placeholder="нууц үгээ оруулана уу"
        id="password"
        type="password"
      />
      <Button
        _hover={{ bg: "bg-navy-800" }}
        className="mt-4 w-full hover:bg-navy-800 dark:bg-navy-800 dark:text-white"
        onClick={handleLogin}
      >
        Нэвтрэх
      </Button>

      <div className="mt-4 w-full text-center">
        <span className="  text-center text-sm font-medium text-navy-700 dark:text-gray-600">
          Бүртгүүлэх бол ?
        </span>
        <button
          onClick={() => navigate("/auth/register")}
          className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
        >
          Шинээр үүсгэх
        </button>
      </div>
    </div>
  );
}
