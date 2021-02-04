import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VitalSignsBarComponent } from './vital-signs-bar.component';

describe('VitalSignsBarComponent', () => {
  let component: VitalSignsBarComponent;
  let fixture: ComponentFixture<VitalSignsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalSignsBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VitalSignsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
