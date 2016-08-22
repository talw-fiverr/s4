require('../style/categoryPage.scss');

import React, { Component } from 'react';

import Header from        '../components/Header';
import Categories from    '../components/Categories';
import Footer from        '../components/Footer';
import SearchForm from    '../components/SearchForm';

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      selectedGroup: null,
      currentUser: null
    };
  }

  componentDidMount() {
    const categoryName = this.props.params.category;
    this.setState({ category: categoryName });
  }

  render() {
    return (
      <div className="app-category">
        <Header currentUser={this.state.currentUser}/>
        <Categories />
        {/*src="http://c8.staticflickr.com/6/5301/5618865271_3f0ba316ff_n.jpg"*/}
        <i className="category-img judo-category" ></i>
        <SearchForm />
        <div>this is the category page</div>
        <Footer />
      </div>
    );
  }
}
