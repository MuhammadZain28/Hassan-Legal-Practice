import React, { useState } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";
import { supabase } from "../Database/SupabaseClient";
import Modal from "./Modal";
import MessageBox from "./MessageBox";
import SearchableSelect from "./SearchableSelect";  

function ReviewForm({ onClose }) {
    const [formData, setFormData] = useState({
        client: "",
        email: "",
        title: "Excellent Service",
        rating: 0,
        comment: ""
    });
    const options =  [
        "Great Work",
        "Nice Advice",
        "Keep It Up",
        "Excellent Team",
        "Needs Improvement",
    ];

    const [open, setOpen] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        const { data, error } = await supabase
            .from("Reviews")
            .insert([formData]);
        if (error) {
            console.error("Error submitting review:", error);
        } else {
            console.log("Review submitted successfully:", data);
            setOpen(true);
            setFormData({
                client: "",
                email: "",
                title: "",
                rating: 0,
                comment: ""
            });
        }
    };
    if (open)
    {
        return (
            <Modal isOpen={open} onClose={() => {setOpen(false); onClose();}}>
                <MessageBox actions="ok" title="Success" message="Thank You For Your Feedback!" onClose={() => {setOpen(false); onClose();}} >
                    <FaCheckCircle size={64}/>
                </MessageBox>
            </Modal>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Give Your Feedback</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <h3 style={{fontSize: '1.6rem'}}>Rating : </h3>
                <Rating initialRating={formData.rating} emptySymbol={<FaRegStar size={32} color="rgba(0, 0, 0, 1)"/>} fullSymbol={<FaStar size={32} color="rgba(0, 0, 0, 1)"/>} onChange={(value) => setFormData({ ...formData, rating: value })} fractions={2} />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </div>
            <SearchableSelect options={options} value={formData.title} onChange={(value) => setFormData({ ...formData, title: value })} />
            <textarea
                name="comment"
                value={formData.comment}
                    onChange={handleChange}
                    placeholder="Review"
                    rows="8"
                    required
                />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <button type="submit" className="submit">Submit Review</button>
            </div>
        </form>
    );
};

export default ReviewForm;