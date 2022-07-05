

export const FormReducerFunc = (state, action)=>{
    switch(action.type){
        case "SUBMIT":
            return {
                ...state,
                formSubmitted: action.payload
            }
        default:
            return state
    }
}