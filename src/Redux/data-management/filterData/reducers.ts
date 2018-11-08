import { Actions } from './actions';
import { ActionTypes, IFilterByStatusProps } from './types';

export const initialState: IFilterByStatusProps = {
  filters: [
    { id: 'completed', inuse: false },
    { id: 'unassigned', inuse: false },
    { id: 'on hold', inuse: false },
    { id: 'assigned', inuse: false }
  ],
  sortBy: null
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
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    default:
      return state;
  }
};
