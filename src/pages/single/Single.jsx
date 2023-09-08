import React from "react";
import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const New = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="data:image/jpeg;base64,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"
                className="itemImg"
                alt="item"
              />
              <div className="details">
                <h1 className="itemtitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">janedoe@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">012345678</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">Park Avenue, London</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default New;
