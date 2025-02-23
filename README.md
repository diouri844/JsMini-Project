# Student Grades Calculator

## Project Description:

Teachers will use this application to input and store student grades for multiple subjects.
The program will process these grades to provide useful insights such as the average, minimum, and maximum grades for each student, as well as the overall class average.
The application will run entirely in the terminal, and student data will be predefined in the script.

## Functional Requirements:

### 1. Student Data:

- Predefine a list of students with their names and grades for multiple subjects.

```javascript
const students = [
  { name: 'Alice', grades: [85, 92, 78, 94] },
  { name: 'Bob', grades: [72, 88, 91, 85] },
  { name: 'Charlie', grades: [89, 91, 92, 93] },
  { name: 'Diana', grades: [70, 65, 80, 72] }
]
```

### 2.Grade Calculation Functions:

- calculateAverage(grades): Calculate the average grade from an array of grades.
- findMinimum(grades): Find the minimum grade from an array of grades.
- findMaximum(grades): Find the maximum grade from an array of grades.

  ```javascript
  function calculateAverage() {}

  // Function to find minimum grade
  function findMinimum() {}

  // Function to find maximum grade
  function findMaximum() {}
  ```

### 3.Individual Student Analysis:

- For each student, display their name, average grade, minimum grade, and maximum grade.

```javascript
function calculateClassAverage() {}
```

### 4.Overall Class Analysis:

- Calculate and display the overall class average grade.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

````

2. Navigate to the project directory:
   ```sh
   cd number_analyzer
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To run the number analyzer, use the following command:

```sh
npm run dev
```
````
