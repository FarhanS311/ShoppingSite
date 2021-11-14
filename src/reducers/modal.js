const modalStatus = (state=false,action)=>{
    const {type} = action;

    switch(type){
        case 'SHOW_MODAL':
            return true;
        case 'HIDE_MODAL':
            return false;
        default:
            return state;
    }
}

export default modalStatus