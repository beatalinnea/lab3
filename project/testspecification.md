# Test Specification and Test Plan
## What will be tested and how?
* The application will be manually tested through its user interface.
* The application will be tested in a live environment [here](https://times-tables-test.netlify.app/)
* Test environment, browser: Chrome 117

## Test Cases

### UC1 - Interactivity
#### TC1.1 - Start test and view question
* Requirements: 1.1, 1.2, 2.1
* Steps
1. Click on "Start."
2. You will be presented with various options for the number of questions.
3. Click on option 1.
4. A math problem is displayed.
#### TC1.2 - Answer question and get a new one
* Requirements: 1.1, 1.2
* Steps
1. Once you are presented with the first question, enter your answer.
2. Click on 'Answer' or press Enter.
3. You will be presented with a new math problem.

### UC2 - Costumization
#### TC2.1 - Select two questions per table
* Requirements: 2.1
* Steps
1. Click on "Start."
2. Click on option 1, representing the number 2.
3. A math problem is displayed with 1 as the first operand.
4. Submit your answer.
5. Another math problem is displayed with 1 as the first operand.
6. Submit your answer.
7. A math problem is displayed with 2 as the first operand.
#### TC2.2 - Select nine questions per table
* Requirements: 2.1
* Steps
1. Click on "Start."
2. Click on option 3, representing the number 9.
3. A math problem is displayed with 1 as the first operand.
4. Submit your answer.
5. Repeat steps 3 and 4 eight times.
6. A math problem is displayed with 2 as the first operand.

### UC3 - Results
#### TC3.1 - Complete test and view results
* Requirements: 3.1
* Steps
1. Click on "Start."
2. Click on option 1, representing the number 2.
3. Answer each math problem that appears.
4. When the math problems are no longer displayed, the answer field is hidden.
5. Check that a text with your result is displayed.
6. Check that the app has generated a graph with your result.
#### TC3.2 - Verify results graph
* Requirements: 3.1, 3.2
* Steps
1. Start a test with 2 problems per table.
2. Answer correctly the first 2 math problems displayed by entering the number 2 (since it's the multiplication table for 1, the answer to, for example, 1 * 8 is always 8).
3. When the first operand is no longer 1, respond with 0.
4. Repeat step 3 until the result view is displayed.
5. Check that the graph shows a bar for table 1 that reaches up to the y-axis value of 2.
6. Check that bars for the remaining tables are at the bottom of the chart and do not reach 1.
7. Check that your total number of correct answers is displayed.
8. Check that the graph shows the number of possible correct answers per table.
9. Check that the graph shows the total number of possible correct answers.

### UC4 - User Interface
#### TC4.1 - Check initial interface and the change when starting
* Requirements: 4.1
* Steps
1. Check that the application's initial page contains a "Start" button.
2. Verify that the button mentioned above is the only button.
3. Click on the "Start" button.
4. Check that you have a new view with a "Go Back" button.
#### TC4.2  - Check the interface when test is finished
* Requirements: 4.1, 4.2
* Steps
1. Click on "Start."
2. Click on option 1, representing the number 2.
3. Answer each math problem displayed.
4. When the math problems cease, the result view is displayed.
5. Check that you have two visible buttons - "Try Again" and "Go Back."
