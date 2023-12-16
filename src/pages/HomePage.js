import Footer from "../components/Footer";
import Header from "../components/Header";
import BestsellerProducts from "../components/BestsellerProducts";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../data/SliderData";
import Content from "../components/Content";
import ShopCards from "../components/ShopCards";
import FeaturedPosts from "../components/FeaturedPosts";

const Main = () => {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />
      <br />
      <br />
      <br />
      <ShopCards />
      <BestsellerProducts />
      <ImageSlider slides={SliderData} />
      <Content />
      <FeaturedPosts />
      <hr></hr>
      <Footer />
    </>
  );
};

export default Main;
