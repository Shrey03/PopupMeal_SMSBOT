// Shrey Patel 8715271
// Ronak Patel  8700202
// Pallavi Pallavi 
module.exports = class Order{
    constructor(sNumber, sUrl){
        this.sNumber = sNumber;
        this.sUrl = sUrl;
        this.bDone = false;
    }
    isDone(bDone){
        if(bDone){
            this.bDone = bDone;
        }
        return this.bDone;
    }
}