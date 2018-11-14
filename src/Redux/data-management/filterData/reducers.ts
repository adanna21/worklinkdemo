import { Actions } from './actions';
import { ActionTypes, IFilterByStatusProps } from './types';

export const initialState: IFilterByStatusProps = {
  filters: [
    { id: 'completed', inuse: false },
    { id: 'unassigned', inuse: false },
    { id: 'on hold', inuse: false },
    { id: 'assigned', inuse: false }
  ],
  sortBy: null,
  sorting: false
  // filteredWorkOrders: []
};

export const reducer = (
  state: IFilterByStatusProps = initialState,
  action: Actions
) => {
  const FILTER = ActionTypes.CHANGE_FILTER_BY_STATUS;
  const SORT = ActionTypes.SORT_BY;
  switch (action.type) {
    case FILTER:
      const status = action.payload.statusId.toString();
      const newFilters = state.filters.map(item => {
        if (item.id.toString() === status) item.inuse = !item.inuse;
        return item;
      });
      return {
        ...state,
        filters: newFilters
      };
    case SORT:
      const sortBy = action.payload.sortBy;
      let sorting;
      if (sortBy === 'asc_date') {
        sorting = !state.sorting;
        console.log('sorting', sorting);
      } else if (sortBy === 'desc_date') {
        sorting = !state.sorting;
      }
      return {
        ...state,
        sortBy: sortBy,
        sorting: sorting
      };
    default:
      return state;
  }
};
