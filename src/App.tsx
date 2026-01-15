// ============================================
// User List Challenge
// ============================================
// Task: Display users in a list with a search filter
// Time: 15 minutes
// ============================================

type User = any;

const users: User[] = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
  { id: 5, name: 'Edward Norton' },
  { id: 6, name: 'Fiona Apple' },
  { id: 7, name: 'George Lucas' },
  { id: 8, name: 'Hannah Montana' },
  { id: 9, name: 'Ivan Petrov' },
  { id: 10, name: 'Julia Roberts' }
];

// TODO: Connect this component to the parent
function SearchField(): JSX.Element {
  return <input type='text' placeholder='Search users...' />;
}

// TODO: Implement this component to display the list of users
function UserList(): JSX.Element {
  return <ul>{/* Render users here */}</ul>;
}

// TODO: Wire up the components above
function FilterableList(): JSX.Element {
  // 1. Add state for the search query
  // 2. Pass state/handler to SearchField
  // 3. Filter users based on the search query
  // 4. Pass filtered users to UserList

  return (
    <div>
      <h1>User Directory</h1>
      <SearchField />
      <UserList />
    </div>
  );
}

export default function App(): JSX.Element {
  return <FilterableList />;
}
