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
      status: ""
    };
  }

  onSubmit = ({formData}) => {
    fetch('/api/schema', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({schema: formData})
    }).then((response) => {
      if (response.status >= 400) {
        this.setState({status: "danger"});
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(() => {
      this.setState({formData: {}});
      this.setState({status: "success"});
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          { /* Have an error component that can handle all of this. */}
          { this.state.status !== "" &&
            <div className={`alert alert-${this.state.status} hidden`}>
              <strong>Success!</strong> Schema Added.
            </div>
          }
          <h3 className="title">Add new schema</h3>
          <Form schema={formSchema} uiSchema={uiSchema} formData={this.state.formData} onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}
