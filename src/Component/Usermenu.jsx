import React, { useEffect, useState } from 'react'
import fireDb from '../Connection/FirebaseConnect';
import Header from './Header';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../Action/Action';
import { Link } from 'react-router-dom';



const Usermenu = () => {
    const dispatch = useDispatch()
    const getdata = useSelector((state) => state.cartreducer.carts)
    const [detail, setDetail] = useState({})
    const [detaill, setDetaill] = useState({})
    const [uid, setuid] = useState([])

    useEffect(() => {
        fireDb.child("restaurantdata").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setDetail({ ...snapshot.val() })
            }
            else
                setDetail({})
        });
    }, [detaill])

    useEffect(() => {
        localStorage.setItem("uniqueid", JSON.stringify(uid))
        console.log(uid)
    }, [uid])

    const addToCart = (e, [id]) => {

        setuid([...uid, id])
        dispatch(ADD(e, id))
        
        toast.success("Item added successful", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
    }

    return (
        <>
            <Header />

            <div className="d-flex justify-content-end align-item-end">
                <Link to="/cartitem">
                    <img src="image/cart-icon.png" style={{ left: "90%", width: "45px", height: "45px", border: "1px solid black", margin: "20px 0px 0 0" }} alt="" srcset="" /></Link>
                <span className='text-light bg-dark p-2'>{getdata.length}</span>
            </div>

            <br />
            <div className="container mt-4">

                <div className="mainouter notes">
                    {
                        Object.keys(detail).map((id, index) => {
                            return (
                                <>
                                    <div className="outercard ">
                                        <img src={detail[id].image} alt="" />
                                        <div class="innercard mb-2">
                                            <h4><b>{detail[id].name}</b></h4>
                                            <p>₹ {detail[id].price}</p>
                                          
                                            <p><button className='btn btn-primary' onClick={() => addToCart(detail[id], [id])}>Order it</button></p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Usermenu
