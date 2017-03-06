import React from 'react';
import {Link} from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class SchemaList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schemas: []
    };
  }

  componentDidMount() {
    const schemaUrl = `/api/schema/`;
    fetch(schemaUrl)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((list) => {
        this.setState({schemas: list});
      });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
            </div>
            <div className="panel-body">
              <ListGroup>
                {
                  this.state.schemas.map(function(schema) {
                    return (
                      <ListGroupItem key={schema.id}>
                        <Link to={`/add/${schema.name}`}>{schema.name}</Link>
                      </ListGroupItem>
                    );
                  })
                }
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
