# type-writer-words from [Kit-elements]

type-writer-words es un componente que simula el efecto de maquina de escribir 

![video demo](https://res.cloudinary.com/dijk5nuuk/image/upload/v1739903127/type-writer-video.gif)

### Instalacion

Instala con npm: 

```js
 npm install type-writer-words
```

## Uso

### Uso del componente TypeWriter 


```js
  import {TypeWriter} from "type-writer-words"
  
  function App () {
  const arrWords = ["Coding", "with", "react", "and", "typescript"]
  return (
    <TypeWriter words={arrWords} />
  )
}

```

#### Props

| Prop | Valor | Por defecto|
| ------ | ------ |------|
| words | array de strings |[] Array|
| cursor | "default" o "line" |"default" string|
| typingSpeed | tiempo de escritura|100 number|
| deletingSpeed |  tiempo de eliminación | 100 number|
| wordPause | tiempo de pausa para empezar a eliminar |2000 number|
| deletePause | tiempo de pausa para empezar a escribir |2000 number|
| color | color de texto |"#000" string|


```js
  import {TypeWriter} from "type-writer-words"
  
  function App () {
  const arrWords = ["Coding", "with", "react", "and", "typescript"]
  return (
    <TypeWriter words={arrWords} cursor={"line"} color={"#000"} typingSpeed={200} deletingSpeed={200} wordPause={3000} deletePause={3000} />
  )
}
```

# Probar

Ejecuta y visita localhost

```js
  npm run dev
```

[Kit-elements]: <https://github.com/dariomvg/kit-elements>
