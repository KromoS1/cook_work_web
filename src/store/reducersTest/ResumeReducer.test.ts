import {actionResume, resumeReducer, ResumeType} from "../reducers/ResumeReducer";

let initialState: ResumeType

beforeEach(() => {
    initialState = {
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
})

test('correct set data resume', () => {
    const data = actionResume.setResume({
        firstName: 'Шавлинский',
        name: 'Роман',
        numberPhone: '29',
        email: 'kraken',
        dateOfBirth: '',
        city: 'Минск',
        position: 'Повар',
        experience: '',
        salary: '100',
        typeOfEmployment: '',
        information: '',
    })

    const endState = resumeReducer(initialState, data);
    expect(endState).toBe(data.payload);
})
