import DashboardSidebar from "../Dashboard/DashboardSidebar";
import Navbar from "../navbar/navbar";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import React, { Component } from 'react'
import toast from "react-hot-toast";

export default class PaginationUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 9,
            currentPage: 0,
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user',
                {
                    headers: {
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k`,
                    },
                }
            )
            .then(res => {
                const data = res.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(item => <React.Fragment>
                    <div className='w-[346px] h-[378px] bg-gray-200 rounded-xl border border-black my-4 mx-4' >
                        <div className="h-full flex flex-col gap-10 items-center justify-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-gray-300">
                                <img className="w-[120px] h-[120px] rounded-full" src={item.profilePictureUrl} alt="" />
                            </div>
                            <div>{item.name}</div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <MdEmail size={20}></MdEmail>
                                    <div>Email</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt size={20}></FaPhoneAlt>
                                    <div>Phone Number</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                <div className="flex flex-wrap">
                    {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>

        )
    }
}



