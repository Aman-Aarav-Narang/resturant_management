import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import { toast } from 'react-toastify';
import fireDb from '../Connection/FirebaseConnect';

const Adddish = () => {
  const [cat, setCategory] = useState([])
  const [toogle, setToogle] = useState(false)
  const [allitem, setAll] = useState(JSON.parse(localStorage.getItem("category")))
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    quantity: "1"
  })


  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(allitem))
  }, [allitem])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const add = () => {
    if (allitem == null) {
      setAll([])
    }
    setAll((allitem) => {
      return (
        Array.from(new Set([...allitem, cat]))
      )
    })
    toast.success("Category added successfully", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
    setCategory('')
  }

  const additem = (event) => {
    setCategory(event.target.value)
  }

  const uploadData = () => {
    fireDb.child("restaurantdata").push(data, (err) => {
      if (err) {
        toast.danger("Data not inserted", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
      }
      else {
        toast.success("Data inserted successful", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
      }
    })

    console.log('hjklljh')
  }
  const convert64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setData({ ...data, image: reader.result.toString() })
    }
    setToogle(!toogle)
  }


  return (
    <>
      <marquee width="100%" className="text-dark" direction="left" scrollamount="13" >
        <h2>
          Welcome admin you can do every things add remove check bill
        </h2>
      </marquee>
      <Adminnav />
      <div className="container">

        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6 m-4">
            <div className="row text-center">
              <div className="col-md-6">
                <input type="text" onChange={handleChange} name="name" className="form-input" placeholder='Dish name' />
              </div>

              <div className="col-md-6">
                <input type="number" onChange={handleChange} name="price" className="form-input" placeholder='Dish Price' />
              </div>

            </div>

            <br />
            <div className="row">

              <div className="col-md-10">
                <input type="text" onChange={additem} value={cat} placeholder='Add food category' className='form-input' name="" />
              </div>
              <div className="col-md-2">
                <input type="button" onClick={() => add()} className='btn btn-outline-info btn-small' value="Add" />
              </div>
            </div>

            <br />
            <div className="col-md-12">
              <select className='form-select' name='category' onChange={handleChange}>

                <option selected>Select category</option>
                {
                  allitem ? allitem.map((cat, index) => {
                    return (
                      <option value={cat}>{cat}</option>
                    )
                  }) : ""
                }

              </select>
            </div>


            <input type="hidden" name="quantity" value="1" className='form-control' id="" disabled />
            <br />
            <div className="col-md-12">
              <input type="file" accept='image/*' onChange={(e) => convert64(e)} className='form-file' id="" />
            </div>

            {toogle ? <img src={data.image} style={{ height: '150px', width: "150px" }} /> : ""}

            <div className="col-md-12">
              <input type="button" onClick={uploadData} className='btn btn-primary form-file p-2 mt-4' value="Submit" />
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default Adddish
