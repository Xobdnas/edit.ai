import React from 'react';
import Form from "react-jsonschema-form";
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SchemaAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      status: "",
      dropdownOpen: false
    };
  }

  render() {
    const {formBuilder} = this.props;

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

          <Form schema={formBuilder.formSchema} uiSchema={formBuilder.uiSchema} formData={this.state.formData} onSubmit={this.onSubmit} />

          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Add Field
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.onAddTextFieldClick}>Add Textfield</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick= {this.props.onAddIntegerClick}>Add Number</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    )
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

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
}

SchemaAdd.propTypes = {
  formBuilder: React.PropTypes.object.isRequired,
  onAddTextFieldClick: React.PropTypes.func.isRequired,
  onAddIntegerClick: React.PropTypes.func.isRequired
}


function addTextField(fieldType) {
  return {type: "formBuilder.AddField", fieldType}
}

function addInteger(fieldType) {
  return {type: "formBuilder.addInteger", fieldType}
}

const mapStateToProps = (state) => {
  return {
    formBuilder: state.formBuilder
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTextFieldClick: () => {
      dispatch(addTextField("value"))
    },
    onAddIntegerClick: () => {
      dispatch(addInteger(""))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemaAdd);
