import {createStore } from 'redux';
import editor from './reducers'


// TODO: Add a plugin loader for reducers here.
import formBuilder from './plugins/schema/reducers';

/*
const rootReducer = combineReducers({
  editor,
  formBuilder
});
*/

// This does the same as the combineReducer above. But I rather keep
// this like this for now, because I find it more explicit.
function rootReducer(state = {}, action) {
  return {
    editor: editor(state.editor, action),
    formBuilder: formBuilder(state.formBuilder, action)
  }
}

let store = createStore(rootReducer)

export default store;
