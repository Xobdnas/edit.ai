import React from 'react';
import Form from "react-jsonschema-form";
import {Link} from 'react-router';

const formSchema = {
  title: "Article",
  type: "object",
  properties: {
    name: {type: "string", title: "Name"},
    articleBody: {type: "string", title: "Body"}
  },
  required: [
    "name"
  ]
};

const formUI = {
  "name": {
    "ui:autofocus": true
  },
  "articleBody": {
    "ui:widget": "textarea"
  }
};

export default class Article extends React.Component {
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
