import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import Input from "components/Input/Input";
import BookList from "components/BookList/Index";
import { deleteBookEntry } from "store/actions/book/book.action";

import styles from "assets/stylesheets/SearchBook.module.scss";

function SearchBook(props) {
  const [query, setQuery] = useState("");

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  const searchBookByNameAndAuthor = () => {
    const ciQuery = query.toLowerCase();
    const books = props.books.filter(
      book =>
        book.name.toLowerCase().includes(ciQuery) ||
        book.author.toLowerCase().includes(ciQuery)
    );
    return books;
  };

  return (
    <Fragment>
      <div className={styles.searchContainer}>
        <Input
          inputType="text"
          name="query"
          onInputChange={onInputChange}
          value={query}
          placeholder="Search Book (name and author)"
        />
      </div>
      <div className={styles.searchResultContainer}>
        <BookList
          books={searchBookByNameAndAuthor()}
          deleteBookEntry={props.deleteBookEntry}
        />
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ book }) => {
  return {
    books: book.list
  };
};

const mapDispatchToProps = {
  deleteBookEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook);
