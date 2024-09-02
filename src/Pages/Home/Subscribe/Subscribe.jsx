import Container from "../../../Components/Ui/Container/Container";
import subscribeHome from "../../../../public/brokers-imgs/3d-rendering-isometric-fdgdf 1.png";

const Subscribe = () => {
  return (
    <Container>
      <div
        style={{
          background:
            "linear-gradient(to right, #c1dee8b3, #ffffff00, #fbd9b9b3)",
        }}
        className="rounded-[15px] md:my-[56px]"
      >
        <div className="md:flex">
          <div className="pl-[15px] md:pl-[43px] md:pt-[56px] pt-[20px] md:w-[60%]">
            <h1 className="text-black font-semibold text-[23px] md:text-[50px] md:leading-[60px]">
              Subscribe Our Newsletter
            </h1>
            <p className="text-black font-normal md:text-[16px] md:leading-[24px] md:pt-[24px] pt-[18px] pb-[20px] md:pb-[45px] max-sm:text-justify pr-[15px]">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
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
              className="md:w-[606px] md:h-[500px] md:-mt-[56px] md:-mb-[44px] max-sm:mt-[40px]"
              src={subscribeHome}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
