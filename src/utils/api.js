const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
};

async function getItems() {
  return fetch(`${baseUrl}/items`).then(handleServerResponse);
}

// async function addItem({ name, imageUrl, weather }) {
//   return fetch(`${baseUrl}/items`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       weather,
//       imageUrl,
//     }),
//   }).then(handleServerResponse);
// }

async function addItem({ name, imageUrl, weather }) {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
  return handleServerResponse(response);
}

async function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleServerResponse);
}
export { getItems, addItem, deleteItem, handleServerResponse };
