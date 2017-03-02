import React from 'react';
import Form from "react-jsonschema-form";
import { Link } from 'react-router';


const formSchema = {
  title: "Reset password",
  type: "object",
  required: ["username"],
  properties: {
    username: {type: "string", title: "Username"},
  }
};

const formUI = {
  "username": {
    "ui:autofocus": true
  }
};

export default class Login extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link" activeClassName="active">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/reset" className="nav-link" activeClassName="active">Reset</Link>
            </li>
          </ul>
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Reset Password</h3>
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
