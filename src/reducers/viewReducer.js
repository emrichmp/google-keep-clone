function viewReducer(state = {
    clicked: false
    }, action) {
    switch(action.type){
      case "CLICKVIEW":
        return {
          clicked: !state.clicked
        }
        default:
          return state;
    }
  }

  export default viewReducer;