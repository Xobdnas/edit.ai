import React from 'react';
import Form from "react-jsonschema-form";
import {Link} from 'react-router';

const formSchema = {
  title: "Article",
  type: "object",
  required: ["name"],
  properties: {
    name: {type: "string", title: "Name"},
  }
};

const formUI = {
  "name": {
    "ui:autofocus": true
  },
};

export default class Article extends React.Component {
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
          </ul>
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Article</h3>
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
