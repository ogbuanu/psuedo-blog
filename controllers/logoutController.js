
const logoutController = (req, res) => {
    req.session.destroy()
    res.redirect("/auth/login")
}

module.exports = {
    logoutController
}