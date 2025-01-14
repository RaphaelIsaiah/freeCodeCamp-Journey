export const Footer = () => {
  return (
    <footer>
      <h3 className="foot-text">The Footer Company</h3>

      <div className="links">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">CSR Activities</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Vision</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
        </ul>
      </div>

      <p className="copyright">© 2025 The Footer company</p>
    </footer>
  );
};

export function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
}

export function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "block",
    margin: "1rem auto 1rem",
  };

  return (
    <>
      <button style={defaultStyles}>{buttonText}</button>
      <button
        style={{
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export function DynamicButton({ isActive }) {
  const buttonStyles = {
    backgroundColor: isActive ? "green" : "red",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "3rem",
  };

  return (
    <button className="hover-button" style={buttonStyles}>
      Login
    </button>
  );
}
