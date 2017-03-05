const INITIAL_STATE = {
  error: null,
  formSchema: {
    description: "Description for your schema here",
    title: "Untitled schema",
    type: "object",
    properties: {
      "name": {"type": "string", "title": "Name"},
      "label": {"type": "string", "title": "Label"}
    },
    "required": ["name", "label"]
  },
  uiSchema: {
  },
  currentIndex: 0,
};

// TODO: need to add object destructuring to babel.
function addField(state = {}, action) {

  switch (action.type) {
    case "formBuilder.AddField": {
      // TODO: Promp for a key/field-name first.
      let key = "new" + Object.keys(state.properties).length;
      state.properties[key] = {"type": "string", "title": "Textfield " + Object.keys(state.properties).length};
      return state;
    }
    default:
      return state;
  }
}

function addInterger(state = {}, action) {
  switch (action.type) {
    case "formBuilder.addInteger": {
      // TODO: Promp for a key/field-name first.
      let key = "new" + Object.keys(state.properties).length;
      state.properties[key] = {"type": "integer", "title": "Int " + Object.keys(state.properties).length};

      return state;
    }
    default:
      return state;
  }
}

// Form builder reducer.
export default function formBuilder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "formBuilder.AddField":
      return Object.assign({}, state, {
        formSchema: addField(state.formSchema, action)
      })
    case "formBuilder.addInteger":
      return Object.assign({}, state, {
        formSchema: addInterger(state.formSchema, action)
      })
    default:
      return state;
  }
}
