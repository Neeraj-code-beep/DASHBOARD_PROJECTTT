import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateProduct } from '../../store/actions/productAction';

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    // dispatch(asyncregisteruser(product));
    dispatch(asyncCreateProduct(product));
    navigate('/products');
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="flex flex-col w-1/2 mt-5"
      >
        <input
          {...register('title')}
          className="mb-3 utline-0 border-b-2 p-2 text-4xl mt-2"
          type="text"
          placeholder="title"
        />
        <input
          {...register('price')}
          className="mb-3 outline-0 border-b p-2 text-4xl mt-2"
          text="email"
          placeholder="0.00"
        ></input>
        <textarea
          {...register('description')}
          className="mb-3 outline-0 border-b p-2 text-4xl mt-2"
          placeholder="enter description here..."
        ></textarea>
        <input
          {...register('category')}
          className="mb-3 outline-0 border-b p-2 text-4xl mt-2"
          text="text"
          placeholder="category"
        ></input>
        <button className="rounded-md shadow-md p-2 mt-4 bg-purple-600 hover:bg-pink-400 active:text-blue-400">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
