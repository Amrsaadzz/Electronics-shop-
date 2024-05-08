
export const SetAuthUser = (data) => {
    //save in local storage
    localStorage.setItem("user", JSON.stringify(data))
}
export const GetAuthUser = (data) => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    }
};

export const RemoveAuthUser = () => {
    if (localStorage.getItem("user")) {
        return localStorage.removeItem("user");
    }
}

