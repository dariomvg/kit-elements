# Format dates from [Kit-elements]

format-dates es un conjuntos de funciones dónde devuelven distintos formatos de fechas y horarios

## Temas

- Distintos formatos 
- Hora 


### Instalacion

Instala con npm: 

```js
 npm install format-all-dates 
```

## Uso

### format-dates contiene 5 funciones: 

#### getFirstDate

```js
  const date = getFirstDate();
  console.log(data); // 11/05/2023
```

#### getSecondDate

```js
  const date = getSecondDate();
  console.log(data); // 4 may 2025
```

#### getShortDate

```js
  const date = getShortDate();
  console.log(data); // 11/06
```

####  getCompleteDate

```js
  const date = getCompleteDate();
  console.log(data); // Monday, May 5, 2024
```
o se le puede pasar "short" para acortar ese formato

```js
  const date = getCompleteDate("short");
  console.log(data); // Mon 5 May 
```
#### getLocalHour

```js
  const hour = getLocalHour();
  console.log(hour); // 5:05
```

# Probar

Ejecuta y visita localhost

```js
  npm run dev
```

[Kit-elements]: <https://github.com/dariomvg/kit-elements>
