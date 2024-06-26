import { useQuery, gql } from "@apollo/client";
import "./App.css"

const USERS_QUERY = gql`
  {
    users {
      list {
        username
        user_id
      }
      total
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.users.list.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total of users is {data.users.total}</h3>
    </>
  );
}