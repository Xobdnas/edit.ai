import React from 'react';
import Form from "react-jsonschema-form";
import {Link} from 'react-router';
import sharedb from 'sharedb/lib/client';

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


// TODO: Everything in here is just hacked up to test, WS editor. Working o.k. need to clean up.
var externalStateManager;
if ( typeof window != 'undefined'){
  var socket = new WebSocket('ws://' + window.location.host);
  var connection = new sharedb.Connection(socket);
  var doc = connection.get('editor', 'form');
  // Initial state from web socket store.
  doc.subscribe(() => externalStateManager(doc.data.formData));

  // When document changes (by this client or any other, or the server),
  doc.on('op', () => externalStateManager(doc.data.formData));
}

export default class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {}
    };
  }

  componentWillMount() {
    // external reach into react, hacked.
    externalStateManager = (data) => {
      this.setState({formData: data});
    };
  }

  onFormDataChange = ({formData}) => {
    // Update the websocket store.
    doc.submitOp([{p:['formData'], oi:formData}]);
  };

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
              <Form schema={formSchema} uiSchema={formUI} formData={this.state.formData} onChange={this.onFormDataChange}
                    onSubmit={({formData}) => console.log("submitted formData", formData)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
