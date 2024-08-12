import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
    products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => (
    <section className="pt-10">
        <div className="mx-auto w-full px-4 md:px-8">
            <div className="col-span-12 md:col-span-9">
                <div className="m-5 flex flex-wrap justify-center">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ProductSection;