import * as actionsType from './actions';

const initialState = {
    counter : 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
       case actionsType.INCREMENT:
        const newState = Object.assign({}, state)
        newState.counter = state.counter + 1
        return newState;
       case actionsType.DECREMENT:
        return {
            ...state,
            counter: state.counter - 1
        };
       case actionsType.ADD:
        return {
            ...state,
            counter: state.counter + action.value
        }
       case actionsType.SUBTRACT:
        return {
            ...state,
            counter: state.counter - action.value
        }
       case actionsType.STORE_RESULT:
        return {
           ...state,
           results: state.results.concat({id: new Date(), value: state.counter})
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