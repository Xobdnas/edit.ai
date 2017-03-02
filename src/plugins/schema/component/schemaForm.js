import React from 'react';
import Form from "react-jsonschema-form";


export default class SchemaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      schema: {
        form_schema: {},
        ui_schema: {}
      }
    };
  }

  componentDidMount() {
    const schemaUrl = `/api/schema/${this.props.params.schema}`;
    fetch(schemaUrl)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((schema) => {
        this.setState({schema});
      });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <ul className="nav">
          </ul>
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.state.schema.label}</h3>
            </div>
            <div className="panel-body">
              <Form schema={this.state.schema.form_schema} uiSchema={this.state.schema.ui_schema} formData={this.state.formData} onSubmit={() => {}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SchemaForm.propTypes = {
  params: React.PropTypes.object.isRequired
}
