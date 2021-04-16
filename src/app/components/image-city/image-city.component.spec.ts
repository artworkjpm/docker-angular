import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCityComponent } from './image-city.component';

describe('ImageCityComponent', () => {
  let component: ImageCityComponent;
  let fixture: ComponentFixture<ImageCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
