import messages from "../../../../public/brokers-imgs/messages.png";
import sms from "../../../../public/brokers-imgs/sms-tracking.png";
import edit from "../../../../public/brokers-imgs/edit-2.png";
import Container from "../../../Components/Ui/Container/Container";

const QuaryPath = () => {
  return (
    <Container>
      <p className="text-center pt-[28px] text-[21px] leading-[120%]">
        Three steps. Three minutes.
      </p>
      <h1 className="font-semibold text-[50px] leading-[120%] text-center pt-[28px]">
        Everything should be this easy.
      </h1>
      <div className="flex flex-col md:flex-row text-center items-center gap-[160px] pt-[28px] pb-[81px]">
        <div>
          <img className="mx-auto w-[75px] h-[75px]" src={messages} alt="" />
          <h3 className="font-semibold text-[28px] leading-[120%] my-[22px]">
            Answer questions
          </h3>
          <p className="text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum in in vestibulum.{" "}
          </p>
        </div>
        <div>
          <img className="mx-auto w-[75px] h-[75px]" src={sms} alt="" />
          <h3 className="font-semibold text-[28px] leading-[120%] my-[22px]">
            Select a quote
          </h3>
          <p className="text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum in in vestibulum.{" "}
          </p>
        </div>
        <div>
          <img className="mx-auto w-[75px] h-[75px]" src={edit} alt="" />
          <h3 className="font-semibold text-[28px] leading-[120%] my-[22px]">
            Get registered
          </h3>
          <p className="text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum in in vestibulum.{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default QuaryPath;
