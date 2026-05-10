<div align="center">

# 🚀 Project Break Dashboard

### Un dashboard modular con reloj, meteorología, generador de contraseñas, enlaces favoritos y fondos dinámicos.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

🔗 **Demo online:** [juanjdes.github.io/project-break-dashboard](https://juanjdes.github.io/project-break-dashboard/)

</div>

---

## ✨ Vista general

**Project Break Dashboard** es una aplicación web creada con **HTML, CSS y JavaScript vanilla** que integra varios mini-módulos independientes dentro de un mismo dashboard.

El objetivo del proyecto es practicar manipulación del DOM, eventos, `localStorage`, consumo de APIs, temporizadores, generación aleatoria y maquetación responsive.

> 🧩 Cada módulo funciona de forma independiente y también integrado en la página principal `index.html`.

---

## 🧭 Módulos incluidos

| Módulo | Descripción | Página |
|---|---|---|
| 🕒 **Reloj digital** | Muestra hora, fecha, zona horaria y frase según el momento del día. | `reloj-digital.html` |
| 🌦️ **Estación meteorológica** | Consulta el clima actual usando geolocalización y WeatherAPI. | `tiempo.html` |
| 🔐 **Generador de contraseñas** | Crea contraseñas seguras entre 12 y 50 caracteres. | `password.html` |
| 🔗 **Links interesantes** | Guarda enlaces favoritos usando `localStorage`. | `links.html` |
| 🖼️ **Fondos dinámicos** | Cambia imágenes de fondo automáticamente cada pocos segundos. | Todas |

---

## 📱 Diseño responsive

El dashboard se ha adaptado para verse correctamente en:

- 🖥️ Escritorio
- 💻 Portátiles
- 📱 Tablets
- 📲 Móviles

Se añadió una hoja específica:

```text
css/responsive.css
```

Esta capa corrige tamaños fijos, posiciones absolutas rígidas y problemas de scroll en pantallas pequeñas.

---

## 🛠️ Tecnologías utilizadas

```text
HTML5
CSS3
JavaScript Vanilla
LocalStorage
Geolocation API
WeatherAPI
GitHub Pages
```

---

## 📂 Estructura del proyecto

```text
project-break-dashboard/
├── css/
│   ├── fondo.css
│   ├── links.css
│   ├── password.css
│   ├── reloj-digital.css
│   ├── responsive.css
│   └── tiempo.css
├── img/
├── js/
│   ├── fondo.js
│   ├── links.js
│   ├── password.js
│   ├── reloj-digital.js
│   └── tiempo.js
├── index.html
├── links.html
├── password.html
├── reloj-digital.html
├── tiempo.html
└── readme.md
```

---

## 🚀 Cómo ejecutar el proyecto en local

Clona o descarga el repositorio y abre `index.html` en el navegador.

También puedes levantar un servidor local:

```bash
python -m http.server 8000 --directory project-break-dashboard
```

Después abre:

```text
http://localhost:8000/index.html
```

---

## 🔍 Funcionalidades destacadas

### 🕒 Reloj digital

- Hora en formato 24h.
- Actualización automática cada segundo.
- Fecha actual.
- Zona horaria del navegador.
- Mensajes personalizados según la hora.

### 🔐 Generador de contraseñas

- Longitud configurable.
- Uso de mayúsculas, minúsculas, números y símbolos.
- Resultado visible al instante.
- Texto largo adaptado para no romper el layout.

### 🔗 Links interesantes

- Añadir enlaces personalizados.
- Persistencia con `localStorage`.
- Eliminación individual de enlaces.
- Compatible con dashboard y página individual.

### 🌦️ Estación meteorológica

- Uso de geolocalización del navegador.
- Consulta a WeatherAPI.
- Temperatura, humedad, viento y estado del clima.
- Icono del clima actual.

### 🖼️ Fondos dinámicos

- Imágenes aleatorias.
- Cambio automático con `setInterval()`.
- Fondos integrados en cada módulo.

---

## 🧠 Aprendizajes del proyecto

Este proyecto ayuda a practicar:

- Manipulación del DOM.
- Eventos de usuario.
- Templates con `innerHTML`.
- Almacenamiento local con `localStorage`.
- Consumo de APIs externas con `fetch`.
- Uso de `async/await`.
- Temporizadores con `setInterval()` y `setTimeout()`.
- Responsive design con CSS Grid, Flexbox, `clamp()` y media queries.

---

## 🌐 Despliegue

El proyecto está publicado con **GitHub Pages**:

🔗 [https://juanjdes.github.io/project-break-dashboard/](https://juanjdes.github.io/project-break-dashboard/)

---

## 📌 Estado del proyecto

✅ Módulos principales implementados  
✅ Dashboard integrado  
✅ Fondos dinámicos  
✅ Diseño responsive  
✅ Publicado en GitHub Pages  

---

## 👨‍💻 Autor

Desarrollado por **Juan J.** como parte del primer **Project Break** de The Bridge.

<div align="center">

### ⭐ Si te gusta el proyecto, ¡dale una estrella al repositorio!

</div>