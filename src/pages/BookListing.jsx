import React, { Fragment } from "react";
import { connect } from "react-redux";

import { deleteBookEntry } from "store/actions/book/book.action";
import BookList from "components/BookList/Index";

const BookListing = props => {
  return (
    <Fragment>
      {props.books.length === 0 ? (
        <h3 className="txt-center">No Book in the library.</h3>
      ) : (
        <BookList books={props.books} deleteBookEntry={props.deleteBookEntry} />
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ book }) => {
  return {
    books: book.list
  };
};

const mapDispatchToProps = {
  deleteBookEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);
