import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './Review.css';
import { FaUserCircle, FaStar, FaStarHalf } from 'react-icons/fa'
import Modal from "./Modal";
import ReviewForm from "./ReviewForm";
import { useState, useContext } from "react";
import { ReviewContext } from "../utils/ReviewContext";

function Review() {
    const [modalOpen, setModalOpen] = useState(false);
    const { reviews } = useContext(ReviewContext);



    return (
        <>
            <div className="review-container">
                <div className="heading" style={{margin: '2rem'}}>
                    <hr style={{ backgroundColor: 'rgba(255, 255, 255, 1)', border: 'none' }} />
                    <h1 style={{ color: 'rgba(0, 0, 0, 1)', background: 'rgba(255, 255, 255, 1)' }}>Client Reviews</h1>
                    <hr style={{ backgroundColor: 'rgba(255, 255, 255, 1)', border: 'none' }} />
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        bulletClass: "custom-bullet",
                        bulletActiveClass: "custom-bullet-active"
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    speed={1000}
                    loop={reviews.length > 1}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    >
                    {reviews?.filter(review => review.status !== "Pending").map((review) => (
                        <SwiperSlide key={review.id}>
                            <blockquote className="review-blockquote">
                                <h2 style={{padding: '0 0 1rem 0'}}>{review.title}</h2>
                                <div className="review-rating">
                                    {Array.from({ length: 5 }, (_, index) => {
                                        if (index < Math.floor(review.rating)) {
                                            return <FaStar size={24} key={index} color="rgb(161, 126, 54)" />;
                                        }
                                    })}
                                    { review.rating - Math.floor(review.rating) > 0 ? <FaStarHalf size={24} key={5} color="rgb(161, 126, 54)" /> : null }
                                </div>
                                <p className="review-text">{review.comment}</p>
                                <footer className="review-footer"><FaUserCircle size={64} color="rgb(161, 126, 54)" /> <div><p>{review.client}</p></div></footer>
                            </blockquote>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div style={{ display: 'flex', justifyContent: 'center' }}><button className="review-button" onClick={() => setModalOpen(true)}>Share Feedback</button></div>
            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <ReviewForm onClose={() => setModalOpen(false)} />
            </Modal>
        </>
    );
}
export default Review;