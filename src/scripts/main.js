import welcome from "./welcome/welcome.js"
import user_api from "./data-handling/user-data.js"

const dom_vars = {
    welcome_container: document.getElementById("welcome_container")
}

let active_user = ""

// Welcome container event listener
dom_vars.welcome_container.addEventListener("click", () => {
    if (event.target.id == "enter") { 
        welcome.welcome_dom.remove_element("enter")
        welcome.welcome_dom.render_element(welcome.welcome_component.welcome_registration(), "welcome_form")
        
    } else if (event.target.id == "register") {
        welcome.create_dom_vals()
        if (welcome.empty_fields()) { 
            alert("Please enter all input fields.") 
        }
        else if (!welcome.matching_passwords()) { 
            alert("Passwords do not match.")
        }
        else if (!welcome.empty_fields() && welcome.matching_passwords()) { 
            const user_object = welcome.create_user()
            user_api.save_user(user_object).then( user => {
                sessionStorage.setItem("active_user", user.id)
                active_user = parseInt(sessionStorage.getItem("active_user"))
                welcome_container.remove()
            })
        }
        
    }
})

