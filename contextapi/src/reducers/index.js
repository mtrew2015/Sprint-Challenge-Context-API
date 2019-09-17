export const initialState = {
	smurfs: [],
	loading: false,
	error: '',
	fetching: false,
};

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'FETCH START':
			return {
				...state,
				loading: true,
				error: '',
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                smurfs: payload,
                loading: false
            }
		default:
			return state;
	}
};
