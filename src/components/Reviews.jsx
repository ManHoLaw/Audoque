import { useState } from "react";

const Reviews = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { name, rating, comment, date: new Date().toISOString().split("T")[0] };

        const response = await fetch("/api/addReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        });

        if (response.ok) {
            alert("Review submitted!");
        } else {
            alert("Failed to submit review.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <textarea placeholder="Your Review" value={comment} onChange={(e) => setComment(e.target.value)} required />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Review</button>
        </form>
    );
};

export default Reviews;
