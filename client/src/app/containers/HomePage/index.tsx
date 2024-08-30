import { Link } from "react-router-dom";
import { Button, Tag } from "antd";
import Graph from "../../components/Graphs/Graph";
import { CurveTypes } from "../../components/Graphs/constants";
import {
  Settings,
  Puzzle,
  Unlock,
  Greek,
  Price,
  HeroImage,
  ConnectorDiv,
  Hand,
} from "../../../assets/images/imageAssets";
import Footer from "../../components/Footer/Footer";
import { routes } from "../../../utils/routes";

import "./index.scss";

const HomePage = () => {
  return (
    <div>
      <section id="hero" className="hero-section">
        <div className="hero-grid-sections d-flex">
          <div className="hero-section-left">
            <p className="hero-heading">
            Immerse in DeFi's Next Era through {" "}
              <span
                style={{ color: "red", fontFamily: "ClashDisplay-bold" }}
              >
                Bonding Curves
              </span>
            </p>
            <p className="hero-sub-heading">
            Explore the newly envisioned potential of token issuance within the BTC ecosystem.
            </p>
            <p className="hero-description">
            Presenting a Revolutionary Dapp that Transforms Flexibility, 
              Empowers Dynamic Functionality, and Simplifies Effortless Token Management,
               all within a Single Platform!
            </p>
            <Link style={{ textDecoration: "none" }} to={routes.dashboard}>
              <Button className="launch-app-btn">Launch App</Button>
            </Link>
          </div>
          <div className="hero-section-right">
            <img className="hero-image" src={HeroImage} alt="hero" />
          </div>
        </div>
      </section>
      <section id="link-section">
        <img
          className="connector-div"
          src={ConnectorDiv}
          alt="connecting-div"
        />
      </section>
      <section className="why-section">
        <p className="title-2">
          Why <span className="curve">Munhna?</span>
        </p>
        <div className="row-1">
          <div className="feature">
            <img src={Settings} alt="settings"></img>
            <p className="feature-title">Customizable Token Economics</p>
            <p className="sub-content">
            Munhna provides users with the capability to tailor token economics by adjusting bonding curve parameters, including initial price, slope, and reserve ratio, to align precisely with their preferred token issuance strategies.
            </p>
          </div>
          <div className="feature">
            <img src={Puzzle} alt="puzzle"></img>
            <p className="feature-title">
              Support for different types of bonding curves
            </p>
            <p className="sub-content">
            We provide a range of bonding curve options, allowing token issuers to select the curve type aligning with their specific tokenomics and project needs. This flexibility empowers token issuers to customize token issuance dynamics in accordance with their unique objectives.
            </p>
          </div>
        </div>
        <div className="row-2">
          <div className="feature">
            <img src={Unlock} alt="token"></img>
            <p className="feature-title">Token-Vesting</p>
            <p className="sub-content">
            Throughout the lock-up duration, users have the option to unlock potential benefits linked to token appreciation. Those who choose to lock their tokens can seize the opportunity to sell at a higher rate once the lock-up period concludes, potentially facilitating profit generation as the token's value increases.
            </p>
          </div>
          <div className="feature-last">
            <img src={Price} alt="price"></img>
            <p className="feature-title">Efficient Price Discovery</p>
            <p className="sub-content">
              The price of the token is determined by the bonding curve
              algorithm based on the ratio of tokens in circulation. This allows
              traders to accurately assess the token's current value, enhancing
              transparency and enabling more informed trading decisions.
            </p>
          </div>
        </div>
      </section>
      <section id="section-3">
        <div className="graph-section d-flex">
          <div className="sticky-column">
            <div className="sticky-contents">
              <p className="sticky-heading">
                Unleash the Power of Curves: Discover the Range of Options at
                Your Fingertips!
              </p>
              <p className="sticky-description">
                Find the Perfect Curve, Fit for Your Token Economics and Project
                Goals
              </p>
            </div>
            <img className="hand-illustration" src={Hand} alt="hand" />
          </div>
          <div className=" graph-column">
            <p className="graph-heading">Linear Curve</p>
            <p className="graph-description">
              The token price increases or decreases in a linear fashion as the
              token supply grows or shrinks. No surprises, just a reliable and
              predictable pricing mechanism that keeps your project on a steady
              path.
            </p>
            <div className="graph">
              <Graph
                previewOnly={true}
                cap={100}
                increment={10}
                type={CurveTypes.linear}
                slope={15}
                intercept={15}
              />
            </div>
            <p className="graph-heading">Polynomial Curve</p>
            <p className="graph-description">
              With its flexible formula and elegant curve, the token price
              dances to the tune of exponential growth or controlled decline.
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.polynomial}
                a={1}
                n={2}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
            <div className="d-flex">
              <p className="graph-heading">Sub-Linear Curve</p>{" "}
              <Tag className="coming-soon-tag" color="green">
                Coming Soon
              </Tag>
            </div>
            <p className="graph-description">
              Harness the power of logarithmic growth, where the token price
              increases at a decreasing rate as the token supply grows. This
              unique formula ensures a balanced and gradual rise{" "}
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.subLinear}
                n={0.7}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
            <div className="d-flex">
              <p className="graph-heading">S-Curve</p>
              <Tag className="coming-soon-tag" color="green">
                Coming Soon
              </Tag>
            </div>
            <p className="graph-description">
              Experience the exhilaration of an S-Curve, where the token price
              starts slowly, gathers momentum, and reaches a state of
              equilibrium
            </p>
            <div className="graph">
              <Graph
                type={CurveTypes.sCurve}
                c1={0.2}
                c2={10}
                previewOnly={true}
                cap={100}
                increment={10}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fantom-section">
        <div className="fantom-section-left">
          <p className="title">Potential Scalability of BTC</p>
          <p className="sub-content">
          BTC stands out as an excellent choice for our endeavor to create an efficient bonding 
          curve-based token granting system. Its impressive scalability equips us to accommodate 
          increasing demands. We value BTC for its minimal transaction fees, robust ecosystem support, 
          seamless interoperability, high-level security, and vibrant community.
          </p>
        </div>
        <div className="fantom-section-right">
          <img src={Greek} className="greek" alt="gods-greek"></img>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
