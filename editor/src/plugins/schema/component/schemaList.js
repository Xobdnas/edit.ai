import React from 'react';
import {Link} from 'react-router';
import { gql, graphql } from 'react-apollo';
import {Button, Icon, Table} from 'semantic-ui-react';

export class SchemaList extends React.Component {

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
            </div>
            <div className="panel-body">
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='3'>Schemas
                      <Button as={Link} to="/schema/add" floated='right' icon labelPosition='left' primary size='small'>
                        <Icon name='add' /> Add Schema
                      </Button>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <If condition={ !this.props.data.loading }>
                    {this.props.data.schemas.map((schema) => {
                      // TODO: @conortm already has a todo to make form_schema a custom graphQL scalar type.
                      let form_schema = JSON.parse(schema.form_schema);

                      return (
                        <Table.Row key={schema.id}>
                          <Table.Cell collapsing>
                            <Link to={`/add/${schema.name}`}>{schema.name}</Link>
                          </Table.Cell>
                          <Table.Cell>{form_schema.description}</Table.Cell>
                          <Table.Cell collapsing textAlign='right'>
                            <Button label='Edit' icon='edit' labelPosition='left' size="mini" />
                            <Button label="Delete" icon='delete' labelPosition='left' size="mini" />
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </If>
                </Table.Body>
              </Table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

SchemaList.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool.isRequired,
    schemas: React.PropTypes.array,
  }).isRequired
};

const SchemaQuery = gql`query Schemas { schemas {id, name, form_schema} }`;

export default graphql(SchemaQuery)(SchemaList);
