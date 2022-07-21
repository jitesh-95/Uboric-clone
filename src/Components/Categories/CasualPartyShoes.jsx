import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {getDataRequest,getDataSuccess,getDataFailure} from "../../Redux/AppReducer/action"
import { useSelector,useDispatch } from "react-redux";
const CasualPartyShoes = () => { 

  const dispatch = useDispatch();
  const data = useSelector(store=>store.AppReducer.products);


  const dataaction = () => {
    const request = dispatch(getDataRequest());
    axios
    .get('http://localhost:8080/Categories')
    .then(r=>dispatch(getDataSuccess(r.data)))
    .catch(e=>dispatch(getDataFailure()));
  };

  useEffect(() => {
    dataaction();
  }, []);


  return (
    <div>
      <div>
        <h1
          style={{
            fontWeight: "500",
            margin: "20px",
            color: "teal",
            fontSize: "25px",
            fontFamily: "sans-serif",
          }}
        >
          Casual/Party Shoes
        </h1>
        <Box mb="6">
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
          >
            Home
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
          >
            Products
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "12px" }}>
            Casual/Party Shoes
          </span>
        </Box>
      </div>
      <div id="base">
        <div id="grid">
          {data.map((item) =>{
            if(item.type === "casualShoe"){
              return(
                <Contains key={item.id} data={item} />
              )
            } 
            })}
        </div>
        <div id="filter" style={{ textAlign: "left", padding: "15px" }}>
          <label style={{ marginTop: "15px", fontWeight: "bold" }}>
            By Clouser
          </label>
          <br />
          <input  type="checkbox"/> SLIP ON (9)
        </div>
      </div>
    </div>
  );
};

export default CasualPartyShoes;
