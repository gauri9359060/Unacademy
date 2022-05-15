const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const port  = 8005
const DB_url = "mongodb+srv://Ashish8923:ashu_8923@unacademy.upire.mongodb.net/Unacademy?retryWrites=true&w=majority"

const educatorController = require("./Components/Educator/educators.controller")
const userController = require("./Components/User/user.controller")
const bestController = require("./Components/BestCourses/best.controller")
const priceController = require("./Components/Price/price.controller")
const cardController = require("./Components/Cards/card.controller")
const comingSoonController = require("./Components/ComingSoon/comingSoon.controller")
const coursesController = require("./Components/Courses/courses.controller")
const footerController = require("./Components/Footer/footer.controller")
const liveClassesController = require("./Components/LiveClassesCard/liveClasses.controller")
const ratingCardController = require("./Components/RatingCard/ratingCard.controller")
const ratingCard2Controller = require("./Components/RatingCard2/ratingCard2.controller")
const recentCourseController = require("./Components/RecentCourses/recentCourse.controller")
const slbsCmpltnController = require("./Components/SyllabusCompletion/syllabusCompletion.controller")
require("dotenv").config();
const app = express();

const connect = () => {
    return mongoose.connect(DB_url);
}

app.use(express.json());
app.use(cors())
app.use("/educator", educatorController)
app.use("/users", userController)
app.use("/best", bestController)
app.use("/price", priceController)
app.use("/card", cardController)
app.use("/comingSoon", comingSoonController)
app.use("/courses", coursesController)
app.use("/footer", footerController)
app.use("/liveclasses", liveClassesController)
app.use("/ratingCard", ratingCardController)
app.use("/ratingCard2", ratingCard2Controller)
app.use("/recent", recentCourseController)
app.use("/slbscmpltn", slbsCmpltnController)


app.listen(port, async () => {
    try {
        await connect();
        console.log("Connected To Mongoose")
        console.log(`connected to port: ${port}`)
    }
    catch (e) {
        console.log(e.message)
    }
})
