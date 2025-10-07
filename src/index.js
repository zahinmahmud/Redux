//Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialcounterState = {
  count: 0,
};

// const initialUserState={
//     users: [{name:"anisul Islam"}]
// };

//action - object -type ,payload
//INCREMENT COUNTER
const IncrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

//Reducer -> Pure Function
//create reducer for counter

const counterReducer = (state, action) => {
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
