import MongoLib from "../lib/mongo.js";

class FligthServices {
    constructor() {
        this.mongodb = new MongoLib();
        this.collection = 'flights';
        
    }

    async getFlights() {
        const result = await this.mongodb.find(this.collection, {});
        return result;       
    }

    async getOffers() {
        const result = await this.mongodb.find('offer', {});
        return result;
    }
}

export {FligthServices};