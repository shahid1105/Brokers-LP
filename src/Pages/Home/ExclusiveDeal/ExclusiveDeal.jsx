import Container from "../../../Components/Ui/Container/Container";
import playstore from "../../../../public/brokers-imgs/Badges ENGLISH.png";
import apple from "../../../../public/brokers-imgs/Badges ENGLISH-1.png";
import dealImg from "../../../../public/brokers-imgs/Frame 78.png";

const ExclusiveDeal = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="md:py-[124px]">
          <h1 className="text-[#5D534A] font-bold text-[22px] md:text-[48px] md:leading-[62.5px] tracking-[.3%] max-sm:pt-5">
            So, what are you waiting for? Get our exclusive deal in one hand
          </h1>
          <p className="text-[#87898780] font-normal md:text-[30px] md:leading-[40.5px] tracking-[.5%] md:pt-[19px] pb-[30px] ">
            Download our apps for free and feel the beat!
          </p>
          <div className="flex gap-4 md:gap-10">
            <img className="max-sm:h-[40px]" src={playstore} alt="" />
            <img className="max-sm:h-[40px]" src={apple} alt="" />
          </div>
        </div>
        <div className="max-sm:pt-[40px]">
          <img className="" src={dealImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ExclusiveDeal;
