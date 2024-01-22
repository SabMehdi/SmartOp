import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-interventions',
  templateUrl: './all-interventions.component.html',
  styleUrl: './all-interventions.component.css'
})
export class AllInterventionsComponent {
  interventions: any[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getInterventions().subscribe(data => {
      this.interventions = data
      console.log(this.interventions)
    }, error => {
      console.error(error);
    });
  }
}
