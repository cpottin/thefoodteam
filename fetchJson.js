

export function fetchJson(apiUrl) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((json) => resolve(json))

        .catch(error => reject(error))
        })
}