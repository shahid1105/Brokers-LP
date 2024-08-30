import Container from "../../../Components/Ui/Container/Container";
import playstore from "../../../../public/brokers-imgs/Badges ENGLISH.png";
import apple from "../../../../public/brokers-imgs/Badges ENGLISH-1.png";
import dealImg from "../../../../public/brokers-imgs/Frame 78.png";

const ExclusiveDeal = () => {
  return (
    <Container>
      <div className="md:flex gap-6">
        <div className="md:w-[60%] md:py-[124px]">
          <h1 className="text-[#5D534A] font-bold text-[28px] md:text-[48px] md:leading-[62.5px] tracking-[.3%]">
            So, what are you waiting for? Get our exclusive deal in one hand
          </h1>
          <p className="text-[#87898780] font-normal md:text-[30px] md:leading-[40.5px] tracking-[.5%] md:pt-[19px] pb-[30px] ">
            Download our apps for free and feel the beat!
          </p>
          <div className="md:flex gap-10">
            <img src={playstore} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
        <div>
          <img className="h-full w-full" src={dealImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ExclusiveDeal;
