import { combineReducers } from 'redux';
import UserReducer from './userReducer'

const reducers = () =>
	combineReducers({
		account: UserReducer,
	});

export default reducers;