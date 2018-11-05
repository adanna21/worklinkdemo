import { Actions } from './actions';
import { ActionTypes, IInitialDataProps } from './types';

export const initialState: IInitialDataProps = {
  workOrders: [],
  employees: [],
  loading: false,
  error: null
};

export const reducer = (
  state: IInitialDataProps = initialState,
  action: Actions
) => {
  const BEGIN = ActionTypes.GET_INITIAL_DATA_BEGIN;
  const SUCCESS = ActionTypes.GET_INITIAL_DATA_SUCCESS;
  const FAILURE = ActionTypes.GET_INITIAL_DATA_FAILURE;
  switch (action.type) {
    case BEGIN:
      return {
        ...state,
        loading: true
      };
    case SUCCESS:
      return {
        ...state,
        workOrders: action.payload.initialData.workOrders,
        employees: action.payload.initialData.employees,
        loading: false
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};
