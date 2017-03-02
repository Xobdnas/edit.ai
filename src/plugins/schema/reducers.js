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

function addField(state = {}, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
