import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Input from "components/Input/Input.jsx";
import TextArea from "components/Input/TextArea.jsx";

import { addBookEntry } from "store/actions/book/book.action";
import styles from "assets/stylesheets/BookEntry.module.scss";

function BookInfo() {
  this.name = "";
  this.description = "";
  this.author = "";
  this.count = "";
}

const BookEntry = props => {
  const [bookInfo, setBookInfo] = useState(new BookInfo());

  useEffect(() => {
    if (props.bookInfo) {
      setBookInfo(props.bookInfo);
    }
  }, []);

  const saveBookEntry = ev => {
    ev.preventDefault();
    props.onSave(bookInfo);
    setBookInfo(new BookInfo());
  };

  const onInputChange = e => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form name="bookEntry" onSubmit={saveBookEntry}>
      <Input
        inputType="text"
        label="Book Name"
        name="name"
        onInputChange={onInputChange}
        value={bookInfo.name}
        placeholder="Book Name"
        isRequired={true}
      />
      <TextArea
        inputType="text"
        label="Description"
        name="description"
        onInputChange={onInputChange}
        value={bookInfo.description}
        placeholder="Description"
        isRequired={true}
      />
      <Input
        inputType="text"
        label="Author"
        name="author"
        onInputChange={onInputChange}
        value={bookInfo.author}
        placeholder="Author"
        isRequired={true}
      />
      <Input
        inputType="number"
        label="Book Count"
        name="count"
        onInputChange={onInputChange}
        value={bookInfo.count}
        placeholder="Book Count"
        isRequired={true}
      />
      <button type="submit" className={styles.entryBtn}>
        {props.mode === "CREATE" ? "Add Book" : "Save"}
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addBookEntry
};

export default connect(null, mapDispatchToProps)(BookEntry);

BookEntry.propTypes = {
  bookInfo: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};
