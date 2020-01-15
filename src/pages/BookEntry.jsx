import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BookEntryDetail from "components/BookEntryDetail/Index";
import { addBookEntry, updateBookEntry } from "store/actions/book/book.action";
import { uuidv4 } from "utils/book.util";
import styles from "assets/stylesheets/BookEntry.module.scss";

const BookEntry = props => {
  const { bookId } = useParams();
  const history = useHistory();
  const mode = bookId ? "EDIT" : "CREATE";

  const addBookEntry = bookInfo => {
    props.addBookEntry({ ...bookInfo, id: uuidv4() });
    alert("book is added in library");
  };

  const updateBookEntry = bookInfo => {
    props.updateBookEntry({ ...bookInfo });
    history.goBack();
  };

  const saveBookEntry = bookInfo => {
    if (mode === "CREATE") {
      addBookEntry(bookInfo);
      return;
    }
    updateBookEntry(bookInfo);
  };

  const getBookByBookId = () => {
    if (mode === "EDIT") {
      return props.books.find(book => book.id === bookId);
    }
    return null;
  };

  return (
    <div className="container">
      <div className={styles.bookEntryContainer}>
        <h3>Book Entry {mode === "EDIT" ? "Update" : null}</h3>
        <BookEntryDetail
          mode={mode}
          onSave={saveBookEntry}
          bookInfo={getBookByBookId()}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ book }) => {
  return {
    books: book.list
  };
};

const mapDispatchToProps = {
  addBookEntry,
  updateBookEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(BookEntry);
