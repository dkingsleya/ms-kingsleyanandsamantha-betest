const { createClient } = require("redis");

async function getAllData(
    client,
    col,
) {
    try {
        const redis = createClient();
        await client.connect();
        await redis.connect();

        redis.on("error", (err) => console.log("Redis Client Error", err));

        let cache = await redis.get("all-data");
        if (cache != null) {
            return {
                status: 200,
                message: "All Data successfully retrieved with Redis",
                data: JSON.parse(cache),
            };
        } else {
            let result = await col.find().toArray();
            await redis.SETEX("all-data", 3600, JSON.stringify(result));
            if (result) {
                return {
                    status: 200,
                    message: "All Data successfully retrieved",
                    data: result,
                };
            } else {
                return {
                    status: 500,
                    message: "No data found.",
                };
            }
        }
    } catch (e) {
        return {
            status: 500,
            message: e.message,
        };
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = { getAllData };
