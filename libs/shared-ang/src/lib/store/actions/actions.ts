import { createAction,props } from "@ngrx/store";


export const loginSuccessful = createAction(
    "[Login] current user",
    props<any>()
    );

export const logOut = createAction("[logout] current user ");
