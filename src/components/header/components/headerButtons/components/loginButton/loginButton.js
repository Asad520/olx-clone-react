import useLoginButton from './controller';
import { propTypes, defaultProps } from './props';

export function LoginButton(props) {
  const { setLoginModal } = useLoginButton(props);

  return (
    <section className='login'>
      <button
        className='login-btn'
        type='button'
        onClick={() => setLoginModal(true)}
      >
        Login
      </button>
    </section>
  );
}

LoginButton.propTypes = propTypes;
LoginButton.defaultProps = defaultProps;
