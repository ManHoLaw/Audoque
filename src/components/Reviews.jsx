import { useState } from "react";

const Reviews = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = { 
            name, 
            rating: Number(rating), // Ensure rating is a number
            comment, 
            date: new Date().toLocaleDateString(), // Better date format
        };

        try {
            const response = await fetch("api/addReview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                alert("Review submitted!");
            } else {
                const errorData = await response.json();
                alert(`Failed to submit review: ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the review.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-md">
            <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                min="1" 
                max="5" 
                value={rating} 
                onChange={(e) => setRating(Number(e.target.value))} 
                required 
            />
            <textarea 
                placeholder="Your Review" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                required 
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Review</button>
        </form>
    );
};

export default Reviews;
