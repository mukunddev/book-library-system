import {
  ADD_BOOK_ENTRY,
  DELETE_BOOK_ENTRY,
  UPDATE_BOOK_ENTRY
} from "store/actions/book/book.actiontype";

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case ADD_BOOK_ENTRY:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case UPDATE_BOOK_ENTRY:
      const updatedBooks = state.list.map(book => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
      return {
        ...state,
        list: updatedBooks
      };

    case DELETE_BOOK_ENTRY:
      const repos = [...state.list];
      const updatesRepos = repos.filter(repo => repo.id !== action.payload);
      return {
        ...state,
        list: updatesRepos
      };

    default:
      return state;
  }
}
