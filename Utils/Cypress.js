class Cypress {
    static visit(url) {
        setTimeout(() => {
            console.log(`${url} visited`);
        }, 1000)
    }
   
    static login(username, password) {
        setTimeout(() => {
            console.log(`logged in with ${username} ${password}`);
        }, 500);
    }

    static validateloginMessage(text) {
        setTimeout(() => {
        console.log(`${text} validated!`)
        }, 250)
    }
}

module.exports.Cypress = Cypress;