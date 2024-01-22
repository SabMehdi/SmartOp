import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrl: './intervention.component.css'
})
export class InterventionComponent implements OnInit {
  interventions: any[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFavorites().subscribe(data => {
      this.interventions = data
      console.log(this.interventions)
    }, error => {
      console.error(error);
    });
  }
}
