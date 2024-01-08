import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-xl font-bold text-white">ToomAI</div>
      <div className="space-x-4 md:flex">
        <Link to="/auth/login" className="mt-0 w-max lg:pt-10">
          <button className="rounded-full bg-gray-900 px-6 py-[6px] font-bold  tracking-[1.2px] text-white ">
            Нэвтрэх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
