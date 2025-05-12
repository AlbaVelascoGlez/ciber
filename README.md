# Ciber

Ciber es una página web informativa sobre ciberseguridad, diseñada para mantener a los usuarios actualizados con las últimas noticias, consejos y recursos sobre seguridad digital.

## Características principales

- **Noticias de ciberseguridad:** Vista dinámica que consume un archivo JSON para mostrar las últimas novedades del sector.
- **Diseño moderno y responsivo:** Adaptado para todo tipo de dispositivos.
- **Secciones informativas:** Sobre nosotros, contacto y más.

## Estructura del proyecto

```
├── index.html                  # Página principal
├── src/
│   ├── data/
│   │   └── news.json           # Archivo con las noticias en formato JSON
│   ├── js/
│   │   ├── script.js           # Scripts generales
│   │   └── news.js             # Lógica para mostrar las noticias
│   ├── pages/
│   │   ├── news.html           # Página de noticias
│   │   ├── about-us.html       # Página sobre nosotros
│   │   └── contact.html        # Página de contacto
│   └── styles/
│       ├── styles.css          # Estilos generales
│       ├── news.css            # Estilos para la vista de noticias
│       └── ...
└── README.md                   # Este archivo
```

## Tecnologías utilizadas

- **HTML5**: Estructura semántica de las páginas web.
- **CSS3**: Estilos modernos y responsivos, incluyendo Flexbox y Grid.
- **JavaScript (ES6+)**: Lógica para la carga dinámica de noticias y funcionalidades interactivas.
- **JSON**: Almacenamiento y consumo de datos de noticias.

## ¿Cómo ejecutar el proyecto?

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd ciber
   ```
2. **Abre el archivo `index.html` en tu navegador.**
   - No se requieren dependencias ni servidores adicionales, todo funciona de manera estática.

## ¿Cómo agregar noticias?

1. Abre el archivo `src/data/news.json`.
2. Añade un nuevo objeto dentro del array `news` con la siguiente estructura:
   ```json
   {
     "id": 4,
     "title": "Título de la noticia",
     "date": "2024-04-01",
     "image": "URL o ruta de la imagen",
     "description": "Resumen de la noticia...",
     "category": "Categoría"
   }
   ```
3. Guarda los cambios y recarga la página de noticias.

