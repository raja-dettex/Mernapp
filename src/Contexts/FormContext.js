import { createContext, useContext, useReducer } from 'react';
import { FormReducerFunc } from '../Reducers/FormReducer'


const initialState = {
    formSubmitted: false
}

const FormContext = createContext(initialState);

const FormProvider = ({children})=>{
    const [state, formDispatch] = useReducer(FormReducerFunc, {formSubmitted: false});
    return <FormContext.Provider value={{state, formDispatch}}>{children}</FormContext.Provider>
}

const useForm = ()=> useContext(FormContext);

export { FormProvider, useForm}