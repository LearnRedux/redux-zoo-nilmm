import { combineReducers } from 'redux'
import animals from './animals';
import presenceFilter from './presenceFilter';
import name from './name';

const zoo = combineReducers({
  animals,
  presenceFilter,
  name
})
 
export default zoo;

