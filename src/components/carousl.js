import React from "react";
import { Card } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




const responsive = {
   
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const carousl = () => {
    return (
        <Carousel className="carousel-slider mb-25" responsive={responsive}>
            <Card className='card-slider pointer'>
                <div> <img className='main-img' src="https://static.vecteezy.com/system/resources/previews/002/730/029/original/free-chips-and-dry-fruits-packaging-design-ideas-for-packaging-company-free-vector.jpg" alt="" /></div>
                <div className="item-font-primary mt-10">Sed Vestibulam</div>
                <div className="d-flex">
                <div className="product-font-secondry mr-10 ">Barcode</div>
                <div className="product-font-teritory ">7854484</div>
                </div>
               
                <div className="product-font-primary mt-10">$124.67</div>
            </Card>

            <Card className='card-slider pointer'>
                <div> <img className='main-img' src="https://static.vecteezy.com/system/resources/previews/002/730/007/original/free-chips-and-dry-fruits-packaging-design-ideas-for-packaging-company-free-vector.jpg" alt="" /></div>
                <div className="item-font-primary mt-10">Sed Vestibulam</div>
                <div className="d-flex">
                <div className="product-font-secondry mr-10 ">Barcode</div>
                <div className="product-font-teritory ">7854484</div>
                </div>
               
                <div className="product-font-primary mt-10">$124.67</div>
            </Card>

            <Card className='card-slider pointer'>
                <div> <img className='main-img' src="https://static.vecteezy.com/system/resources/previews/002/732/572/original/free-chips-and-dry-fruits-packaging-design-ideas-for-packaging-company-free-vector.jpg" alt="" /></div>
                <div className="item-font-primary mt-10">Sed Vestibulam</div>
                <div className="d-flex">
                <div className="product-font-secondry mr-10 ">Barcode</div>
                <div className="product-font-teritory ">7854484</div>
                </div>
               
                <div className="product-font-primary mt-10">$124.67</div>
            </Card>

            <Card className='card-slider pointer'>
                <div> <img className='main-img' src="https://static.vecteezy.com/system/resources/thumbnails/002/684/616/small/free-chips-and-dry-food-packaging-ideas-for-foods-company-free-vector.jpg" alt="" /></div>
                <div className="item-font-primary mt-10">Sed Vestibulam</div>
                <div className="d-flex">
                <div className="product-font-secondry mr-10 ">Barcode</div>
                <div className="product-font-teritory ">7854484</div>
                </div>
               
                <div className="product-font-primary mt-10">$124.67</div>
            </Card>

            <Card className='card-slider pointer'>
                <div> <img className='main-img' src="https://static.vecteezy.com/system/resources/thumbnails/002/746/293/small/free-potato-chips-package-design-foil-bags-with-the-original-file-in-3d-illustration-chip-s-packaging-ideas-chip-packaging-packaging-chips-free-vector.jpg" alt="" /></div>
                <div className="item-font-primary mt-10">Sed Vestibulam</div>
                <div className="d-flex">
                <div className="product-font-secondry mr-10 ">Barcode</div>
                <div className="product-font-teritory ">7854484</div>
                </div>
               
                <div className="product-font-primary mt-10">$124.67</div>
            </Card>
      


        </Carousel>
    )
}

export default carousl;