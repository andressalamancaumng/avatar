import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCreatorComponent } from './avatar-creator.component';

describe('AvatarCreatorComponent', () => {
  let component: AvatarCreatorComponent;
  let fixture: ComponentFixture<AvatarCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
