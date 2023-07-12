import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';
import { Table } from 'primeng/table';
@Component({
  selector: 'table-virtual-scroll-demo',
  templateUrl: 'table-virtual-scroll-demo.html',
})
export class TableVirtualScrollDemo implements OnInit {
  cars: Car[];
  @ViewChild('sc') sc: Table;
  virtualCars: Car[];

  cols: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    this.cars = Array.from({ length: 6000 }).map((_, i) =>
      this.carService.generateCar(i)
    );
    this.virtualCars = Array.from({ length: 6000 });
  }
  reset() {
    this.cars = Array.from({ length: 4000 }).map((_, i) =>
      this.carService.generateCar(i)
    );
    this.virtualCars = Array.from({ length: 4000 });
    this.sc.scrollToVirtualIndex(3000); 
  }
  reset1() {
    this.cars = Array.from({ length: 7000 }).map((_, i) =>
      this.carService.generateCar(i)
    );
    this.virtualCars = Array.from({ length: 7000 });
    setTimeout(() => {
      this.sc.scrollToVirtualIndex(1109);
    }, 1);
  }
}
