import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BookEntry from "pages/BookEntry";
import BookListing from "pages/BookListing";
import SearchBook from "pages/SearchBook";
import Header from "components/Header/Index";
import store from "store";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={BookEntry} />
          <Route path="/books" exact component={BookListing} />
          <Route path="/book/edit/:bookId" exact component={BookEntry} />
          <Route path="/search" exact component={SearchBook} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
