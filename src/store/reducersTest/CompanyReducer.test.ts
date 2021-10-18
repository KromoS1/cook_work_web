import {actionCompany, companyAccountReducer, CompanyAccountType} from "../reducers/CompanyAccountReducer";

let initialState: CompanyAccountType;

beforeEach(() => {
    initialState = {
        nameCompany:'',
        email:'',
        city:'',
        numberPhone:'',
    }
})

test('correct set data company', () => {
    const action = actionCompany.setDataCompany({
        nameCompany:'Tree',
        email:'krash@mail.ru',
        city:'',
        numberPhone:'',
    })
    const endState = companyAccountReducer(initialState,action);
    expect(endState).toBe(action.payload);
})
