import { useContext } from "react";
import { UserContext } from "../context/user";
import { CiMenuBurger } from "react-icons/ci";

const MenuBtn = () => {
  const { setMenu } = useContext(UserContext);

  return (
    <button
      className="min-[966px]:hidden text-white"
      onClick={() => {
        setMenu(true);
        console.log(true);
      }}
    >
      <CiMenuBurger size={30} />
    </button>
  );
};

export default MenuBtn;
