import Container from "../../../Components/Ui/Container/Container";
import property1 from "../../../../public/brokers-imgs/minh-pham-OtXADkUh3-I-unsplash 1.png";
import property2 from "../../../../public/brokers-imgs/spacejoy-GQQyH0yNqLk-unsplash 1.png";
import property3 from "../../../../public/brokers-imgs/adam-winger-38Llq3HTO3A-unsplash 1.png";

const FeaturedProperties = () => {
  return (
    <Container>
      <div className="pt-[40px]">
        <h1 className="text-black font-bold text-[28px] md:text-[72px] md:leading-[93.74px] tracking-[.3%] text-center">
          Featured Properties
        </h1>
        <p className="text-[#5D534A] font-normal md:text-[28px] md:leading-[33.89px] tracking-[.5%] md:pt-[38px] pb-[92px] text-center">
          The well-furnished home and apartments are available
        </p>
        <div className="md:pb-[74px] md:flex gap-[41px]">
          <div className="md:w-[447.96px] md:h-[602px]">
            <img
              className="md:w-[447.96px] h-[532.6px]"
              src={property1}
              alt=""
            />
            <h1 className="text-[#878987] font-bold text-[36px] md:leading-[46.87px] tracking-[.3%] pt-6 text-center">
              Cozy Living Room
            </h1>
          </div>
          <div className="md:w-[447.96px] md:h-[602px]">
            <img
              className="md:w-[447.96px] h-[532.6px]"
              src={property2}
              alt=""
            />
            <h1 className="text-[#878987] font-bold text-[36px] md:leading-[46.87px] tracking-[.3%] pt-6 text-center">
              Cozy Living Room
            </h1>
          </div>
          <div className="md:w-[447.96px] md:h-[602px]">
            <img
              className="md:w-[447.96px] h-[532.6px]"
              src={property3}
              alt=""
            />
            <h1 className="text-[#878987] font-bold text-[36px] md:leading-[46.87px] tracking-[.3%] pt-6 text-center">
              Cozy Living Room
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProperties;
