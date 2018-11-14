import {
  ActionTypes,
  IChangeFilterByStatusAction,
  ISortByAction,
  SortByType
} from './types';

export const changeFilterByStatus = (statusId: string) => ({
  type: ActionTypes.CHANGE_FILTER_BY_STATUS,
  payload: { statusId }
});

export const sortBy = (sortBy: SortByType) => ({
  type: ActionTypes.SORT_BY,
  payload: { sortBy }
});

export type Actions = IChangeFilterByStatusAction | ISortByAction;
