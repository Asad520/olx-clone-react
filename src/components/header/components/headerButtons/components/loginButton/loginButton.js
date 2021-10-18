import { propTypes, defaultProps } from './props';

export default function LoginButton({ setLoginModal }) {
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
