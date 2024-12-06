import products from "../../../../data/products";

// ProductDetail component receives params as a prop
export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params; // Access the id from params

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));

  // Handle case where product is not found
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="w-64 h-64" />
      <p className="text-lg">Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.description}</p>
    </div>
  );
}

// If you want to use `getServerSideProps` or `getStaticProps` for fetching the product
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  return {
    title: product ? product.name : "Product not found",
  };
}
