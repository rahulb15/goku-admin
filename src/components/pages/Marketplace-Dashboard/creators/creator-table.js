import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import { BsThreeDots } from "react-icons/bs";
import { MdContentCopy, MdBlock, MdDeleteOutline } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai"
import Axios from 'axios'
import dateFormat, { masks } from "dateformat";
//import {useSelector,useDispatch} from "react-redux"
//import { fetchAllCreators } from '../../../../redux/get-creators/getcreators.action';

const IdoTable = (props) => {

    const deleteCreators = (_id) => {
        const accessJWT = localStorage.getItem('accessAdminJWT');
        Axios.post("/creator/deleteCreator", { _id: _id }, {
            headers: {
                Authorization: accessJWT,
            },
        })
            .then((response) => {
                if (response.data.status == "success") {
                    console.log("colec", response)
                    // setCollection(response.data.data)
                    // setCreator(response.data.creator)
                    // setWalletAddress(response.data.creator.walletAddress.slice(0,9))
                }
                console.log("responasa", response)

            }).catch((error) => {
                console.log("error2", error)
            }
            )

    }

    return (
        <Table borderless>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Owned</th>
                    <th>On Sale</th>
                    <th>Created</th>
                    <th>Collections</th>
                    <th>Merchandise</th>
                    <th>Last Login</th>
                    <th>Account Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props?.creators.map((data) => {
                    console.log("dataaaaaaaaaaaaaaaaaaaaaaa", data)
                    return (
                        <tr key={data._id}>
                            <td>
                                <span>{data.name}</span>

                                <small>{data.walletAddress.slice(0, 8)}... <MdContentCopy /> </small>
                            </td>
                            <td>
                                <span>{data.email}</span>
                                <small className='greenClr'>Verified</small>
                            </td>
                            <td>
                                <span>{data.owner_info ? data.owner_info.length : "--"}</span>
                            </td>
                            <td>
                                <span>{data.nft_info.filter((data) => data.onMarketplace == true).length}</span>
                            </td>
                            <td>
                                <span>{data.nft_info.length}</span>
                            </td>
                            <td>
                                <span>{data.collection_info.length}</span>
                            </td>
                            <td>
                                <span>{data.merchandise_info ? data.merchandise_info.length : "--"}</span>
                            </td>
                            <td>
                                <span>{dateFormat(data.lastLogin, "mmmm dS, yyyy")}</span>
                                <small>{dateFormat(data.lastLogin, "h:MM:ss TT")}</small>
                            </td>
                            <td>
                                <Button className="activeBtn" style={{ backgroundColor: data.isActive ? null : "#ff4444" }}>{data.isActive ? "Active" : "Suspended"}</Button>
                            </td>
                            <td>
                                <Button className="actionBtn">
                                    <BsThreeDots />
                                    <div className='actionList'>
                                        <ul>

                                            <li><Link to={{
                                                pathname: "/creator-detail",
                                                search: `?id=${data._id}`,

                                            }}><AiOutlineEye /> View Details</Link></li>
                                            <li onClick={() => deleteCreators(data._id)}><a><MdDeleteOutline /> Delete</a></li>
                                        </ul>
                                    </div>
                                </Button>
                            </td>
                        </tr>
                    )
                })}



            </tbody>
        </Table>
    );

}

export default IdoTable