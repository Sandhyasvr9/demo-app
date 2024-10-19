import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableData: any = [
    {
      "studentId": 12346,
      "firstName": "Sandhya",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "XXXXXXX",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computer Science",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "aaaaaaaaaa",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "yyyyyyyyyyyyyyyy",
      "lastName": "D",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Css",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "vvvvvvvvvv",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "John",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computer Science",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "Sandhya",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 1234,
      "firstName": "Soumya",
      "lastName": "B",
      "age": 22,
      "grade": 15,
      "gpa": 3.0,
      "major": "Computers",
      "course1": "Introduction to oops",
      "grade1": "A",
      "course2": "maths",
      "grade2": "A+"
    },
    {
      "studentId": 12346,
      "firstName": "XXXXXXX",
      "lastName": "B",
      "age": 24,
      "grade": 20,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c++",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12347,
      "firstName": "John",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computers",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "Sandhya",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "XXXXXXX",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computer Science",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "aaaaaaaaaa",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "yyyyyyyyyyyyyyyy",
      "lastName": "D",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Css",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "vvvvvvvvvv",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "John",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computer Science",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "Sandhya",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 1234,
      "firstName": "Soumya",
      "lastName": "B",
      "age": 22,
      "grade": 15,
      "gpa": 3.0,
      "major": "Computers",
      "course1": "Introduction to oops",
      "grade1": "A",
      "course2": "maths",
      "grade2": "A+"
    },
    {
      "studentId": 12346,
      "firstName": "XXXXXXX",
      "lastName": "B",
      "age": 24,
      "grade": 20,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c++",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12347,
      "firstName": "John",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computers",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "Sandhya",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "XXXXXXX",
      "lastName": "Doe",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Computer Science",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "aaaaaaaaaa",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    },
    {
      "studentId": 12345,
      "firstName": "yyyyyyyyyyyyyyyy",
      "lastName": "D",
      "age": 18,
      "grade": 12,
      "gpa": 3.5,
      "major": "Css",
      "course1": "Introduction to Programming",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "B+"
    },
    {
      "studentId": 12346,
      "firstName": "vvvvvvvvvv",
      "lastName": "B",
      "age": 24,
      "grade": 18,
      "gpa": 4.5,
      "major": "Computer Science",
      "course1": "Introduction to c",
      "grade1": "A",
      "course2": "Calculus",
      "grade2": "+"
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  // getJsondata() {
  //   this.http.get('assets/data.json').subscribe((data: any) => {
  //     this.tableData = data.students;
  //     console.log(this.tableData)
  //   });
  // }

  logout() {
    this.authService.logout()
  }
}
