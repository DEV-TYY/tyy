import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "./Testimonial.css"
import React from 'react'

const Testimonial = () => {
    const RenderTestimonialData = TestimonialsData.map(review => {
        return(
            <div className="card" key={review.id}>
                <div className="flex gap-2">
                    <div className="profile">
                        <img src={review.avatar} alt="" />
                    </div>
                    <div>
                        <h4>{review.name}</h4>
                        <p>{review.role}</p>
                        <span>
                        {Array.from({ length: review.rating }, (_, i) => (
                            <FaStar key={i} className="rating-star"/>
                        ))}
                        </span>
                    </div>
                </div>
                <div>
                    <p className="para">{review.comment}</p>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className="wrapper p-block-9 border-btm">
            <div className='text-center'>
                <span className='sub-text overlay-text middle' datatype='Client Testimonials'>Client Testimonials</span>
                <h2>
                    Client Testimonials that <span className='green-text'> Speaks to my result </span> Journey
                </h2>
            </div>   
            <Slider {...settings} className="mt-5">
                {RenderTestimonialData}
            </Slider>
        </div>
    </section>
  )
}

export default Testimonial


const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager at ABC Corp",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
     rating: 5,
    comment:
      "This system really improves our workflow and saves a lot of time!"
  },
  {
    id: 2,
    name: "Lisa Smith",
    role: "Store Owner",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    rating: 5,
    comment:
      "Very useful and easy to use. Support team helped me set everything up."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    rating: 5,
    comment:
      "The analytics and report feature are my favorite. Highly recommended!"
  }
];

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};