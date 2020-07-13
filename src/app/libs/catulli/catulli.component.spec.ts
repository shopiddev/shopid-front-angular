import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatulliComponent } from './catulli.component';

describe('CatulliComponent', () => {
  let component: CatulliComponent;
  let fixture: ComponentFixture<CatulliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatulliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatulliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
