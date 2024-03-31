import { Component } from '@angular/core';
import { GoogleSearchService } from '../services/google-search-service.service';

@Component({
  selector: 'app-search-app',
  templateUrl: './search-app.component.html',
  styleUrls: ['./search-app.component.css'],
})
export class SearchAppComponent {
  searchResults: any;
  searchQuery!: string;
  filterOptions = [
    { label: 'Education', value: 'education' },
    { label: 'Health', value: 'health' },
    { label: 'Economic Development', value: 'economic' },
    { label: 'Government Schemes', value: 'government of india schemes' },
  ];
  chosenFilter: string = '';
  constructor(private searchService: GoogleSearchService) {}

  performSearch() {
    const refinedQuery = this.searchQuery
      ? `${this.searchQuery} ${this.chosenFilter}`
      : this.chosenFilter;
    this.searchService.search(refinedQuery).subscribe((results) => {
      this.searchResults = results;
    });
  }
}
