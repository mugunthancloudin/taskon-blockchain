import React from "react";
import "./card.css";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { BsFire } from "react-icons/bs";

export default function Card() {
  return (
    <>
      <div className="container-fluid carditems">
        {/* <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="card homeCard">
              <div className="card-innerCard">
                <div className="card-frontCard text-start text-dark">
                  <h3 className="">PROJECT & DAO</h3>
                  <p className="">Grow Your Community</p>

                  <p className="fs-6 fst-italic fw-bold">
                    Task Templates Full Support for Mainstream Platform Tasks
                    Token/NFT Balance & Transactions
                    (Swap/Liquidity/Borrow/Supply/Stake)
                  </p>
                </div>
                <div className="card-backCard text-dark">
                  <h5 className="fw-boldy">Benefits</h5>
                  
                  <ul className="fs-6 fw-bold fst-italic">
                    <li className="mt-3">Brand Exposure Community Engagement</li>
                    <li >Rich Campaigns/Events Templates</li>
                    <li>Loyalty Program/NFT Mint/Token Airdrop</li>
                    <li>Large Community with High MAU/DAU</li>
                    <li>Free & Permissionless & Easy to Use</li>
                    <li>Rich User Filter Criteria & Anti-Bot</li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">&nbsp;</div>
          <div className="col-lg-6 mt-3">
            <div className="card homeCard">
              <div className="card-innerCard">
                <div className="card-frontCard text-dark text-end">
                  <h1>USER</h1>
                  <p className="mt-5">Discover & Earn</p>
                </div>
                <div className="card-backCard">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row justify-content-around">
          <div className="col-lg-5 mt-5">
            <div className="book">
              <div className="content">
                <h5 className="fw-boldy">Benefits</h5>

                <ul className="fs-6 fw-bold fst-italic">
                  <li className="mt-3">Brand Exposure Community Engagement</li>
                  <li>Rich Campaigns/Events Templates</li>
                  <li>Loyalty Program/NFT Mint/Token Airdrop</li>
                  <li>Large Community with High MAU/DAU</li>
                  <li>Free & Permissionless & Easy to Use</li>
                  <li>Rich User Filter Criteria & Anti-Bot</li>
                </ul>
              </div>
              <div className="cover">
                <div className="content">
                  <h3 className="">PROJECT & DAO</h3>
                  <p className="mt-4">Grow Your Community</p>

                  <p className="fs-6 fst-italic fw-bold">
                    Task Templates Full Support for Mainstream Platform Tasks
                    Token/NFT Balance & Transactions
                    (Swap/Liquidity/Borrow/Supply/Stake)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <div className="book1">
              <div className="content1 p-5">
                <h6>All You Need </h6>
                <div className="row  d-flex">


                  <div className="col-lg-6 ">
                    <p className="fs-6 text-nowrap">Social Media Account</p>
                    <div className="d-flex">
                      <FaDiscord size={25} />
                      <FaTwitter size={25} className="ms-4" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <p className="ms-md-5 mt--3">With Wallet</p>
                    <FaWallet size={25} className="ms-md-5 " />
                  </div>

                </div>

                <div className="row mt-4">
                  <div className="col-lg-6">
                    <p className="fs-6 text-nowrap">Earn Rewards</p>
                    <div className="d-lg-flex">
                      <button className="rewardsButton">Token</button>
                      <button className="ms-md-3 mt-3 mt-md-0 rewardsButton">NFT</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cover1">
                <div className="content1">
                  <h1 className="text-center">USER</h1>
                  <p className="mt-3 text-center">Discover & Earn</p>
                  {/* <div className="row d-flex">
                    <div className="d-flex">
                      Create Campign{" "}
                      <div className="box ms-3">
                        <span className="arrowDiv"> &#x2197; </span>
                      </div>
                    </div>

                    <div className="d-flex">
                    Explore Campign{" "}
                      <div className="box ms-3">
                        <span className="arrowDiv"> &#x2197; </span>
                      </div>
                    </div>


                  
                  </div> */}
                  <div className="row mt-4">
               
                    <p className="d-flex"><BsFire size={25} className="me-2" /> Treanding Events</p>
                    <p className="d-flex"><MdEmojiEvents size={25} className="me-2" /> Hot Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
