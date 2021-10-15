import {actionsMyAccount, myAccountReducer, MyAccountType} from "../reducers/MyAccountReducer";


let initialSate: MyAccountType

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
    const data = actionsMyAccount.setMyData(
        {
            firstName: 'Шавлинский',
            name: 'Роман',
            city: 'Минск',
            dateOfBirth: '18.02.1996',
            email: 'KrakenHRI@mail.ru',
            numberPhone: '297485875'
        })

    const endState = myAccountReducer(initialSate, data);
    expect(endState).toBe(data.payload)
})

