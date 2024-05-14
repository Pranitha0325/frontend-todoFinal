import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



// import { TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

// import { TodoService } from './todo.service';

// describe('TodoService', () => {
//   let service: TodoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule], // Include HttpClientModule here
//     });
//     service = TestBed.inject(TodoService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
