import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import fireDb from '../Connection/FirebaseConnect';


const AdminViewitem = () => {
    const [detail, setDetail] = useState({})
    const [deetail, seteDetail] = useState({})

    // useState
    useEffect(() => {
        fireDb.child("restaurantdata").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setDetail({ ...snapshot.val() })
                console.log(snapshot.val())
            }
            else
                setDetail({})
        });
    }, [deetail])
    return (
        <>
            <marquee width="100%" className="text-dark" direction="left" scrollamount="13" >
                <h2>
                    Welcome admin you can do every things add remove check bill
                </h2>
            </marquee>
            <Adminnav />
            <div className="container">
                <h1 className='text-center'>List of Items</h1>
            </div>

            <div className="container">
                <div className="mainouter notes">
                    {
                        Object.keys(detail).map((id, index) => {
                            return (
                                <>
                                    <div className="outercard notes">
                                        <img src={detail[id].image} alt="" />
                                        <div class="innercard">
                                            <h4><b>{detail[id].name}</b></h4>
                                            <p>₹ {detail[id].price}</p>
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

export default AdminViewitem
