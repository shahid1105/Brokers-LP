import Banner from "../Banner/Banner";
import ExclusiveDeal from "../ExclusiveDeal/ExclusiveDeal";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import GlobalBrokers from "../GlobalBrokers/GlobalBrokers";
import OurProjects from "../OurProjects/OurProjects";
import QuaryPath from "../QuaryPath/QuaryPath";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuaryPath />
      <OurProjects/>
      <GlobalBrokers />
      <Subscribe />
      <FeaturedProperties />
      <ExclusiveDeal />
    </div>
  );
};

export default Home;
