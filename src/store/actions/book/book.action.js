import {
  ADD_BOOK_ENTRY,
  DELETE_BOOK_ENTRY,
  UPDATE_BOOK_ENTRY
} from "./book.actiontype";

export const addBookEntry = bookInfo => {
  return { type: ADD_BOOK_ENTRY, payload: bookInfo };
};

export const updateBookEntry = bookInfo => {
  return { type: UPDATE_BOOK_ENTRY, payload: bookInfo };
};

export const deleteBookEntry = bookId => {
  return { type: DELETE_BOOK_ENTRY, payload: bookId };
};
