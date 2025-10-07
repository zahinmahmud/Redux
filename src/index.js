const { createStore } = require("redux");

//Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE ";

//state
const initialcounterState = {
  count: 0,
};

// const initialUserState={
//     users: [{name:"anisul Islam"}]
// };

//action - object -type ,payload
//INCREMENT COUNTER
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

//Reducer -> Pure Function
//create reducer for counter

const counterReducer = (state = initialcounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count +  action.payload,
      };
    default:
      state;
  }
};

// const addUser =()=>{
//    return {
//     type: ADD_USER,
//     payload:{name:'shakil'}
// };
// }

//4. Store  - getState(),dispatch(),subscribe()

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(resetAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(15));
store.dispatch(incrementByValue(25));
store.dispatch(incrementByValue(35));
store.dispatch(incrementByValue(45));
