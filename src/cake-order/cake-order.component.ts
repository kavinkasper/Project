import { Component, OnInit } from '@angular/core';
import { CAKE } from 'src/models/cake';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from 'src/services/cake.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/services/customer.service';
import { CUSTOMER } from 'src/models/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cake-order',
  templateUrl: './cake-order.component.html',
  styleUrls: ['./cake-order.component.css']
})
export class CakeOrderComponent implements OnInit {
  cake: CAKE = {
    id: "",
    name: "",
    image_url: "",
    description: "",
    rating: "",
    price: 0,
    category: "",
    details: ""
  }
  productquantity: number = 0;
  quantityprice: number = 0;

  maxDate: Date = new Date();

  constructor(
    private activated: ActivatedRoute,
    private cak: CakeService,
    private form: FormBuilder,
    private customer: CustomerService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(data => {
      let id = data.get("id") ?? 0;
      this.cak.getcakebyid(+id).subscribe(data => {
        this.cake = data;
      }) 
    })
  }

  quantity(value: string) {
    if (this.productquantity >= 0 && value === "maximum") {
      this.productquantity = this.productquantity + 1;
    }
    else if (this.productquantity > 0 && value === "minimum") {
      this.productquantity = this.productquantity - 1;
    }
    this.quantityprice = this.productquantity * this.cake.price;
    const quantities = this.customerdetails.get("quantity");
    quantities?.setValue(this.productquantity);
    const pricing = this.customerdetails.get("price");
    pricing?.setValue(this.quantityprice);
  }

  customerdetails = this.form.group({
    Name: ["", [Validators.required, Validators.minLength(2), this.namevalidation]],
    Email: ["", [Validators.required, this.emailvalidation]],
    date: ["", [Validators.required]],
    phonenumber: ["", [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
    quantity: [0],
    cakename: [""],
    price: [0],
    adress: this.form.group({
      street: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      zipcode: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(6)]],
    })
  })

  get firstname() { return this.customerdetails.get("Name"); }
  get lastname() { return this.customerdetails.get("lastname"); }
  get email() { return this.customerdetails.get("Email"); }
  get date() { return this.customerdetails.get("date"); }
  get phonenumber() { return this.customerdetails.get("phonenumber"); }
  get street() { return this.customerdetails.get("adress.street"); }
  get city() { return this.customerdetails.get("adress.city"); }
  get state() { return this.customerdetails.get("adress.state"); }
  get zipcode() { return this.customerdetails.get("adress.zipcode"); }

  namevalidation(name: AbstractControl) {
    const namevalue = name.value;
    if (namevalue.match(/\d/)) {
      return { invalidname: true };
    }
    else {
      return null;
    }
  }

  emailvalidation(email: AbstractControl) {
    const emailvalue = email.value;
    if (emailvalue.startsWith('0') || emailvalue.startsWith('1') || emailvalue.startsWith('2') || emailvalue.startsWith('3') || emailvalue.startsWith('4') || emailvalue.startsWith('5') || emailvalue.startsWith('6') || emailvalue.startsWith('7') || emailvalue.startsWith('8') || emailvalue.startsWith('9') || !emailvalue.endsWith('gmail.com')) {
      return { invalidemail: true };
    }
    else {
      return null;
    }

  }

  status: boolean = false

  onsubmit() {
    this.status = true;
    const cakename = this.customerdetails.get("cakename");
    cakename?.setValue(this.cake.name);
    let cus: CUSTOMER = this.customerdetails.value as CUSTOMER;
    this.customer.add_details(cus).subscribe(data => {
      this.snackBar.open('Thank you for shopping with us. Your order will arrive soon. Enjoy!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
      this.route.navigateByUrl("");
    })
  }

  canexit() {
    if (this.status === false) {
      return confirm("Are you sure you want to leave");
    }
    else {
      return true;
    }
  }

}