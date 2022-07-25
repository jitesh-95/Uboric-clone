import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaCartPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

//import { VscTriangleDown } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { getCartData } from "../Redux/AppReducer/action";
import { getLocalData } from "../Utils/localStorage";

const Navbar = () => {
  const cart = useSelector((store) => store.AppReducer.cart);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  let token = getLocalData("token");

  const totalCount = cart
    ?.map((item) => item.count)
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  return (
    <div className="navbar">
      <div className="first_row">
        FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500
      </div>
      <div className="second_row">
        <div className="search_box">
          <div className="box">
            <input
              type="search"
              className="orig"
              placeholder="Search here..."
              autoComplete="off"
            ></input>

            <AiOutlineSearch size="2rem" />
          </div>
        </div>
        <div className="second_box_main">
          <div className="imageDiv">
            <img
              className="logo_image"
              src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg"
              alt="logo_img"
            />
          </div>
          <div className="iconsDiv">
            <div className="second">
              <RouterLink to={isAuth === false ? "/login" : "/myaccount"}>
                <MdAccountCircle size="35px" />
              </RouterLink>
            </div>
            <div className="third">
              <RouterLink to="/cart">
                <FaCartPlus size="35px" />
              </RouterLink>
            </div>

            <div className="CartCount">
              <p>({totalCount})</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar">
        <RouterLink className="bar1" to="/">
          Home
        </RouterLink>
        <div className="bar1">
          <div className="drop_down">
            Categories
            <div className="drop_down_content">
              <div className="content">
                <h3 className="tag1">
                  Fashion <ChevronRightIcon />
                  <div className="drop_down_content1">
                    <div className="content1">
                      <div className="sub_content">
                        <div>
                          <b>
                            <RouterLink to="/product-category/footwear">
                              <p className="wear1">Foot Wear</p>
                            </RouterLink>
                          </b>
                          <b>
                            <RouterLink to="/product-category/Mensfootwear">
                              <p className="wear1">Men's footwear</p>
                            </RouterLink>
                          </b>

                          <RouterLink to="/product-category/casualslippers">
                            <p className="wear1">Casual Chapple/Slippers</p>
                          </RouterLink>

                          <RouterLink to="/product-category/casual-sandals">
                            <p className="wear1">Casual Sandals</p>
                          </RouterLink>
                          <RouterLink to="/product-category/casual-partyshoes">
                            <p className="wear1">Casual/Party Shoes</p>
                          </RouterLink>
                          <RouterLink to="/product-category/chappal-slippers">
                            <p className="wear1">Chappal/Slippers</p>
                          </RouterLink>
                          <RouterLink to="/product-category/FlipFlops">
                            <p className="wear1">FlipFlops</p>
                          </RouterLink>
                          <p className="wear1">Crocs</p>
                          <p className="wear1">Loafers</p>
                          <p className="wear1">Mojdi</p>
                          <p className="wear1">Sneakers</p>
                          <p className="wear1">Sports Sandals</p>
                          <p className="wear1">Sports Shoes</p>
                        </div>
                        <div>
                          <p className="wear">Socks</p>
                        </div>
                        <div>
                          <p className="wear">Product Clouser</p>
                          <p className="wear1">Lace Up</p>
                          <p className="wear1">Slip On</p>
                        </div>
                        <div>
                          <p className="wear">Clothing</p>
                          <p className="wear1">Men's Clothing</p>
                          <p className="wear1">Woman's Clothing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                <h3 className="tag1">
                  Kitchen <ChevronRightIcon />
                  <div className="drop_down_content1">
                    <div className="content1">
                      <div className="sub_content">
                        <div>
                          <b>
                            <RouterLink to="/product-category/Kitchenware">
                              <p className="wear1">Kitchen Ware</p>
                            </RouterLink>
                          </b>
                          <RouterLink to="/product-category/airTight">
                            <p className="wear1">Air Tight Containers</p>
                          </RouterLink>
                          <RouterLink to="/product-category/Kitchenware-GasLighter">
                            <p className="wear1">Gas Lighters</p>
                          </RouterLink>
                          <RouterLink to="/product-category/Kitchenware-Tools">
                            <p className="wear1">Kitchen Tools</p>
                          </RouterLink>
                        </div>
                        <div>
                          <p className="wear">Household Supplies</p>
                        </div>
                        <div>
                          <p className="wear">Grocery</p>
                        </div>
                        <div>
                          <p className="wear">Spices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                <h3 className="tag1">
                  Accessories <ChevronRightIcon />
                  <div className="drop_down_content1">
                    <div className="content1">
                      <div className="sub_content">
                        <div>
                          <p className="wear">Unisex Bracelets</p>
                        </div>
                        <div>
                          <p className="wear">jewellery</p>
                        </div>
                        <div>
                          <p className="wear">Grocery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                <h3 className="tag1">
                  Health & Personal Care <ChevronRightIcon />
                  <div className="drop_down_content1">
                    <div className="content1">
                      <div className="sub_content">
                        <div>
                          <p className="wear">Health Care</p>
                          <p>Day Joy</p>
                          <p>Face Mask</p>
                          <p>GNFC</p>
                          <p>Oxi9</p>
                          <p>Shreeji Sanjivani Gurukul</p>
                        </div>
                        <div>
                          <p className="wear">Personal care</p>
                          <p>Bombay Shaving Company</p>
                          <p>Day Joy</p>
                          <p>Dr Batras</p>
                          <p>DYNA</p>
                          <p>GNFC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                <h3 className="tag1">
                  Electronics <ChevronRightIcon />
                </h3>
                <h3 className="tag1">
                  Electric Appliances <ChevronRightIcon />
                  <div className="drop_down_content1">
                    <div className="content1">
                      <div className="sub_content">
                        <div>
                          <p className="wear">Accessories</p>
                          <p className="wear">Speakers</p>
                        </div>
                        <div>
                          <p className="wear">Philips</p>
                        </div>
                        <div>
                          <p className="wear">Earphone</p>
                          <p className="wear">Headphones</p>
                        </div>
                        <div>
                          <p className="wear">Electronics</p>
                        </div>
                        <div>
                          <p className="wear">Powerbank</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                <h3 className="tag1">
                  Paintings <ChevronRightIcon />
                </h3>
                <h3 className="tag2">
                  Anti Puncture Liquid <ChevronRightIcon />
                </h3>
              </div>
            </div>
          </div>
        </div>
        <RouterLink
          className="bar1"
          to={token === false ? "/login" : "/myaccount"}
        >
          Customer/Guest login
        </RouterLink>
        <p className="bar1">Merchant/Bulk Order</p>
        <RouterLink className="bar1" to="/BestSeller">
          Become A Seller
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
