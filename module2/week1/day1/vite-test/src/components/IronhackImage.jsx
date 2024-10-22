import myImage from "../assets/ironhack-logo.jpg";
import reactImg from "../assets/react.svg";
export const IronhackImage = () => {
  return (
    <>
      <img src={myImage} alt="my image" />
      <img src={reactImg} alt="react image" />
    </>
  );
};
