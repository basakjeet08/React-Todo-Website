const BASE_URL = "http://localhost:8080";
const TODO_ENDPOINT = "/todos";

export async function postTodo(todoData) {
  const token = localStorage.getItem("token");
  return fetch(BASE_URL + TODO_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json();
    })
    .catch((error) => {
      console.log(`Error Occured : ${error.message}`);
      throw error;
    });
}
