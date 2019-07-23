import "@testing-library/react/cleanup-after-each";
import React from "react";
import App from "./App";
import { render, getByTestId } from "@testing-library/react";

it("contador vale 0 inicialmente", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("count_span").textContent).toBe("0");
});

it("Botón para restar tiene '-' como texto", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("sub_button").textContent).toBe("-");
});
it("Pulsar el botón para restar no resta si el contador esta a 0", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("count_span").textContent).toBe("0");
  const button = getByTestId("sub_button");
  button.click();
  expect(getByTestId("count_span").textContent).toBe("0");
 });


it ("pulsar el botón de sumar suma 1", ()=>{
  const {getByTestId} = render(<App/>);
  const value = getByTestId("count_span").innerText;
  getByTestId ("add_button").click();
  const endValue = +getByTestId("count_span").innerText;
  expect(endValue).toBe(value + 1 )
});

// it ("pulsar el botón de restar resta 1 se el contador es mayor que 1", ()=>{
//   const {getByTestId} = render(<App/>);

//   getByTestId("add_button").click();
//   const value = +getByTestId("count_span").innerText;
// )}
