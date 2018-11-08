import {
  ActionTypes,
  IChangeFilterByStatusAction,
  ISortByAction
} from './types';

export const changeFilterByStatus = (statusId: string) => ({
  type: ActionTypes.CHANGE_FILTER_BY_STATUS,
  payload: { statusId }
});

export const sortBy = (sort: string) => ({
  type: ActionTypes.SORT_BY,
  payload: { sort }
});

export type Actions = IChangeFilterByStatusAction | ISortByAction;
