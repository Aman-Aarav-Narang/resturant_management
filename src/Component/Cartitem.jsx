import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';


const Cartitem = () => {

    const dispatch = useDispatch()
    const [price, setPrice] = useState(0)

    const [uno, setUno] = useState(JSON.parse(localStorage.getItem("uniqueid")))

    useEffect(() => {
        localStorage.setItem("uniqueid", JSON.stringify(uno))
        console.log(uno)
    }, [uno])
    const getdata = useSelector((state) => state.cartreducer.carts)
    console.log(getdata);


    function minus(data) {
        const valu = document.getElementById("inpvalue").value;
        const latestvalue = parseInt(valu) - 1;
        console.log(latestvalue);
        if (latestvalue < 1) {
            document.getElementById("inpbtn").disabled = true;
        }
        else {
            document.getElementById("inpbtn").disabled = false;
            document.getElementById("inpvalue").value = latestvalue;
        }
        return this;
    }
    const plus = (e) => {
        const valu = document.getElementById("inpvalue").value;
        const latestvalue = parseInt(valu) + 1;
        console.log(latestvalue)
        document.getElementById("inpvalue").value = latestvalue;
    }

    const total = () => {
        let price = 0;
        getdata.map((data, id) => {
            price = parseInt(data.price) + parseInt(price)
        });
        setPrice(price)
    }

    useEffect(() => {
        total();
    }, [total])

    return (
        <>
            <Header />
            <div className="container mt-5">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Item name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>

                            <th scope="col">Image</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    {
                        getdata.map((cartitem, id) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{id + 1}</td>
                                            <td>{cartitem.name}</td>
                                            <td>{cartitem.category}</td>
                                            <td>{cartitem.price}</td>

                                            <td>
                                                <img src={cartitem.image} alt="item img" style={{ height: "90px", width: "90px" }} />
                                            </td>
                                            <td><button className='btn btn-danger'>Remove</button></td>
                                        </tr>
                                    </tbody >
                                </>
                            )
                        })
                    }
                </table >
            </div>
            <div className='container  btn-primary d-flex align-item-center justify-content-center'>
                <div>
                    <h3>
                        <b>
                            <i>
                                Grand total :-{price}
                            </i>
                        </b>
                    </h3>
                </div>
            </div>
        </>
    )
}


export default Cartitem
