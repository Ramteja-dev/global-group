import logo from "./logo.svg";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";

import UsersList from "./components/UsersList";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <div className="App">
          <UsersList />
        </div>
      </Flex>
    </Theme>
  );
}

export default App;
