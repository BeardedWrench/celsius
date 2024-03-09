import { useEffect, useState } from 'react';
import { registerSubModules } from './utils/subModules';
import createModuleComponents from './services/ModuleCompiler';

function App() {
  registerSubModules();

  const [moduleComponents, setModuleComponents] = useState<
    React.ReactElement[]
  >([]);

  const variant = 'condensed';

  useEffect(() => {
    createModuleComponents(variant).then((components) => {
      setModuleComponents(components);
    });
  }, [variant]);

  return (
    <div className="App">
      <header className="App-header">{moduleComponents}</header>
    </div>
  );
}

export default App;
