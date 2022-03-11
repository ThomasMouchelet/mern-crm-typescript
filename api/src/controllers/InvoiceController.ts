import MainController from "./MainController"
import Customer from "../models/Customer"

class InvoiceController extends MainController {
    async create(req: any, res: any) {
        let customer = req.body.customer;
        let id = customer.id;
        const customerById = await Customer.findById(id);
        
        try {
            const { amount, createdAt } = req.body;
            const invoice = await this.dependance.create({
                amount,
                createdAt,
                customer: customerById
            })
            await invoice.save();
            customerById.invoices.push(invoice);
            await customerById.save();

            res.send(invoice);
        } catch (error) {
            res.send(error);
        }
    }
    
    async findOne(req: any, res: any) {
        try {
            const invoice = await this.dependance.findById(req.params.id);
            const customerId = invoice.customer.valueOf()
            const customer = await Customer.findById(customerId)
            
            invoice.customer = await customer
            res.send(invoice);
        } catch (error) {
            res.send(error);
        }
    }
}

export default InvoiceController