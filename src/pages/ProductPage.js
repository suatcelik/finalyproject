import Clients from "../components/Shop/Clients";
import Feature from "../components/ProductPage/Feature";
import ProductCard from "../components/ProductPage/ProductCard";
import ProductBestSeller from "../components/ProductPage/ProductBestSeller";

function ProductPage() {
  return (
    <>
      <ProductCard />
      <Feature />
      <ProductBestSeller />
      <Clients />
    </>
  );
}

export default ProductPage;
