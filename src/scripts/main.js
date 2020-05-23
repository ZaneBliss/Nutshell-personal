import welcome from "./welcome/welcome.js"


const dom_vars = {
    welcome_container: document.getElementById("welcome_container")
}

let active_user = ""

dom_vars.welcome_container.addEventListener("click", () => {
    if (event.target.id == "enter") { 
        welcome.welcome_dom.remove_element("enter")
        welcome.welcome_dom.render_element(welcome.welcome_component.welcome_registration(), "welcome_form")
        welcome.create_dom_vals()
    } else if (event.target.id == "register") {
        if (welcome.empty_fields()) { alert("Please enter all input fields.") }
        else if (!welcome.matching_passwords) { alert("Passwords do not match.")}
        else { 
            console.log("success");
                        
            const user_object = welcome.create_user()
        }
        
    }
})