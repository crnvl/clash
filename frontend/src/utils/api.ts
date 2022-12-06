const url = "https://api.clash.qwq.sh";

export function createUser() {
    return fetch(url + "/create", {
        method: "POST",
    }).then((res) => res.json());
}

export function getAllUsers() {
    return fetch(url + "/all").then((res) => res.json());
}

export function submitScore(id: string, type: string) {
    return fetch(url + `/submit/${id}/${type}`, {
        method: "POST",
    }).then((res) => res.json());
}

export function getField(id: string) {
    return fetch(url + `/field/${id}`).then((res) => res.json());
}
