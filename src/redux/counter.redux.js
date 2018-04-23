const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGED = 'CHANGED';

const initState = {
  count: 0
};

export function counter(state = initState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload ? state.count + action.payload : state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload ? state.count - action.payload : state.count - 1
      };
    case CHANGED:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
}

export function increment(count) {
  return { type: INCREMENT, payload: count };
}

export function decrement(count) {
  return { type: DECREMENT, payload: count };
}

export function changed(count) {
  return { type: CHANGED, payload: count };
}
