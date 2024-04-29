// server/users.ts
export default defineEventHandler(async (event) => {
    try {
        const response = await fetch("https://60b0c06a1f26610017fff217.mockapi.io/api/users/products");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        return {
            data,
            status: 200 // HTTP status code
        };
    } catch (error) {
        console.log('error')
        return {
            error: error.message,
            status: 500 // Internal Server Error
        };
    }
});
