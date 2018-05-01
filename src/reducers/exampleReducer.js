import { types } from '../actions';

const initialState = {
  count: 0
};

export default function exampleReducer(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + action.diff
      });
      break;
    default:
      return state;
      break;
  }
}