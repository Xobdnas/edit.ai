import React from 'react';
import Form from "react-jsonschema-form";
import {Link} from 'react-router';

const formSchema = {
  title: "Login",
  type: "object",
  required: ["username", "password"],
  properties: {
    username: {type: "string", title: "Username"},
    password: {type: "string", title: "password"},
  }
};

const formUI = {
  "username": {
    "ui:autofocus": true
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  }
};

export default class Login extends React.Component {
  // EventEmitter for form? Damn, now we need an isomorphic eventEmmitter, yo this is a lot of work ;-p
  // Also might make sense to wrap this in something, `extends Core.Component` or `Core.FormComponent` only if you
  // want to have your form be alter-able via an Emitter. Can keep using React.Component if form or no emmiter needed.
  // look into the Component life cycle for a refresher to see if there's anyting there we can take advantage and use.

  // We can also load the view Components into "State" and then allow other plugins to replace the state "view" with their
  // own view. So instead of adding to form, you would replace it with your own.

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/Login" className="nav-link" activeClassName="active" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/reset" className="nav-link">Reset</Link>
            </li>
          </ul>
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Please Sign In</h3>
            </div>
            <div className="panel-body">
              <Form schema={formSchema} uiSchema={formUI} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
