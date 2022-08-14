import Button from "./Button";

export const EnabledButton = () => <Button>Button</Button>;
export const DisabledButton = () => <Button disabled>Button</Button>;
export const ClickEvent = () => (
  <Button onClick={() => alert("clicked")}>Click me</Button>
);
