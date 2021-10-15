import {actionsStatusApp, statusAppReducer, StatusAppType} from "../reducers/StatusAppReducer";

let initialSate:StatusAppType

beforeEach(() => {
    initialSate = {
        isInit: false,
        message:'',
        statusApp:'idle',
        statusGeneral:false,
        statusItem:false,
        isAuth:false,
        typeAccount:'',
    }
})

test('correct edit init statusReducer',() => {
    const init = actionsStatusApp.setIsInit({isInit:true});
    const endState = statusAppReducer(initialSate,init);
    expect(endState.isInit).toBe(true);
})

test('correct edit message statusReducer', () => {
    const message = actionsStatusApp.setMessage({message:'error'});
    const endState = statusAppReducer(initialSate,message);
    expect(endState.message).toBe('error');
})

test('correct edit statusApp statusReducer', () => {
    const statusApp = actionsStatusApp.setStatusApp({statusApp:'load'});
    const endState = statusAppReducer(initialSate,statusApp);
    expect(endState.statusApp).toBe('load');
})

test('correct edit statusGeneral statusReducer', () => {
    const statusGeneral = actionsStatusApp.setStatusGeneral({statusGeneral:true});
    const endState = statusAppReducer(initialSate,statusGeneral);
    expect(endState.statusGeneral).toBe(true);
})

test('correct edit statusItem statusReducer', () => {
    const statusItem = actionsStatusApp.setStatusItem({statusItem:true});
    const endState = statusAppReducer(initialSate,statusItem);
    expect(endState.statusItem).toBe(true);
})

test('correct edit isAuth statusReducer', () => {
    const isAuth = actionsStatusApp.setIsAuth({isAuth:true});
    const endState = statusAppReducer(initialSate,isAuth);
    expect(endState.isAuth).toBe(true);
})

test('correct edit type account statusReducer', () => {
    const type = actionsStatusApp.setTypeAccount({typeAccount:'company'});
    const endState = statusAppReducer(initialSate,type);
    expect(endState.typeAccount).toBe('company');
})
