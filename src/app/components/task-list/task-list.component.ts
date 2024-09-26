import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SortOptions, Tariff} from "../../models/task.model";
import {sortingOptions, SortOption} from "../../models/sorting-options";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit, OnDestroy {

  private tariffSubscription!: Subscription
  tariffs: Tariff[] = []; // the original data array
  errorMessage: string | null = null; // error message
  filteredTariffs: Tariff[] = []; // filtered array
  loading: boolean = true;
  sortOrder: 'asc' | 'desc' = 'asc'; // default sort order
  sortField: keyof Omit<Tariff, 'benefits'> = 'price'; // default sort field
  searchQuery: string = ''; // default search query

  constructor(private _tariffService: TaskService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  /**
   * fetch Data
   * @private
   */
  private fetchData() {
    this.tariffSubscription = this._tariffService.getTariffs().subscribe(data => {
      this.tariffs = data;
      this.filteredTariffs = data;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.errorMessage = `Error found: ${error.message || 'Error fetching data'}`;
    });
  }

  /**
   * handle the custom sort
   * updates the sortField and sortOrder variables based on the desired sort choice.
   * @param event
   */
  onSortChange1(event: SortOptions) {
    this.sortField = event.sortField;
    this.sortOrder = event.sortOrder;
  }

  /**
   * Filters the tariffs based on the search query.
   */
  filterTariffs() {
    this.filteredTariffs = this.tariffs.filter(tariff =>
      tariff.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      tariff.id.toString().includes(this.searchQuery)
    );
  }


  /**
   * Reset the filtered tariffs to the original tariffs list and clear search query
   */
  onReset() {
    this.searchQuery = '';
    this.filteredTariffs = this.tariffs;
  }


  /**
   * Unsubscribe
   */
  ngOnDestroy(): void {
    if (this.tariffSubscription) {
      this.tariffSubscription.unsubscribe();
    }

  }

}

