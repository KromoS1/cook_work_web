import {actionsStatusApp, statusAppReducer, StatusAppType} from "../reducers/StatusAppReducer";

let initialSate:StatusAppType

beforeEach(() => {
    initialSate = {
        isInit: false,
        message:'',
        status:'idle',
    }
})

test('correct edit isInit state statusReducer',() => {
    const init = actionsStatusApp.setIsInit({isInit:true});
    const status = actionsStatusApp.setStatusApp({message:'hello',status:'load'});

    const endState = statusAppReducer(initialSate,init);

    expect(endState.isInit).toBe(true);
})

test('correct edit status state statusReducer',() => {
    const action = actionsStatusApp.setStatusApp({message:'hello',status:'load'});

    const endState = statusAppReducer(initialSate,action);

    expect(endState.status).toBe('load');
    expect(endState.message).toBe('hello');
})
