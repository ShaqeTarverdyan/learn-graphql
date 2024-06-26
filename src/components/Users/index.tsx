import { useQuery, gql } from "@apollo/client";
import "./Users.css"

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

const Users = ()  => {
  const { data, loading, error } = useQuery(USERS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.users.list.map(({user_id, username}: {user_id: string, username: string}) => (
            <tr key={user_id}>
              <td>{user_id}</td>
              <td>{username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total of users is {data.users.total}</h3>
    </div>
  );
}

export default Users