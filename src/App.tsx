import { UserProvider } from "./contexts/UserContext";
import { RoutesPage } from "./routes";

const App = () => {
  return (
    <>
      <UserProvider>
          <RoutesPage />
      </UserProvider>
    </>
  );
}

export default App