import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: 'https://placehold.jp/3d4070/ffffff/150x150.png',
      places: 3
    }
  ]
  return <UsersList items={USERS} />
}

export default Users