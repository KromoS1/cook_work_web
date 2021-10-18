import {actionVacancy, vacancyReducer, VacancyType} from "../reducers/VacancyReducer";

let initialState: VacancyType

beforeEach(() => {
    initialState = {
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
})

test('correct set data vacancy', () => {
    const data = actionVacancy.setVacancy({
        nameCompany:'Tree',
        numberPhone: '',
        email: '',
        city: 'minsk',
        position: '',
        experience: '',
        salary: '100',
        typeOfEmployment: '',
        information: 'hello',
    })

    const endState = vacancyReducer(initialState, data);
    expect(endState).toBe(data.payload);
})
