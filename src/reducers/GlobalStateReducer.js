// Nico Vermaas - 28 oct 2019
// This is the reducer for the global state providor.

// possible actions
export const SET_STATUS = 'SET_STATUS'
export const SET_FETCHED_DATA = 'SET_FETCHED_DATA'
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA'

export const initialState = {
        status: "unfetched",
        fetched_data: undefined,
        filtered_data: undefined,
}

export const reducer = (state, action) => {
    switch (action.type) {

        case SET_STATUS:
            //alert('reducer: SET_STATUS '+action.status)
            return {
                ...state,
                status: action.status
            };

        case SET_FETCHED_DATA:
            //alert('reducer: SET_FETCHED_DATA '+action.fetched_data)
            return {
                ...state,
                fetched_data: action.fetched_data
            };

        case SET_FILTERED_DATA:
            //alert('reducer: SET_FILTERED_DATA '+action.filtered_data)
            return {
                ...state,
                filtered_data: action.filtered_data
            };

        default:
            return state;
    }
};