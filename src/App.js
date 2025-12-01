// Exercise B1 – Wrong Attribute Names
function Header() {
    return (
        <div className="header">
            <h1 onClick={() => alert("Hello")}>Welcome</h1>
        </div>
    );
}

// Exercise B2 – Multiple Root Elements
function BadComponent() {
    return (
        <>
            <h1>Title</h1>
            <p>Subtitle</p>
        </>
    );
}

// Exercise B3 – Unclosed Tags
function ImageCard() {
    return (
        <div className="card">
            <img src="/logo.png" alt="Logo" />
            <p>Logo of our app</p>
        </div>
    );
}

// Exercise B4 – Using if Inside JSX
function Status({ isOnline }) {
    return (
        <div>
            {isOnline ? <p>User is online</p> : <p>User is offline</p>}
        </div>
    );
}

// Exercise B5 – Component Name & HTML Tag Confusion
function UserCard(props) {
    return (
        <div className="usercard">
            <h3>{props.name}</h3>
        </div>
    );
}

// Exercise B6 – for and class in a Form
function LoginForm() {
    return (
        <form>
            <label htmlFor="email" className="label">
                Email
            </label>
            <input id="email" type="email" />
        </form>
    );
}

// Exercise B7 – Missing key in a List
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

// Exercise B8 – Incorrect Style Usage
function Box() {
    return (
        <div style={{ backgroundColor: "red", padding: "10px" }}>
            Warning
        </div>
    );
}

// Exercise B9 – Event Handler as String
function Counter({ handleClick }) {
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

// Exercise B10 – dangerouslySetInnerHTML Misuse
function HtmlBlock({ html }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

// MAIN APP to show all components
export default function App() {
    const todos = [
        { id: 1, text: "Learn React" },
        { id: 2, text: "Finish homework" }
    ];

    const htmlString = "<strong>Hello from HTML!</strong>";

    function clickHandler() {
        alert("Clicked!");
    }

    return (
        <div style={{ padding: 20 }}>
            <Header />
            <BadComponent />
            <ImageCard />
            <Status isOnline={true} />
            <UserCard name="Feruza" />
            <LoginForm />
            <TodoList todos={todos} />
            <Box />
            <Counter handleClick={clickHandler} />
            <HtmlBlock html={htmlString} />
        </div>
    );
}
