import welcome_component from "./welcome-components.js"

let dom_vals = {
    username: "",
    email: "",
    password: "",
    password_conf: ""
}

function create_dom_vals () {
    dom_vals = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password_conf: document.getElementById("password_conf").value
    }
}

const create_user = () => {
    return {
        username: dom_vals.username,
        email: dom_vals.email,
        password: dom_vals.password
    }
}

const empty_fields = () => {
    if (
        dom_vals.username == "" ||
        dom_vals.email == "" ||
        dom_vals.password == "" ||
        dom_vals.password_conf == ""
    ) { 
        console.log(dom_vals)
        return true 
    }
    else { return false }
}

const matching_passwords = () => {
    if ( dom_vals.password == dom_vals.password_conf ) { return true}
    else { return false}
}

export default { welcome_component, create_user, empty_fields, matching_passwords, create_dom_vals }