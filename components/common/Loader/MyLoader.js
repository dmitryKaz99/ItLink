import Image from "next/image";
import spinner from "../../../assets/img/spinner.svg";

const MyLoader = () => {
  return (
    <div>
      <Image src={spinner} alt="spinner-loading_img" />
    </div>
  );
};

export default MyLoader;
