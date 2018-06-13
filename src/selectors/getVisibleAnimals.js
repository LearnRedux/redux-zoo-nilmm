export default (state = []) => {
  if(state.presenceFilter!==undefined){
    if(state.presenceFilter === 'present'){
      return state.animals.filter(isPresent);
    }else{
        if(state.presenceFilter === 'absent'){
          return state.animals.filter(isAbsent);
        }
      }  
    }
  return state.animals;
};

function isPresent(valor) {
 if(valor.present === true) return true;
  return false;
}

function isAbsent(valor) {
  if(valor.present === false) return true;
   return false;
 }
