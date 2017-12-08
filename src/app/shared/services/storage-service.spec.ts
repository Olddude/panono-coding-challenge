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
});
