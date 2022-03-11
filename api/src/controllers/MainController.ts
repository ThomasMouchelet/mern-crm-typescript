class MainController{
    dependance: any

    constructor(dependance: any){
        this.dependance = dependance
    }

    async create(req: any, res: any) {
        try {
            const collection = await this.dependance(req.body).save();
            res.send(collection);
        } catch (error) {
            res.send(error);
        }
    }
    
    async findAll(req: any, res: any) {        
        try {
            const collections = await this.dependance.find();
            res.send(collections);
        } catch (error) {
            res.send(error);
        }
    }

    async delete (req: any, res: any){
        try {
            await this.dependance.deleteOne({"_id": req.params.id })
            res.send(true);
        } catch (error) {
            res.send(error);
        }
    } 

    async findOne(req: any, res: any) {
        try {
            const collection = await this.dependance.findById(req.params.id);
            res.send(collection);
        } catch (error) {
            res.send(error);
        }
    }
}

export default MainController