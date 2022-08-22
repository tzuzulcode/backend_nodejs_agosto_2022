const {Router} = require("express")
const { getAllFoodRoute } = require("./routes")


const router = Router()

router.get("/",getAllFoodRoute)


module.exports = router