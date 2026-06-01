import axios from '../../api/Axiosconfig';
import { loaduser } from '../reducers/userSlice';

export const asynccurrentuser = (user) => (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) dispatch(loaduser(user));
    else console.log('User not logged in!');
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = (user) => (dispatch, getState) => {
  try {
    // localStorage.setItem('user', '');
    localStorage.removeItem('user'); // removing the user is better...
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
    );

    const loggedInUser = data[0];

    localStorage.setItem('user', JSON.stringify(loggedInUser));
    dispatch(loaduser(loggedInUser));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (user) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post('/users', user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
