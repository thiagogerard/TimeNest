export default function Profile() {
  const username = localStorage.getItem('username');

    return <h1>Welcome, {username}</h1>;
  }
  