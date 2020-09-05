import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoModel } from './todo.model';

describe('TodoModel', () => {
  let component: TodoModel;
  let fixture: ComponentFixture<TodoModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
