import {UserAccountType} from "./UserAccountReducer";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GeneralDataSpeciality} from "./VacancyReducer";

export type ResumeType = UserAccountType & GeneralDataSpeciality;

const initialState: ResumeType = {
    firstName: '',
    name: '',
    numberPhone: '',
    email: '',
    dateOfBirth: '',
    city: '',
    position: '',
    experience: '',
    salary: '',
    typeOfEmployment: '',
    information: '',
}

export const setDataResume = createAsyncThunk(
    'resume/setDataResume',
    async (data: ResumeType, {dispatch}) => {
        dispatch(actionResume.setResume(data));
    }
)

const slice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setResume(state, action: PayloadAction<ResumeType>) {
            return action.payload;
        }
    },
})

export const resumeReducer = slice.reducer;
export const actionResume = slice.actions;
