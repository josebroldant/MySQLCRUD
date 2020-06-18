import { TestBed } from '@angular/core/testing';

import { ImageSequenceService } from './image-sequence.service';

describe('ImageSequenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageSequenceService = TestBed.get(ImageSequenceService);
    expect(service).toBeTruthy();
  });
});
