# Estructura del Proyecto Metric-Fr

## Arquitectura de Enrutamiento

Este proyecto utiliza el sistema de enrutamiento basado en carpetas de Next.js (App Router). A continuación se detalla la estructura implementada:

### Páginas Principales

- **Landing Page**: `/src/app/page.tsx`
  - Página principal del sitio con enlaces a las demás secciones.

- **Login**: `/src/app/login/page.tsx`
  - Página para iniciar sesión de usuarios.

- **Registro**: `/src/app/register/page.tsx`
  - Página para registro de nuevos usuarios.

- **Dashboard**: `/src/app/dashboard/page.tsx`
  - Panel principal para usuarios autenticados.
  - Incluye un layout específico (`/src/app/dashboard/layout.tsx`) que permite añadir subrutas y navegación interna.

- **Error 404**: `/src/app/not-found.tsx`
  - Página personalizada para rutas no encontradas.

### Componentes

- **Navegación**: `/src/components/Navigation.tsx`
  - Barra de navegación reutilizable para toda la aplicación.

## Estructura de Carpetas

```
src/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx   # Layout específico para el dashboard
│   │   └── page.tsx     # Página principal del dashboard
│   ├── login/
│   │   └── page.tsx     # Página de inicio de sesión
│   ├── register/
│   │   └── page.tsx     # Página de registro
│   ├── favicon.ico      # Favicon del sitio
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal de la aplicación
│   ├── not-found.tsx    # Página de error 404
│   └── page.tsx         # Landing page
└── components/
    └── Navigation.tsx   # Componente de navegación
```

## Expansión Futura

Para añadir nuevas secciones al dashboard, se pueden crear carpetas adicionales dentro de `/src/app/dashboard/`. Por ejemplo:

```
src/app/dashboard/perfil/page.tsx
src/app/dashboard/estadisticas/page.tsx
src/app/dashboard/configuracion/page.tsx
```

Estas rutas serán accesibles como:
- `/dashboard/perfil`
- `/dashboard/estadisticas`
- `/dashboard/configuracion`

Y heredarán automáticamente el layout definido en `/src/app/dashboard/layout.tsx`.