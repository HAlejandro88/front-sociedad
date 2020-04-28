import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponsablePage } from './responsable.page';

describe('ResponsablePage', () => {
  let component: ResponsablePage;
  let fixture: ComponentFixture<ResponsablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
