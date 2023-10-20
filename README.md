# Times Tables Test
- Times Tables Test version 1.0.0
- This application is available [here](https://times-tables-test.netlify.app/)
- This is an application created as a student project for Laboration 3 in the course 1DV610 Mjukvarukvalitet at Linnaeus University.
- This application is written in JavaScript, HTML and CSS
- This application uses public external library [very-simple-bar-chart](https://www.npmjs.com/package/very-simple-bar-chart) 1.1.7

## What is Times Tables Test?
- Times Tables Test is an interactive application that allows you to test your multiplication table knowledge. You can easily customize the number of problems per table and your results will be viewed in the form of a clear chart.

## How do I use it?
- As a developer, see instructions further down.
- As an end-user, you are welcome to visit [Times Tables Test](https://times-tables-test.netlify.app/)!

## Instructions
- This project can be cloned by you to be further developed.
- Once the project is cloned and with you locally - run ```npm install``` to include our neccessary dependencies.
- You can now run the application locally with ```npm run dev```

## Notes for developers
- This project consists of client-side code and follows a strict MVC (Model-View-Controller) design. In this design, the "View" package is responsible for manipulating, adding, and extracting HTML elements. The "Model" package handles the business logic behind Times Tables Test, while the "Controller" serves as an intermediary, responding to events and calling either the "Model" or the "View" as needed

## Testing
- The project have been tested manually in it's live environment. These are publically available.
- [Test Specification](./project/testspecification.md)
- [Test Report](./project/testreport.md)