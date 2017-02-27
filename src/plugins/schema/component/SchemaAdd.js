import React from 'react';
import Form from "react-jsonschema-form";

const formSchema = {
  "title": "schema",
  "type": "object",
  "properties": {
    "name": {"type": "string", "title": "Name"},
    "label": {"type": "string", "title": "Label"}
  },
  "required": ["name", "label"]
};

const uiSchema = {
  "name": {
    "ui:autofocus": true
  }
};

export default class SchemaAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };
  }

  onSubmit = ({formData}) => {
    fetch('/api/schema', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({schema: formData})
    })
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="alert alert-success hidden">
            <strong>Success!</strong> Schema Added.
          </div>
          <h3 className="title">Add new schema</h3>
          <Form schema={formSchema} uiSchema={uiSchema} formData={this.state.formData} onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}
