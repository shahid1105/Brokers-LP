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
        className="rounded-lg md:my-[56px]"
      >
        <div className="md:flex">
          <div className="pl-[43px] md:pt-[56px] w-[60%]">
            <h1 className="text-black font-semibold text-[28px] md:text-[50px] md:leading-[60px]">
              Subscribe Our Newsletter
            </h1>
            <p className="text-black font-normal md:text-[16px] md:leading-[24px] md:pt-[24px] pt-[18px] pb-[45px]">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
            </p>
            <div className="flex items-center w-[469px] relative pb-[78px]">
              <input
                className="w-[469px] h-[60px] pl-[24px] py-[7px] rounded-[40px] "
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-black text-white w-[147px] h-[60px] text-center font-normal text-[16px] leading-[19.5px] border-[1px] border-[#BEBEBE] rounded-[40px] px-[25px] py-[11px] absolute right-0">
                Get a Code
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-[606px] h-[557px] -mt-[56px] -mb-[44px]"
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
