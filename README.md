# CS Ticket System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=netlify)](https://tickets-system-cs.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/web-joyanta/cs-ticket-system)

**Live Link:** https://tickets-system-cs.netlify.app
**GitHub Repository:** https://github.com/web-joyanta/cs-ticket-system

---

## Project Overview

The **CS Ticket System** is a React-based application designed to manage customer support tickets. It demonstrates core React concepts such as components, props, state management, and event handling while providing a clean and responsive user interface.

---

# React Concept Questions

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React that allows developers to write HTML-like code inside JavaScript.

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;
```

### Why JSX is used

- Makes UI code easier to read and write.
- Allows combining HTML structure with JavaScript logic.
- Helps React understand how the UI should look.
- Improves developer experience and debugging.

JSX is not required in React, but it is widely used because it simplifies UI development.

---

## 2. What is the difference between State and Props?

| Feature    | State                                | Props                                |
| ---------- | ------------------------------------ | ------------------------------------ |
| Definition | Data managed inside a component      | Data passed from parent component    |
| Mutability | Mutable (can change)                 | Immutable (read-only)                |
| Usage      | Used for dynamic data and UI updates | Used to pass data between components |
| Control    | Controlled by the component itself   | Controlled by the parent component   |

**Example:**
```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage **state**.

### Syntax
```jsx
const [state, setState] = useState(initialValue);
```

### Example
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

### How it works

1. `useState()` initializes a state variable.
2. It returns two values:
   - The current state value.
   - A function to update the state.
3. When the state updates, React re-renders the component.

---

## 4. How can you share state between components in React?

State can be shared between components using several approaches.

### 1. Lifting State Up (Most Common)

Move the state to the **closest common parent component** and pass it down via props.

**Example structure:**
```
Parent Component
   ├── Child A
   └── Child B
```

Both children receive the shared state from the parent.

### 2. Context API

Used for global state that needs to be accessed by many components without prop drilling.

### 3. State Management Libraries

For large applications:

- Redux
- Zustand
- Recoil

---

## 5. How is event handling done in React?

Event handling in React works similarly to HTML but uses **camelCase syntax** and functions.

### Example
```jsx
function ButtonExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Key Points

- Event names use camelCase (e.g., `onClick`, `onChange`).
- Functions are passed as event handlers.
- React uses **Synthetic Events** for cross-browser compatibility.

---

# Technologies Used

| Technology   | Purpose       |
| ------------ | ------------- |
| React        | UI Library    |
| Tailwind CSS | Styling       |
| DaisyUI      | UI Components |
| React Icons  | Icons         |
| Netlify      | Deployment    |

---

# Author

**Developer:** Joyanta
**GitHub:** https://github.com/web-joyanta