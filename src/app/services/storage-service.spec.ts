import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage-service';

fdescribe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be creatable', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should observe the changes on web storage', inject([StorageService], (service: StorageService) => {
    service.favorites()
      .subscribe(
        data => console.log(data),
      error => console.error(error)
      );
  }));
});
