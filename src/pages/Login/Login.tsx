const Login = () => {
  return (
    <section className="login">
      <div className="login__container container">
        <h1 className="login__title">Login</h1>
        <form className="login__form form">
          <div className="form__input-wrapper">
            <label htmlFor="email" className="form__label">
              <b>Email</b>
            </label>
            <input type="email" className="form__input-email" />
          </div>
          <div className="form__input-wrapper">
            <label htmlFor="" className="form__label">
              <b>Password</b>
            </label>
            <input type="password" className="form__input-password" />
          </div>
          <button className="form__button">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
