import { CLEAN_REDUCER, LOG_OUT, LOG_IN} from '../constants/actionTypes';

const initState = {
    userActive: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				userActive: action.userActive,
			};
		case CLEAN_REDUCER:
		case LOG_OUT:
			return initState;
		default:
			return state;
	}
};

export default reducer;