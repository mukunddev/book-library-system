import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Book.module.scss";

export default function Book(props) {
  const { name, author, description, id, count } = props.book;
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookInnerContainer}>
        <div className={styles.bookInfo}>
          <div className={styles.bookName}>
            <div>{name}</div>
            <div className={styles.bookCount}>{count}</div>
          </div>
          <div className={styles.author}>{author}</div>
          <div className={styles.desc}>{description}</div>
        </div>
        <div className={styles.actionContainer}>
          <div
            className={styles.delete}
            onClick={() => props.deleteBookEntry(id)}
          >
            Delete
          </div>
          <div>
            <Link to={`/book/edit/${id}`}>Edit</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  deleteBookEntry: PropTypes.func.isRequired
};
