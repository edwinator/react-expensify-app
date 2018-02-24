import React from "react";
import {connect} from "react-redux";
import {startLoginGoogle, startLoginFB} from "../actions/auth";

export const LoginPage = ({startLoginGoogle, startLoginFB}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Get expenses under control</p>
      <button className="button" onClick={startLoginGoogle}>
        Login with Google
      </button>
      <button className="button button--disabled" onClick={startLoginFB}>
        Login with Facebook
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginGoogle: () => dispatch(startLoginGoogle()),
  startLoginFB: () => dispatch(startLoginFB()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
