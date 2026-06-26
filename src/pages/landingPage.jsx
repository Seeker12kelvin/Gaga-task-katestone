import Main from "../components/ui/main";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import { useContext } from "react";
import { UserContext } from "../components/context/user";
import MobileMenu from "../components/ui/mobileMenu";

const LandingPage = () => {
  const { menu } = useContext(UserContext);
  return (
    <>
      <Header />
      {menu && <MobileMenu />}
      <Main />
      <Footer />
    </>
  );
};

export default LandingPage;
