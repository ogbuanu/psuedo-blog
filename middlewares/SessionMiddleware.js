
const isLoggedIn = (req, res, next) => {
    let user = req.session.user || null
    if (user == null) {
        res.redirect("/auth/login")
    }
    else {
        next()
    }
}

const isLoggedOut = (req, res, next) => {
    let user = req.session.user || null
    if (!user == null) {
        res.redirect("/")
    }
    else {
        next()
    }
}

module.exports = {
    isLoggedIn,
    isLoggedOut
}