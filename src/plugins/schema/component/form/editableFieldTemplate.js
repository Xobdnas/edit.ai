import React from 'react';
import { connect } from 'react-redux';

function EditableFieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children, onRemoveFieldClick} = props; // eslint-disable-line react/prop-types
  return (
    <div className={`${classNames} editable`}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {description}
      {children}
      {errors}
      {help}
      {id !== "root" &&
        <div>
          <a href="#">
            <i className="fa fa-pencil-square-o" aria-hidden="true">Edit</i>
          </a>
          &nbsp;
          <a onClick={() => {onRemoveFieldClick(id);}} href="#">
            <i className="fa fa-trash" aria-hidden="true">Delete</i>
          </a>
        </div>
      }

    </div>
  );
}

function removeField(fieldId) {
  return {
    type: "formBuilder.removeField",
    fieldId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFieldClick: (fieldId) => {
      dispatch(removeField(fieldId));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditableFieldTemplate);
