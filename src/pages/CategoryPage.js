import React, { Component } from 'react';

import Header from      '../components/Header';
import Categories from  '../components/Categories';
import Footer from      '../components/Footer';

export default class CategoryPage extends Component {

  componentDidMount() {
    const categoryName = this.props.params.category;
    this.setState({ category: categoryName });
  }

  render() {
    return (
      <div>
        <Header />
        <Category />
        <div>this is the category page</div>
        <Footer />
      </div>
    );
  }
}
