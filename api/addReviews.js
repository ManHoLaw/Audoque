import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, rating, comment } = req.body;
    const date = new Date().toISOString().split("T")[0];

    const GITHUB_REPO = "ManHoLaw/Audoque";
    const FILE_PATH = "reviews.xml";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    try {
        // Fetch existing XML file from GitHub
        
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/xcel/${FILE_PATH}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });

        const fileData = await response.json();
        const xmlContent = Buffer.from(fileData.content, "base64").toString("utf-8");

        // Append new review
        const updatedXml = xmlContent.replace("</reviews>", `
            <review>
                <name>${name}</name>
                <rating>${rating}</rating>
                <comment>${comment}</comment>
                <date>${date}</date>
            </review>
        </reviews>`);

        // Convert back to Base64
        const encodedContent = Buffer.from(updatedXml).toString("base64");

        // Push updated XML to GitHub
        await fetch(`https://api.github.com/repos/${GITHUB_REPO}/xcel/${FILE_PATH}`, {
            method: "PUT",
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "Added new review",
                content: encodedContent,
                sha: fileData.sha,
            }),
        });

        res.status(200).json({ message: "Review added successfully!" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
