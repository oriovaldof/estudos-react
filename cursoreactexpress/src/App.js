
import './App.css';
import FirstComponent from "./components/Exemplos/FirstComponent/FirstComponent";
import AnotherComponent from "./components/Exemplos/AnotherComponent/AnotherComponent";
import ImagenComporent from './components/Exemplos/ImagenComponent/ImagenComporent';
import HookExemploComponet from './components/Exemplos/HookExemploComponet/HookExemploComponet';
import ListExemploComponent from './components/Exemplos/ListExemploComponent/ListExemploComponent';
import {RenderCondExemploComponent, RenderCondExemploComponentSimpes} from './components/Exemplos/RenderCondExemploComponent/RenderCondExemploComponent';
import FragmentExemplo from './components/Exemplos/FragmentExemplo/FragmentExemplo';
import ContainerExemplo from './components/Exemplos/ContainerExemplo/ContainerExemplo';

function App() {
  return (
    <div className="App">
     <h2>Ola Mundo!</h2>
     <FirstComponent/>
     <AnotherComponent />
     <ImagenComporent />
     <HookExemploComponet />
     <ListExemploComponent />
     <RenderCondExemploComponentSimpes x={5} y={255} />
     <RenderCondExemploComponent v={10} />
     <FragmentExemplo />
     <ContainerExemplo>
      <h1>Este é o filho do container</h1>
     </ContainerExemplo>
    </div>
  );
}

export default App;
