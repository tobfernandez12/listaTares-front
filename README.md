# 📝 Lista de Tareas

Una página web sencilla para crear y administrar una lista de tareas.

## 📌 Descripción

Este proyecto permite al usuario agregar tareas con una descripción, marcarlas como terminadas y eliminarlas. También cuenta con filtros para mostrar todas las tareas, las pendientes o las terminadas.

Las tareas se guardan utilizando `localStorage`, por lo que permanecen guardadas aunque se cierre o actualice la página.

JavaScript se encarga de controlar las tareas y actualizar la información mostrada en el HTML.

## ⚙️ Funciones

* ➕ Agregar tareas.
* 📝 Agregar una descripción a cada tarea.
* ✅ Marcar tareas como terminadas.
* ↩️ Volver una tarea a pendiente.
* 🗑️ Eliminar tareas.
* 🔎 Filtrar tareas:

  * Todas
  * Pendientes
  * Terminadas
* 💾 Guardar las tareas automáticamente en `localStorage`.
* 🔢 Mostrar la cantidad de tareas pendientes.

## 🛠️ Tecnologías utilizadas

* **HTML5** → Estructura de la página.
* **CSS3** → Diseño y estilos.
* **JavaScript** → Funcionamiento y lógica de la página.
* **LocalStorage** → Almacenamiento de las tareas en el navegador.

## 📂 Estructura del proyecto

```text
lista-tareas/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Cómo utilizarlo

1. Descargar o clonar el proyecto.
2. Abrir el archivo `index.html` en un navegador.
3. Escribir una tarea.
4. Agregar una descripción si se desea.
5. Presionar el botón **Agregar**.
6. Administrar las tareas utilizando los botones disponibles.

## 💾 Almacenamiento

El proyecto utiliza `localStorage` para guardar las tareas.

Esto permite que las tareas continúen disponibles después de cerrar o actualizar la página, siempre que no se borre el almacenamiento del navegador.

## 📚 Proyecto escolar

Proyecto realizado como práctica de desarrollo web para aplicar conocimientos de:

* HTML
* CSS
* JavaScript
* Manipulación del DOM
* Eventos
* Arrays y objetos
* `localStorage`
