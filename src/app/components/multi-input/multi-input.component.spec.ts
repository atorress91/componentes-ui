import { MultiInputComponent } from './multi-input.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MultiInputComponent', () => {
  let component: MultiInputComponent;
  let fixture: ComponentFixture<MultiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MultiInputComponent],
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
      .compileComponents();

    fixture = TestBed.createComponent(MultiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
