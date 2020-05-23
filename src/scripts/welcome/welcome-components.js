const welcome_container = () => {
    return `
    <div id=welcome_container>
    <h1>Nutshell</h1>
    <div id="welcome_form"></div>
    <button id="enter">Register a new account</button>
    </div>`
}

const welcome_registration = () => {
    return `
    <form>
    <label>Username</label>
    <input id="username" type="text">
    <label>Email Address</label>
    <input id="email" type="text">
    <label>Password</label>
    <input id="password" type="password">
    <label>Confirm Password</label>
    <input id="password_conf" type="password">
    </form>
    <button id="register">Register</button>
    `
}

export default { welcome_container, welcome_registration }