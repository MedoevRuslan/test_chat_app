import React from 'react';
import jwtDecode from 'jwt-decode'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/setUser'
import { setIsAuth } from '../redux/actions/setIsAuth'
import { useNavigate } from 'react-router-dom';
import  useTogglePersist  from '../hooks/useTogglePersist';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [check, toggleCheck] = useTogglePersist('persist', false);
  const [check, toggleCheck] = useLocalStorage('persist', false)

  const handleCallbackResponse = (response) => {
    const user = jwtDecode(response.credential);
    dispatch(setUser(user));
    dispatch(setIsAuth(true))
    navigate('/', { replace: true })
  }

  React.useEffect(() => {
    /* global google  */
    google.accounts.id.initialize({
      client_id: '812301901120-ikeeddp6nf868r2sitccpknv96ecjqc0.apps.googleusercontent.com',
      callback: handleCallbackResponse
    }, [])

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    )
  }, [])

  const handleCheck = (e) => {
    toggleCheck(e.target.checked)
  }

  return (
    <>
      <div id='signInDiv'>
      </div>
      <input type='checkbox' id='persist' onChange={handleCheck} checked={check} />
      <label htmlFor='persist' > persist authirization </label>
    </>
  );
}

export default Login;