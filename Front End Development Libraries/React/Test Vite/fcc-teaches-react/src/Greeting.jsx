export default function Greeting({ name, isLoggedIn }) {
  console.log(name);
  return (
    <h1 className="greeting">
      {isLoggedIn ? `Welcome back! ${name}` : "Please sign in."}
    </h1>
  );
}
