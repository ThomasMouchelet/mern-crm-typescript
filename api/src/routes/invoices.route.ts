import express from "express"
import InvoiceController from "../controllers/InvoiceController"
import Invoice from "../models/Invoice"

const router = express.Router()

const invoiceController = new InvoiceController(Invoice)

router.post("/invoices", (req, res) => invoiceController.create(req, res))
router.get("/invoices", (req, res) => invoiceController.findAll(req, res))
router.get("/invoices/:id", (req, res) => invoiceController.findOne(req, res));
router.delete("/invoices/:id", (req, res) => invoiceController.delete(req, res));

module.exports = router