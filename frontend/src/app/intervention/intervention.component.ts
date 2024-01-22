import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrl: './intervention.component.css'
})
export class InterventionComponent implements OnInit {
  allInterventions: any[] = [];
  displayedInterventions: any[] = [];
  searchTerm: string = '';
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFavorites().subscribe(data => {
      if (typeof data === 'object' && data !== null) {
        this.allInterventions = Object.keys(data).map(key => ({
          surgeon: key,
          ...data[key]
        }));
        this.loadInterventions();
      } else {
        console.error('Unexpected data format:', data);
      }
    }, error => {
      console.error(error);
    });
  }
  
  

  loadInterventions(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const newItems = this.allInterventions.slice(startIndex, endIndex);
    this.displayedInterventions = [...this.displayedInterventions, ...newItems];
    this.currentPage++;
  }

  scrolling(event: any): void {
    console.log("fff");
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const elementHeight = event.target.clientHeight;

    const atBottom = scrollTop + elementHeight >= scrollHeight;

    if (atBottom) {
      this.loadInterventions();
    }
  }


  search(): void {
    if (!this.searchTerm) {
      this.displayedInterventions = [];
      this.currentPage = 1;
      this.loadInterventions();
    } else {
      this.displayedInterventions = this.allInterventions.filter(intervention =>
        intervention.surgeon.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}