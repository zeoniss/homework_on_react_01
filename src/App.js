// Data
import user from './user.json';

// Components
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';

const App = () => {
  return (
    <Container>
      <h1>
        <em>Профиль социальной сети</em>
      </h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
export default App;
