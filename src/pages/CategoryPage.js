import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CategoryPage extends Component {

  componentDidMount() {
    const categoryName = this.props.params.category;
    this.setState({ category: categoryName });
  }

  render() {
    return (
      <div>
        this is the category page
      </div>
    );
  }
}
