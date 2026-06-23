Part 1: The Blueprint Quiz
Answer these questions briefly in your own words.

1. JSX Under the Hood: Why can't the browser directly read JSX, and what does Vite (or Babel) convert your <h1 className="title"> tag into?

Ans:
Browsers cannot understand JSX because it is not standard JavaScript. Vite or Babel transpiles JSX into JavaScript function calls such as React.createElement() or _jsx() from react/jsx-runtime, which browsers can execute.


<h1 className="title">Hello</h1>
↓

import { jsx as _jsx } from "react/jsx-runtime";

_jsx("h1", {
  className: "title",
  children: "Hello"
});

↓
React Element Object

↓
Real DOM Element
↓
Displayed in the Browser

2. Capital Letters: What happens if you define a custom component as function myButton() { ... } and try to render it as <myButton /> Why?


Ans:
React components must start with a capital letter because JSX uses capitalization to distinguish custom components from HTML elements. Writing <myButton /> causes React to treat it as an HTML tag, while <MyButton /> is recognized as a React component and compiled to React.createElement(MyButton).

To make it work as a React component, you must capitalize its name:

function MyButton() {
  return <button>Click me</button>;
}

<MyButton />

Now JSX transforms it into:

React.createElement(MyButton, null);

Here, MyButton refers to the JavaScript function itself, so React invokes the function and renders its returned JSX.


3. The 0 Bug: Explain why {comments.length && <span>Comments</span>} might render a stray 0 on the screen if there are no comments, and provide the correct way to write this condition.

Ans:
{comments.length && <span>Comments</span>} may render 0 when there are no comments because comments.length is 0, and 0 && ... evaluates to 0. React renders numbers, including 0, but ignores booleans like false. The correct approach is to use an explicit boolean condition such as:

{comments.length > 0 && <span>Comments</span>}

or

{!!comments.length && <span>Comments</span>}