import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CompanyAccountType} from "./CompanyAccountReducer";

export interface GeneralDataSpeciality{
    position: string
    experience: string
    salary: string
    typeOfEmployment: string
    information: string
}

export const options = [
    {name:'Полная занятость'},
    {name:'Частичная занятость'},
]

export type VacancyType = CompanyAccountType & GeneralDataSpeciality

const initialState: VacancyType = {
    nameCompany:'',
    numberPhone: '',
    email: '',
    city: '',
    position: '',
    experience: '',
    salary: '',
    typeOfEmployment: '',
    information: '',
}

export const setDataVacancy = createAsyncThunk(
    'vacancy/setDataVacancy',
    async (data:VacancyType,{dispatch}) => {
        dispatch(actionVacancy.setVacancy(data));
    }
)

const slice = createSlice({
    name:'vacancy',
    initialState,
    reducers:{
        setVacancy(state,action:PayloadAction<VacancyType>){
            return action.payload
        }
    }
})

export const vacancyReducer = slice.reducer;
export const actionVacancy = slice.actions;
