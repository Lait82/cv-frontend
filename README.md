# CV Frontend

Este es un frontend modular en React con TypeScript que consume una API con información personal, proyectos e intereses.

## Características

- Diseño modular y fácil de extender
- Navegación sencilla entre diferentes secciones
- Paleta de colores cyberpunk personalizada
- Pixel art del avatar
- Formulario de contacto
- Filtrado de proyectos por intereses
- Diseño responsive

## Tecnologías utilizadas

- React 18
- TypeScript
- React Router v6
- CSS Modules
- Docker
- Github Actions

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── context/        # Contextos de React
├── pages/          # Páginas principales
├── services/       # Servicios para API
├── styles/         # Estilos CSS
├── types/          # Definiciones de tipos TypeScript
└── App.tsx         # Componente principal
```

## Instalación y ejecución

### Desarrollo local

1. Clona el repositorio
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```
   npm start
   ```

### Usando Docker

1. Construye la imagen:
   ```
   docker build -t cv-frontend .
   ```
2. Ejecuta el contenedor:
   ```
   docker run -p 80:80 cv-frontend
   ```

## Endpoints de la API

- `GET /api/basic_info` - Información básica personal
- `GET /api/interests` - Hobbies e información sobre capacidades
- `GET /api/projects` - Información sobre proyectos (filtrable por intereses)
- `POST /api/contact` - Formulario de contacto

## Personalización

Puedes personalizar la paleta de colores editando las variables CSS en `src/styles/App.css`.
