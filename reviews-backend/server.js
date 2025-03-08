import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON requests

// GitHub Repo Info
const GITHUB_REPO = "ManHoLaw/Audoque"; // Change this to your GitHub repo
const FILE_PATH = "reviews.xml"; // The XML file in your GitHub repo
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // GitHub API token

// Helper Function: Fetch XML File from GitHub
const getReviewsFile = async () => {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    return response.json();
};

// API Route to Handle Review Submission
app.post("/api/addReview", async (req, res) => {
    try {
        const { name, rating, comment } = req.body;
        const date = new Date().toISOString().split("T")[0];

        // 1. Get Existing XML File
        const fileData = await getReviewsFile();
        const xmlContent = Buffer.from(fileData.content, "base64").toString("utf-8");

        // 2. Append New Review
        const updatedXml = xmlContent.replace("</reviews>", `
        <review>
            <name>${name}</name>
            <rating>${rating}</rating>
            <comment>${comment}</comment>
            <date>${date}</date>
        </review>
    </reviews>`);

        // 3. Convert to Base64
        const encodedContent = Buffer.from(updatedXml).toString("base64");

        // 4. Push Update to GitHub
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
            method: "PUT",
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "Added new review",
                content: encodedContent,
                sha: fileData.sha, // Required for updating the file
            }),
        });

        if (!response.ok) throw new Error("Failed to update XML file");

        res.json({ message: "Review added successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
