import {
  ActionTypes,
  IGetInitialDataBeginAction,
  IGetInitialDataSuccessAction,
  IGetInitialDataFailureAction,
  IInitialApiData,
  IChangeFilterAction,
  IFilter
} from './types';
import { fetchApiData } from '../../helpers/mockApi';
import { Dispatch } from 'redux';

// thunk action creator
export const fetchInitialData = () => {
  return (dispatch: Dispatch) => {
    dispatch(getInitialDataBegin());
    //  (dispatch: Dispatch) => {
    fetchApiData()
      .then(res => {
        dispatch(getInitialDataSuccess(res));
      })
      .catch(err => dispatch(getInitialDataError(err)));
    // };
  };
};

export const getInitialDataBegin = () => ({
  type: ActionTypes.GET_INITIAL_DATA_BEGIN
});

export const getInitialDataSuccess = (initialData: IInitialApiData) => ({
  type: ActionTypes.GET_INITIAL_DATA_SUCCESS,
  payload: { initialData }
});

export const getInitialDataError = (error: any) => ({
  type: ActionTypes.GET_INITIAL_DATA_FAILURE,
  payload: { error }
});

export const changeFilter = (filter: IFilter) => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: { filter }
});

export type Actions =
  | IGetInitialDataBeginAction
  | IGetInitialDataSuccessAction
  | IGetInitialDataFailureAction
  | IChangeFilterAction;
