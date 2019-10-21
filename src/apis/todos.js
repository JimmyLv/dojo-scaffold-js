export function query(pagination) {
  return fetch(`/api/todos`).then(response => response.json())
}
