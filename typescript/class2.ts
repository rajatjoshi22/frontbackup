class Mobile {
    constructor(
        public brand: string,
        public model: string,
        public price: number,
        public os?: string
    ) {

    }

    public showDetails = () => {
        console.log(`brand: ${this.brand} || model: ${this.model} || price:${this.price} || os:${this.os}`);
    }

    public printAccessories = (...accessories: string[]) => {
        accessories.forEach((accessory) => {
            console.log(accessory);
        });

    }

}


const mobile1: Mobile = new Mobile("Samsung", "A50s", 21000, "android");
const mobile2: Mobile = new Mobile("Apple", "Iphone12", 122000);
mobile1.showDetails();
mobile2.showDetails();
mobile1.printAccessories("charger", "earphone");
mobile2.printAccessories("Kuch nahi milega");