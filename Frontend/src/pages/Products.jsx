import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const renderProduct = products.map((product) => {
    return (
      <div
        className="p-3 w-[30%] h-[60%] mr-3 mb-3 border shadow"
        key={product.id}
      >
        <img
          className="w-full h-[50%] object-cover"
          src={product.image}
          alt=""
        />
        <h1 className="text-blue-400">{product.title}</h1>
        <small className="text-emerald-300">
          {product.description.slice(0, 100)}...
        </small>
        <div className="p-3 mt-3 flex justify-between items-center">
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
        <Link className="block w-full m-auto" to={`/product/${product.id}`}>
          More Info
        </Link>
      </div>
    );
  });
  return products.length > 0 ? (
    <div className="p-4 ml-4w-full overflow-auto h-screen flex justify-center items-center gap-4">
      {renderProduct}
    </div>
  ) : (
    'Loading...'
  );
};

export default Products;
