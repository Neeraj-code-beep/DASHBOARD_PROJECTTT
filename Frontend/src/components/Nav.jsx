import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user);
  return (
    <div className="flex gap-5 justify-center items-center ">
      <NavLink className={(e) => (e.isActive ? 'bg-purple-500' : ' ')} to="/">
        Home
      </NavLink>

      <NavLink
        className={(e) => (e.isActive ? 'bg-purple-500' : ' ')}
        to="/products"
      >
        Products
      </NavLink>
      {user ? (
        <>
          <NavLink
            className={(e) => (e.isActive ? 'bg-purple-500' : ' ')}
            to="/admin/create-product"
          >
            Create Product
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? 'bg-purple-500' : ' ')}
            to="/admin/update-product"
          >
            Update Product
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? 'bg-purple-500' : ' ')}
            to="/admin/delete-product"
          >
            Delete Product
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={(e) =>
              e.isActive ? 'bg-purp-le-500 rounded-md p-0.5 mt-0.5' : ' '
            }
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Nav;
