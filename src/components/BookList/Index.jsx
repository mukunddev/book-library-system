import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

import styles from "./BookList.module.scss";

export default function BookList(props) {
  const renderBookList = () => {
    return props.books.map(book => (
      <Book book={book} key={book.id} deleteBookEntry={props.deleteBookEntry} />
    ));
  };
  return <div className={styles.bookList}>{renderBookList()}</div>;
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  deleteBookEntry: PropTypes.func.isRequired
};
