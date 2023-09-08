import { ComponentFixture, TestBed } from '@angular/core/testing';
// import Apollo testing module and controller
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],

    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
