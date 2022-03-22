import HeaderContainer from "../components/Header/HeaderContainer";
import Image from "next/image";
import logo from "../assets/img/logo.jpeg";

const Home = () => {
  return (
    <HeaderContainer banner={"home"} title={"Test task"}>
      <div className="text-center">
        <Image src={logo} alt="logo_img" className="rounded-3" />
      </div>
    </HeaderContainer>
  );
};

export default Home;
