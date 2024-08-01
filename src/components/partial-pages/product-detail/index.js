import ProductsHeroSection from "./hero";
import ProductOverview from "./main-page";

const ProductDetailPage = ({ id }) => {
  return (
    <div className="pt-24">
      <ProductsHeroSection />
      <ProductOverview id={id} />
    </div>
  );
};

export default ProductDetailPage;
