# nombre de paquetes

kit-elements-...

# archivo de exportacion: import y export 


carpeta src/index.tsx exportar componentes asi: ↓


import Component from "..."
export { Component } 

# package json

 "name": "components-fast", // nombre del paquete
  "private": false,
  "version": "0.0.4", // cambiar version con cada actualización
  "type": "module",
  "main": "./src/components/index.jsx", // aca ruta donde esta el archivo de exportacion
  "scripts": {
    "dev": "vite --port 3000", // cambiar ruta para pruebas del paquete
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },

  # Publicar en npm el paquete

- npm login 

- npm publish --access public

probar en otro proyecto: 

- npm install nombre-de-tu-paquete

