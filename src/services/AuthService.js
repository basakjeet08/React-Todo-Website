const BASE_URL = "http://localhost:8080";
const LOGIN_ENDPOINT = "/login";

export async function loginUser(userData) {
  return fetch(BASE_URL + LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.body);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(`Error Occured : ${error.message}`);
      throw error;
    });
}
