import React from 'react'

const Carousel = (props) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                {
                    props.images.length > 0 &&
                    props.images.map((imgSrc, index) => {
                        return (
                            <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current="true" aria-label={"Slide " + (index + 1) }></button>
                        )
                    })
                }
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                {
                    props.images.length > 0 &&
                    props.images.map((imgSrc, index) => {
                        return (
                            <div className={"carousel-item " + (index === 0 ? "active" : "")} key={index}>
                                <img src={imgSrc} className="d-block w-100" alt="..." />
                            </div>
                        )
                    })
                }
                {/* <div className="carousel-item active">
                    <img src="https://picsum.photos/id/666/900/400" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/999/900/400" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/id/121/900/400" className="d-block w-100" alt="..." />
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel





