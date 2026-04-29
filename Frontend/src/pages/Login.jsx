import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userActions';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    console.log(user);

    dispatch(asyncloginuser(user));
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="flex flex-col w-1/2"
      >
        <input
          {...register('email')}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          text="email"
          placeholder="john@doe.com"
        />
        <input
          {...register('password')}
          className="mb-3 outline-0 border-b p-2 text-4xl"
          text="password"
          placeholder="**********"
        />
        <button className="rounded-md shadow-md p-2 mt-2 bg-purple-600">
          Login User
        </button>
        <p className="mt-2 hover:text-blue-500">
          Don't have an account?{' '}
          <Link className="text-blue-600 hover:text-blue-50" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
