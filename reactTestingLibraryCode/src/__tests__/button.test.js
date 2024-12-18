//test case scenarios.

import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";
import App from "../App";
import Counter from "../components/Counter";

// 1. we check if the button is getting rendered
// 2. we check if the parameters are getting passed properly. (text content)
// 3. we check for functionality  ( whether function is getting called )
// 4. we check if correct function is getting called.

//syntax of test cases.
// 1. we wrap all the test casees in one container called describe("name of the test cases", ()=>{ we write our test cases inside this})
//2 .  we catch the element with getBy methods.

describe("testing button component", () => {
  //   it("button should render", () => {
  //     //we catch the element.
  //     //document.getElementById()
  //     //we need to render/call our component to catch.
  //     render(<Button children={"hi"} size={"large"} color={"red"} />);

  //     const button = screen.getByText("hi");

  //     expect(button).toBeInTheDocument();
  //   });

  it("button should render", () => {
    render(<App />);

    const button = screen.getAllByTestId("custom-button");
    // we check for the test case using the caught element.

    expect(button[0]).toBeInTheDocument();
  });

  it("checking if the parameters (children) is getting passed properly or not", () => {
    render(<App />);
    const button = screen.getAllByTestId("custom-button");
    expect(button[0]).toHaveTextContent("bye");
  });

  it("check if multiple buttons are getting created and getting props properly", () => {
    render(<App />);

    const buttons = screen.getAllByTestId("custom-button"); //this is an array.

    expect(buttons[0]).toHaveTextContent("bye");
    expect(buttons[1]).toHaveTextContent("hello");
    expect(buttons[2]).toHaveTextContent("flm");

    screen.debug();
  });
});

//counter test cases
// 1. we check if the component renders properly.
//2. we check the default count value is 0 or not.
//3. we check for the button render or not.
//4. check if hte add text is present.
//5. we check if a function is called after clicking event .
//6. we check if the text is getting changed or not.
describe("testing counter component", () => {
  it("counter should render", () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
  });

  it("should have a default value of 0 in the count or H2", () => {
    render(<App />);
    const count = screen.getByTestId("count");

    expect(count).toHaveTextContent("Count:0");
  });

  it("button should render", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("custom-button");
    buttons.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it("add button should have a default text of Add", () => {
    render(<App />);
    const buttons = screen.getAllByTestId("custom-button");
    expect(buttons[3]).toHaveTextContent("add");
  });

  it("add button should call a function when it is clicked", () => {
    const mockFunc = jest.fn(); // this is used to create dummy function for test cases.
    render(<Button func={mockFunc} />);
    const button = screen.getByTestId("custom-button");
    fireEvent.click(button); //count:1
    expect(mockFunc).toHaveBeenCalled();
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalledTimes(5);
  });

  it("should call handleAdd and update the value of count", () => {
    render(<Counter />);
    const button = screen.getByTestId("custom-button");
    const count = screen.getByTestId("count");

    expect(count).toHaveTextContent("Count:0");

    fireEvent.click(button);
    expect(count).toHaveTextContent("Count:1");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toHaveTextContent("Count:4");
  });
});
