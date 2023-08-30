import { Component, OnInit } from '@angular/core';
import { CAKE } from 'src/models/cake';
import { CakeService } from 'src/services/cake.service';


@Component({
  selector: 'app-cake-view',
  templateUrl: './cake-view.component.html',
  styleUrls: ['./cake-view.component.css']
})
export class CakeViewComponent implements OnInit {
  cakes: CAKE[] = [];

  constructor(private ca: CakeService) { 
  }
  ngOnInit(): void {
    this.ca.getcake().subscribe(data => {
      this.cakes = data;
    })
  }

  search(selected: string) {
    if(selected===undefined){
      this.ca.getcake().subscribe(data => {
        this.cakes = data;
      })
    }
    else{
    this.ca.getcake().subscribe(data => {
      const filter = data.filter(da => da.category === selected);
      this.cakes = filter;
    });
  }
  }

  Onsearch(text: string) {
    if (text === "") {
      this.ca.getcake().subscribe(data => {
        this.cakes = data;
      })
    }
    else {
      this.ca.getcake().subscribe(data => {
        const filter = data.filter(cakename => cakename.name.toLowerCase().includes(text.toLowerCase()));
        this.cakes = filter;
      })
    }
  }
}


