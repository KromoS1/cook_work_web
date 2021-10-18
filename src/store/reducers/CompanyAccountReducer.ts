import {GeneralDataAccountType} from "./UserAccountReducer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CompanyAccountType = GeneralDataAccountType & {
    nameCompany:string
}

const initialState:CompanyAccountType = {
    nameCompany:'',
    email:'',
    city:'',
    numberPhone:'',
}

export const setDataCompany = createAsyncThunk(
    'company/setDataCompany',
    async (data:CompanyAccountType,{dispatch}) => {
        dispatch(actionCompany.setDataCompany(data));
    }
)

const slice = createSlice({
    name:'company',
    initialState,
    reducers:{
        setDataCompany(state,action:PayloadAction<CompanyAccountType>){
            return action.payload;
        }
    }
})

export const companyAccountReducer = slice.reducer;
export const actionCompany = slice.actions;
