import * as actionsType from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
       case actionsType.STORE_RESULT:
        return {
           ...state,
           results: state.results.concat({id: new Date(), value: action.counter})
        }
       case actionsType.DELETE_RESULT:
        return {
           ...state,
           results: state.results.filter(res => res.id !== action.resultElId)
        }
       default:
    }

    return state;
}

export default reducer;