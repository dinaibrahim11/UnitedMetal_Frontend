/*
  NOTE: This function is adapted from the author Maximillian Schwarzmuller 
        from his course on udemy "React the complete guide"
*/

import { useReducer, useCallback } from 'react';

const httpReducer = (state, action) => {
    if (action.type === 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending'
        };
    }
    if (action.type === 'SUCCESS') {
        return {
            data: action.responseData,
            error: null,
            status: 'completed'
        };
    }
    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.ErrorMessage,
            status: 'completed'
        };
    }

    return state;
}


const useHttp = (requestFunction, startWithPending = false) => {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null
    });

    const sendRequest = useCallback(
        async function (requestData) {
          dispatch({ type: 'SEND' });
          try {
            const responseData = await requestFunction(requestData);
            dispatch({ type: 'SUCCESS', responseData });
          } catch (error) {
            dispatch({
              type: 'ERROR',
              errorMessage: error.message || 'Something went wrong!',
            });
          }
        },
        [requestFunction]
      );
    
      return {
        sendRequest,
        ...httpState,
      };


}

export default useHttp;