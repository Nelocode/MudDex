# Pokelinker

Asistente de crianza y competitivo Pokémon — guía paso a paso para criar Pokémon competitivos (IVs, naturaleza, habilidades, movimientos de huevo) con integración de builds Smogon.

## Stack
- Vite 5 + React 18 + TypeScript
- PokeAPI (pokeapi.co) para datos de Pokémon
- Datos Smogon competitivos integrados
- Persistencia en localStorage (proyectos + caja de Pokémon)

## Funcionalidades
- Selector de Pokémon (1025 especies) con búsqueda
- Configurador de objetivo: IVs objetivo (2x31 a 6x31), naturaleza, 0 IVs ATK/VEL, habilidades, movimientos de huevo
- Árbol de crianza guiado paso a paso (CRÍA 1 → CRÍA FINAL) con probabilidades de éxito
- Validación de compatibilidad de grupos huevo
- Lista de preparativos/materiales
- Builds competitivos Smogon recomendados
- Calculadora de odds para variocolor (Método Masuda + Amuleto Iris)
- Caja de Pokémon (padres) persistente con Ditto 6IV por defecto

## Scripts
- `npm run dev` — servidor de desarrollo (puerto 3000)
- `npm run build` — build de producción (TypeScript + Vite) a `dist/`
- `npm run preview` / `npm run start` — sirve el build en `dist/` en el puerto 3000

## Deploy (EasyPanel)
Este proyecto está **dockerizado**. El `Dockerfile` usa un build multi-stage:

1. **Stage `build`**: Node 20 compila la app (`npm ci && npm run build`) a `dist/`.
2. **Stage `runtime`**: Nginx Alpine sirve los estáticos de `dist/` en el puerto **80**, con configuración SPA (fallback a `index.html`) y caching de assets.

Para desplegar en EasyPanel: crea la app y apunta al `Dockerfile` del repositorio. El contenedor expone el puerto **80** (Nginx).

También puedes correrlo localmente con Docker:
```bash
docker build -t pokelinker .
docker run -p 3000:80 pokelinker
# abre http://localhost:3000
```

## Notas de build
- El `node_modules` incluido en ZIPs de macOS no funciona en Windows; siempre correr `npm install` sobre el código fuente.
- `vite.config.ts` usa `host: true` para aceptar conexiones en el contenedor del server.
