import {actionsUserAccount, userAccountReducer, UserAccountType} from "../reducers/UserAccountReducer";

let initialSate: UserAccountType

beforeEach(() => {
    initialSate = {
        firstName: '',
        name: '',
        dateOfBirth: '',
        city: '',
        numberPhone: '',
        email: '',
    }
})

test('correct set data user', () => {
    const data = actionsUserAccount.setMyData(
        {
            firstName: 'Шавлинский',
            name: 'Роман',
            city: 'Минск',
            dateOfBirth: '18.02.1996',
            email: 'KrakenHRI@mail.ru',
            numberPhone: '297485875'
        })

    const endState = userAccountReducer(initialSate, data);
    expect(endState).toBe(data.payload)
})

