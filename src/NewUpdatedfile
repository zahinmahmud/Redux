const { createStore } = require("redux");

//Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE ";

//state
// const initialcounterState = {
//   count: 0,
// };

const initialUserState = {
  users: ["anisul Islam"],
  count: 1,
};

//action - object -type ,payload
//INCREMENT COUNTER
// const incrementAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
// const resetAction = () => {
//   return {
//     type: RESET,
//   };
// };
// const incrementByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

//Reducer -> Pure Function
//create reducer for counter

// const counterReducer = (state = initialUserState, action) => {
//   switch (action.type) {
// case INCREMENT:
//   return {
//     ...state,
//     count: state.count + 1,
//   };

// case DECREMENT:
//   return {
//     ...state,
//     count: state.count - 1,
//   };
// case RESET:
//   return {
//     ...state,
//     count: 0,
//   };
// case INCREMENT_BY_VALUE:
//   return {
//     ...state,
//     count: state.count +  action.payload,
//   };

//   }
// };
const addUserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    // case INCREMENT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };

    // case DECREMENT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
  }
};

// const addUser =()=>{
//    return {
//     type: ADD_USER,
//     payload:{name:'shakil'}
// };
// }

//4. Store  - getState(),dispatch(),subscribe()

const store = createStore(addUserReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action

store.dispatch(addUser("Fatima"));
store.dispatch(addUser("Fahim"));
store.dispatch(addUser("Farhana"));
store.dispatch(addUser("Fabiha"));
store.dispatch(addUser("Fairuz"));
store.dispatch(addUser("Forhad"));
store.dispatch(addUser("Fahima"));
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
// store.dispatch(incrementByValue(5));
// store.dispatch(incrementByValue(15));
// store.dispatch(incrementByValue(25));
// store.dispatch(incrementByValue(35));
// store.dispatch(incrementByValue(45));
