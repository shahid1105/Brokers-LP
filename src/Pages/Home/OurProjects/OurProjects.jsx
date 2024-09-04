import Container from "../../../Components/Ui/Container/Container";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rectangle19 from '../../../../public/brokers-imgs/Rectangle 19.png'
import Rectangle20 from '../../../../public/brokers-imgs/Rectangle 20.png'
import Rectangle21 from '../../../../public/brokers-imgs/Rectangle 21.png'

const OurProjects = () => {
  return (
    <Container>
      <p className="md:text-[21px] leading-[120%]">Best Project of the Years</p>
      <h1 className="font-semibold py-4 md:py-[28px] text-[30px] md:text-[50px] leading-[120%] md:pt-[28px]">
        Our recent projects
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
          <div className="card card-compact bg-base-100 md:w-96 shadow-xl">
            <figure>
              <img
                src={Rectangle19}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold text-[21px]">
                Sobha Hearland II Villas
              </h2>
              <p className="py-[17px] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                bibendum.
              </p>
              <div className="card-actions justify-start">
                <span className="flex gap-1 justify-center items-center text-[#F59914] text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-[#9B9B9B]">
                    <FaRegStar />
                  </span>
                  <p className="ms-[11px] text-[16px] text-black">4.83</p>
                </span>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 md:w-96 shadow-xl">
            <figure>
              <img
                src={Rectangle20}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold text-[21px]">
                Sobha Hearland II Villas
              </h2>
              <p className="py-[17px] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                bibendum.
              </p>
              <div className="card-actions justify-start">
                <span className="flex gap-1 justify-center items-center text-[#F59914] text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-[#9B9B9B]">
                    <FaRegStar />
                  </span>
                  <p className="ms-[11px] text-[16px] text-black">4.83</p>
                </span>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 md:w-96 shadow-xl">
            <figure>
              <img
                src={Rectangle21}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-semibold text-[21px]">
                Sobha Hearland II Villas
              </h2>
              <p className="py-[17px] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
                bibendum.
              </p>
              <div className="card-actions justify-start">
                <span className="flex gap-1 justify-center items-center text-[#F59914] text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-[#9B9B9B]">
                    <FaRegStar />
                  </span>
                  <p className="ms-[11px] text-[16px] text-black">4.83</p>
                </span>
              </div>
            </div>
          </div>
      </div>
    </Container>
  );
};

export default OurProjects;
