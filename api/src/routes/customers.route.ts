import express from "express"
import CustomerController from "../controllers/CustomerController"
import Customer from "../models/Customer"

const router = express.Router()
const customerController = new CustomerController(Customer)

router.post("/customers", (req, res) => customerController.create(req, res))
router.get("/customers", (req, res) => customerController.findAll(req, res))
router.get("/customers/:id", (req, res) => customerController.findOne(req, res));
router.delete("/customers/:id", (req, res) => customerController.delete(req, res));

module.exports = router