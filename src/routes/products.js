const router = require("express").Router()
const { productControllers } = require("../controllers")
const { Product } = require("../lib/sequelize")
const fileUploader = require("../lib/uploader")

router.get("/", productControllers.getAllProduct)
router.post("/",
fileUploader({
    destinationFolder: "product-cover",
    fileType: "image",
    prefix: "POST"
}).single("post_image_file"),
productControllers.createNewProduct)
router.patch("/:id", productControllers.editProduct)
router.delete("/:id", productControllers.deleteProduct)