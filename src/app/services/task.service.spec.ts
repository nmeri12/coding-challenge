import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TaskService } from './task.service';
import { Tariff } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import the HttpClientTestingModule here
      providers: [TaskService]
    });

    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testData: Tariff[] = [
      {
        "id": 1,
        "name": "Normal Tarif",
        "downloadSpeed": 100,
        "uploadSpeed": 20,
        "price": 35.25,
        "benefits": ["Tariff benefit 2", "Tariff benefit 3", "Tariff benefit 1"]
      },
      {
        "id": 2,
        "name": "Premium Tarif",
        "downloadSpeed": 200,
        "uploadSpeed": 50,
        "price": 50.99,
        "benefits": ["Tariff benefit 1", "Tariff benefit 2", "Tariff benefit 3"]
      },
      {
        "id": 3,
        "name": "Basic Tarif",
        "downloadSpeed": 50,
        "uploadSpeed": 10,
        "price": 110.45,
        "benefits": ["Tariff benefit 3", "Tariff benefit 2", "Tariff benefit 1"]
      }
    ];

    // Call the service method to get tariffs
    service.getTariffs().subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    const req = httpTestingController.expectOne('http://localhost:3000/tariffs');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
