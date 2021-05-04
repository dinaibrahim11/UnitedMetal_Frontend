import store from '../store';
import { usersActions } from '../users-slice';

test('login test', () => {
    let state = store.getState().users;
    const currentUser = state.currentUser;
    expect(currentUser.token).toBe(null);

    store.dispatch(usersActions.login({userId: 123, token: 'testUser123'}));
    state = store.getState().users;
    let updatedCurrentUser = state.currentUser;
    expect(updatedCurrentUser.userId).toBe(123);
    expect(updatedCurrentUser.token).toBe('testUser123');
});