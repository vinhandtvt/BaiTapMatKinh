import React, { Component } from "react";
import "./MatKinhItem.css";

export default class MatKinhItem extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.hienThiChiTiet(currentProduct);
  };
  render() {
    return (
      <a>
        <img
          onClick={this.handleDetail}
          src={this.props.product.url}
          width={100}
          height={50}
          alt="glasses model"
        />
      </a>
    );
  }
}
