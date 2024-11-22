# kit-components from [Kit-elements]

kit-components es un catalogo de componentes de UI, funcionales y personalizables

### Instalacion

Instala con npm: 

```js
 npm install kit-components-ui 
```

#### Lista de componentes

- CarrouselImages
- Collapse
- Loader
- Modal
- Toggle


### Uso

CarrouselImages

```js
import { CarrouselImages } from "kit-components-ui";

function App() {
  const arrImages = [img1, img2, img3, ...]
  return (
    <ContainerViews images={arrImages} width="100%"  />
  );
};
```

| Props | Uso | Tipo |
| ------ | ------ | ------ |
| images | imagenes de muestra el slider| array|
| auto | para el paso de images automatico | boolean|
| time| tiempo de muestra de cada imagen | number|
| width | ancho del componente | string, recibe px o %|
| height| alto del componente| string, recibe px o %|

Collapse

```js
import { Collapse } from "kit-components-ui";

function App() {
  
  return (
    <Collapse title="titulo del componente" bg="dark">
      <p>lorem ipsum... </p>
    </Collapse>
  );
};
```

| Props | Uso | Tipo |
| ------ | ------ | ------ |
| children | Componente contenedor | ReactNode |
| title | titulo del componente | string|
| bg | nombre de background  | string, recibe dark o light|
| width | ancho del componente | string, recibe px o %|

Loader

```js
import { Loader } from "kit-components-ui";

function App() {
  
  return (
    <Loader />
  );
};
```

Modal

```js
import { Modal } from "kit-components-ui";

function App() {
  
  return (
    <Modal titleButton="Click">
      <h2>Titulo del modal</h2>
      <p>lorem ipsum... </p>
    </Modal>
  );
};
```

| Props | Uso | Tipo |
| ------ | ------ | ------ |
| children | Componente contenedor | ReactNode |
| titleButton | titulo del botton para abrir el modal | string |


Toggle

```js
import { Toggle } from "kit-components-ui";

function App() {
  const showMessage = () => {
    alert("¡Hello world!");
  };

  return (
    <Toggle onClick={showMessage} />
  );
};
```

| Props | Uso 
| ------ | ------ | 
| onClick | para ejecutar una función al hacer click |



# Probar

Ejecuta y visita localhost

```js
  npm run dev
```


[Kit-elements]: <https://github.com/dariomvg/kit-elements>
