import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTemplateComponent } from './web-template.component';

describe('WebTemplateComponent', () => {
  let component: WebTemplateComponent;
  let fixture: ComponentFixture<WebTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
