import Container from "../../../Components/Ui/Container/Container";
import footerLogo from "../../../../public/brokers-imgs/image 32.png";
import social from "../../../../public/brokers-imgs/Social Media.png";

const Footer = () => {
  return (
    <Container>
      <div>
        <div
          style={{
            background:
              "linear-gradient(to right, #c1dee8b3, #ffffff00, #fbd9b9b3)",
          }}
          className="rounded-lg md:mt-[56px]"
        >
          <div className="md:flex pt-[80px] md:gap-[90px]">
            <div className="pl-2 pt-[22px]">
              <img src={footerLogo} alt="" />
            </div>
            <div className="md:flex gap-[60px] md:pb-[60px] md:pr-3">
              <div>
                <h1 className="text-[#5D534A] font-bold md:text-[32px] md:leading-[43.2px] tracking-[.5%] pb-[42px]">
                  About
                </h1>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Company
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%] py-[30px]">
                  Contact Us
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%] pb-[30px]">
                  Terms and Service
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Privacy Policy
                </p>
              </div>
              <div>
                <h1 className="text-[#5D534A] font-bold md:text-[32px] md:leading-[43.2px] tracking-[.5%] pb-[42px]">
                  Product
                </h1>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Categories
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%] py-[30px]">
                  Pricing
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Testimonials
                </p>
              </div>
              <div>
                <h1 className="text-[#5D534A] font-bold md:text-[32px] md:leading-[43.2px] tracking-[.5%] pb-[42px]">
                  Discover
                </h1>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Teams
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%] py-[30px]">
                  Partners
                </p>
                <p className="text-[#5D534A] font-normal md:text-[24px] md:leading-[32px] tracking-[.5%]">
                  Career
                </p>
              </div>
              <div>
                <h1 className="text-[#5D534A] font-bold md:text-[32px] md:leading-[43.2px] tracking-[.5%] pb-[42px]">
                  Follow us
                </h1>
                <img src={social} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#5D534A] font-bold md:text-[28px] md:leading-[42.42px] tracking-[.5%] text-center pt-[23px]">
            © 2022 - All Rights Reserved Made With ❤ at @SSSSSS
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
