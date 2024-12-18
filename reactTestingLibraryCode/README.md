Is testing specific to react or typScript?
no testing is not specific to react or tp

have you ever done any testing till now in coding?
yes , manual testing.

what are requirements for testing ?

function sum(a,b){

    a=+a; // Number(a)
    b= +b;
    return a+b;

}

sum(1,2); //3
sum(2,3); //5

sum("1",3); // "13"
sum("one", "two");

1. we try to code the app.
2. we deploy or send it the testers.
3. testers will test the code with manual testing, some test-cases and QC
4. we optimise the code again if the gets rejected , and the cycle repeats.

TBD--->testing based development.

1. we finish a section of code and test it.
2. we move forward only if the section is accepted by all the test cases.

why learn testing ?

1. it add a new skill to the profile.
2. we can test our own code and make sure it is working as expected before sending to testers.
3. Reduce the bugs or errors.

React testing library
RTL is a library or set of tools provided by react to use to test our react application.

In package.json we generally have three files under testing library

1. Jest ---> Js testing framework logic ( function, if else, loops etc)
2. React --> testing the rendering of component.
3. User-event ---> test user induced events (click, onChange, onHover etc)

running tests

1. npm run test
2. our test files should have a name of \*.test.js
3. the formate we generally follow to create a test files is
   1. we create a folder called **tests** in our src folder.
   2. we create file with name ending with **.test.js**
