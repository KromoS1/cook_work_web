import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GeneralDataAccountType {
    numberPhone: string
    email: string
    city: string
}

export interface UserAccountType extends GeneralDataAccountType{
    firstName: string
    name: string
    dateOfBirth: string
}

const initialState: UserAccountType = {
    firstName: '',
    name: '',
    dateOfBirth: '',
    city: '',
    numberPhone: '',
    email: '',
}

export const setDataUsers = createAsyncThunk(
    'myAccount/setDataUsers',
    async (user:UserAccountType, {dispatch}) => {
        dispatch(actionsUserAccount.setMyData(user));
    }
)

const slice = createSlice({
    name: 'myAccount',
    initialState,
    reducers: {
        setMyData(state,action:PayloadAction<UserAccountType>){
            return action.payload;
        }
    }
})

export const userAccountReducer = slice.reducer;
export const actionsUserAccount = slice.actions
