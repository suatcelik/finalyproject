import Footer from "../components/Footer";
import Header from "../components/Header";
import BestsellerProducts from "../components/BestsellerProducts";
import ImageSlider from "../components/ImageSlider";

import Content from "../components/Content";
import ShopCards from "../components/ShopCards";
import FeaturedPosts from "../components/FeaturedPosts";
import SliderImage from "../components/SliderImage";

const Main = () => {
  return (
    <>
      <Header />
      <SliderImage />
      <ShopCards />
      <BestsellerProducts />
      <ImageSlider />
      <Content />
      <FeaturedPosts />
      <hr></hr>
      <Footer />
    </>
  );
};

export default Main;
