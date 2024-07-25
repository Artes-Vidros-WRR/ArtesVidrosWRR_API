const apiBaseUrl = process.env.API_BASE_URL ? Number(process.env.PORT) : "http://localhost:3333";

export default function pingEndpoint() {

    setInterval(async () => {
        await fetch(`${apiBaseUrl}/ping`, {
            method: "GET",
        })
        .then(res => {
            console.log(`{Pinged at ${new Date().toISOString()}: Status Code ${res.status}}`);
        })
        .catch(() => {
            pingEndpoint()
          });
    }, 840000) // 14 min
}