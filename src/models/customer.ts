export type CUSTOMER = {
    id: string | number;
    cakeName: string;
    firstname: string;
    lastname: string;
    Email: string;
    phonenumber: string | number;
    date: string;
    quantity: number;
    cakename: string;
    price: number;
    adress: {
        street: string,
        city: string,
        state: string,
        zipcode: string | number
    }
}