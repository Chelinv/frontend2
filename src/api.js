const API_URL = "https://backend-hpfp54r8s-chelinvs-projects.vercel.app/api/modelos";

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
