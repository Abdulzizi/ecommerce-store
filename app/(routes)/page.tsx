import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboards";
import getProduct from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("92f67e3f-efd2-4c16-a720-635ab7fbb19e");
  const product = await getProduct({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={product} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
