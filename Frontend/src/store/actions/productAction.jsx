import axios from '../../api/Axiosconfig';
import { loadproduct } from '../reducers/productSlice';

export const asyncLoadProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/products');
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (user) => async (dispatch, getState) => {
  try {
    await axios.post('/products');
    dispatch(asyncLoadProducts());
  } catch (error) {
    console.log(error);
  }
};
