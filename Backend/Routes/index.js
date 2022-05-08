module.exports = app => {
    app.get('/', (req,res) => {
        res.status(STATUS_CODES.SUCCESS)
            .send("Welcome to "+ process.env.PROJECT_NAME)
    })

    app.use("/user", require("./user.route"))

    app.use("/user/blog", require("./user.blog.route"))
}