import React, { Component } from "react";
import danhSachSanPham from "../../data/courses.json";
import "./MatKinhList.css";
import MatKinhItem from "../MatKinhItem/MatKinhItem";

export default class MatKinhList extends Component {
  state = {
    sanPhamChiTiet: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  handleChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamChiTiet: sanPhamChiTiet,
    });
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <li className="glasses__item" key={index}>
          <MatKinhItem product={sanPham} hienThiChiTiet={this.handleChiTiet} />
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="app__title">
          <h2>try glasses app online</h2>
        </div>

        <div className="chiTiet__content">
          <div className="chiTiet__content--left">
            <img
              src="./glassesImage/model.jpg"
              width={300}
              height={300}
              alt="model"
            />
            <div className="glasses__info">
              <img
                src={this.state.sanPhamChiTiet.url}
                width={150}
                height={60}
                alt="model"
              />
            </div>
            <div className="glasses__info--detail">
              <p className="glasses__title">{this.state.sanPhamChiTiet.name}</p>
              <p className="glasses_desc">{this.state.sanPhamChiTiet.desc}</p>
              <p className="glasses__price">
                {this.state.sanPhamChiTiet.price}
                <span>$</span>
              </p>
            </div>
          </div>
          <div className="chiTiet__content--right">
            <img
              src="./glassesImage/model.jpg"
              width={300}
              height={300}
              alt="another model here"
            />
          </div>
        </div>

        <ul className="glasses__content">{this.renderDanhSachSanPham()}</ul>
      </div>
    );
  }
}
