import { createReducer,on } from "@ngrx/store";
import { loginSuccessful } from "../actions/actions";

const initialState = {user:{}};
export const loginReducer = createReducer(
    initialState,
    on(loginSuccessful, (state, action) => {
        console.log(action);
        return {
            ...state,
            user:action.userData
        }
    })
);