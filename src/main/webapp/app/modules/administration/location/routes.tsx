export default async function handler(req, res) {
  const backendUrl = "http://localhost:8080/admin/location"; // 백엔드 API 주소

  if (req.method === "GET") {
    // 로그 목록 가져오기
    const response = await fetch(backendUrl);
    const data = await response.json();
    return res.status(200).json(data);
  } else if (req.method === "POST") {
    // 로그 추가하기
    const response = await fetch(`${backendUrl}?message=사용자 접속`, { method: "POST" });
    return res.status(response.status).end();
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
