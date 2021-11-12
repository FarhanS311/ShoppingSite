const modalStatus = (state=false,action)=>{
    const {type} = action;

    switch(type){
        case 'TOGGLE_MODAL':
            return !state;
        default:
            return state;
    }
}

export default modalStatus