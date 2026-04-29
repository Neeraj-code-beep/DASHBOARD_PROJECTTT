import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user);
    dispatch(asyncregisteruser(user));
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="flex flex-col w-1/2 mt-5"
      >
        <input
          {...register('username')}
          className="mb-3 utline-0 border-b-2 p-2 text-4xl mt-2"
          type="text"
          placeholder="John-Doe"
        />
        <input
          {...register('email')}
          className="mb-3 outline-0 border-b p-2 text-4xl mt-2"
          text="email"
          placeholder="john@doe.com"
        ></input>
        <input
          {...register('password')}
          className="mb-3 outline-0 border-b p-2 text-4xl mt-2"
          text="password"
          placeholder="**********"
        ></input>
        <button className="rounded-md shadow-md p-2 mt-4 bg-purple-600 hover:bg-pink-400 active:text-blue-400">
          Register User
        </button>
        <p className="mt-2 hover:text-blue-500">
          Already have an account?{' '}
          <Link
            className="text-blue-600 hover:text-blue-50 active:text-pink-400"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
