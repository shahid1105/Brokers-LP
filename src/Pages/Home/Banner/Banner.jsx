import Container from "../../../Components/Ui/Container/Container";
import bannerImg from "/public/brokers-imgs/Final ii 1.png";
const Banner = () => {
  return (
    <Container>
      <div
        style={{
          background:
            "linear-gradient(to right, #c1dee8b3, #ffffff00, #fbd9b9b3)",
        }}
        className="rounded-[15px] mt-8"
      >
        <div className="md:flex gap-[90px]">
          <div className="md:w-[45%] pl-[15px] md:pl-[46px]">
            <p className="text-black font-normal text-[16px] md:leading-[19.2px] pt-[30px] md:pt-[91px]">
              Welcome to Realstate
            </p>
            <h1 className="text-black font-bold text-[35px] md:text-[67px] md:leading-[80.4px] tracking-[.3%] pt-2 md:pt-[15px] md:pb-6 pb-[15px]">
              Manage Your Property
            </h1>
            <p className="text-black font-normal md:text-[16px] md:leading-[24px] md:pr-5">
              Your will have everything nearby supermarket, buses , station, the
              carmen neighborhood, etc
            </p>
            <div className="flex items-center w-[250px] md:w-[438px] relative pt-6">
              <input
                className="w-[250px] md:w-[438px] h-[35px] md:h-[60px] pl-[24px] py-[7px] rounded-[40px] "
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-black text-white w-[100px] md:w-[147px] h-[35px] md:h-[60px] text-center font-normal md:text-[16px] leading-[19.5px] border-[1px] border-[#BEBEBE] rounded-[40px] px-[8px] py-[6px] md:px-[25px] md:py-[11px] absolute right-0">
                Get a Code
              </button>
            </div>
          </div>
          <div>
            <img
              className="md:w-[785px] md:h-[600px] md:-mb-[50px] max-sm:mt-[40px]"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
