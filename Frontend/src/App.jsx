import { useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Mainroutes from './routes/Mainroutes';
import { useEffect } from 'react';
import { asynccurrentuser } from './store/actions/userActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
  });

  return (
    <div className="text-amber-50 font-semibold w-screen h-screen bg-linear-to-r from-rose-300 to-cyan-400 ">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
