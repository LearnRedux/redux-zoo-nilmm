import { RECEIVE_ANIMAL } from '../actions';
import { BREAK_OUT } from '../actions';


export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      if(action.name===undefined){
        return [...state, {present:true}];
      }else{
        return [...state.filter(abc=>abc.name !== action.name), {name:action.name, present:true}];
      }
      return state;
      case BREAK_OUT:
      if(action.name !== undefined) {
        return state.map(x => x.name === action.name ? ({...x, present:false}) : x)
      }
        return state;
    default:
      return state;
  }
};
