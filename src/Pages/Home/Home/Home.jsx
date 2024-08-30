import ExclusiveDeal from "../ExclusiveDeal/ExclusiveDeal";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import GlobalBrokers from "../GlobalBrokers/GlobalBrokers";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <GlobalBrokers></GlobalBrokers>
      <Subscribe></Subscribe>
      <FeaturedProperties></FeaturedProperties>
      <ExclusiveDeal></ExclusiveDeal>
    </div>
  );
};

export default Home;
