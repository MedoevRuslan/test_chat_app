import { SetIsFetchingActionType, SET_IS_FETCHING } from './../reducers/contactsReducer';

export const setIsFetching = (state: boolean): SetIsFetchingActionType => ({
    type: SET_IS_FETCHING,
    payload: state
})