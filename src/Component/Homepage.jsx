import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../App.css';

const Homepage = () => {
    return (
        <>

            <Header />

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src="./src/public/image/img1.jpg" style={{ height: "85vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="image/img3.jpg" style={{ height: "85vh" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img2.jpeg" style={{ height: "85vh" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <h2 className='text-center m-4 '>Welcome to Hotel तहलका </h2>
                <div className="row border p-4">
                    <div className="col-md-4">
                        <img src="https://thumbs.dreamstime.com/b/assorted-various-indian-food-dark-rustic-background-traditional-dishes-chicken-tikka-masala-palak-paneer-saffron-rice-lentil-163316040.jpg" style={{ width: "100%" }} alt="dish image" />
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-7 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique consectetur ex. Necessitatibus id impedit cumque accusamus dolores ad, facere, et voluptates illo velit delectus voluptatum sequi eius ut fugiat odio sed, suscipit possimus dolorem laboriosam repellat minima. Sapiente, quidem! Omnis corporis officia numquam exercitationem similique, dignissimos nobis obcaecati nesciunt praesentium, error eum aut delectus. Iure, explicabo obcaecati! Ex voluptate distinctio fugiat quam? Voluptate eaque culpa dolores illum commodi asperiores fuga quasi, quas nihil corporis tempore alias voluptatem, quis quod ipsam enim vero officiis similique odio animi iste laborum molestiae facilis. Quos officia soluta at quidem magni totam ex sed pariatur rem dolor, perspiciatis assumenda voluptatum placeat? Similique dolorum ipsa iure impedit nihil, fuga voluptate non magni libero veniam sapiente totam incidunt quos sequi quia molestiae laboriosam mollitia perspiciatis sunt inventore tenetur neque.
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Homepage
