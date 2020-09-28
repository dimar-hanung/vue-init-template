const headerauth = {
    headers: {
      "Authorization": `bearer ${localStorage.getItem("token")}`
    },
}

const headerform = {
    headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `bearer ${localStorage.getItem("token")}`
    },
}

export { headerauth, headerform }