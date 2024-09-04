import Container from "../../../Components/Ui/Container/Container";
import estateBrokerage from "/public/brokers-imgs/Rectangle 27.png";

const GlobalBrokers = () => {
  return (
    <Container>
      <div className="md:py-[56px] py-[30px]">
        <h1 className="text-black font-bold text-[30px] md:text-[60px] leading-[40px] md:leading-[60px] text-center md:pb-[28px]">
          We are a global, boutique real <br /> estate brokerage
        </h1>
        <div className="md:flex md:gap-[150px]">
          <div className="md:w-[50%]">
            <h1 className="text-black font-semibold text-[24px] md:text-[38px] md:leading-[45.6px] pt-[34px] text-left">
              The transfer of real estate
            </h1>
            <p className="text-black font-normal md:text-[16px] md:leading-[24px] md:pt-[24px] text-justify md:pr-[105px] pt-4">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc. Tellus consequat nisl quis nisl justo.
            </p>
            <div className="flex gap-3 md:gap-6 md:pt-[45px] pt-8">
              <button className="bg-black text-white text-center font-normal text-[16px] leading-[19.5px] border-[1px] rounded-[40px] md:px-[35px] md:py-[15px] px-[26px] py-[8px]">
                Book Now!
              </button>
              <button className="bg-white text-black text-center font-normal text-[16px] leading-[19.5px] border-[1px] border-[#BEBEBE] rounded-[40px] md:px-[35px] md:py-[15px] px-[26px] py-[8px]">
                Read More
              </button>
            </div>
            <div className="md:pt-[80px] pt-[40px] flex max-sm:justify-between md:gap-[95px] gap-10">
              <div>
                <h1 className="text-black font-semibold text-[40px] md:text-[67px] md:leading-[80.4px]">
                  12+
                </h1>
                <p className="text-black font-normal md:text-[16px] md:leading-[19.5px] ">
                  Customers
                </p>
              </div>
              <div>
                <h1 className="text-black font-semibold text-[40px] md:text-[67px] md:leading-[80.4px]">
                  14+
                </h1>
                <p className="text-black font-normal md:text-[16px] md:leading-[19.5px] ">
                  Office
                </p>
              </div>
              <div>
                <h1 className="text-black font-semibold text-[40px] md:text-[67px] md:leading-[80.4px]">
                  10+
                </h1>
                <p className="text-black font-normal md:text-[16px] md:leading-[19.5px] ">
                  Students
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] relative max-sm:mt-[40px]">
            <img
              src={estateBrokerage}
              alt=""
              className="md:w-full md:h-full object-cover"
            />
            <div
              style={{
                background: `linear-gradient(to bottom right, #c1dee8b3, #ffffff00, #fbd9b9b3)`,
              }}
              className="absolute inset-0 rounded-[14px]"
            ></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GlobalBrokers;
