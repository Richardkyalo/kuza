import SectionTitle from "../Common/SectionTitle";
import Portfolio from "../portfolio";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import TeamsSection from "./teams";

const Features = () => {
  return (
    <>
      <section id="features" className=" ">
        <div className="container">
          <TeamsSection/>

          <Portfolio/>
        </div>
      </section>
    </>
  );
};

export default Features;
