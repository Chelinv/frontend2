const API_URL = "http://127.0.0.1:5000/api/modelos";

export async function fetchModelos() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function createModelo(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
