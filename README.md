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
Este proyecto es un SPA estático. La forma recomendada es usar el **File Serve** de EasyPanel apuntando a la carpeta `dist/` que genera `npm run build`.
Alternativa: ejecutar `npm run start` (vite preview) como aplicación Node.

## Notas de build
- El `node_modules` incluido en ZIPs de macOS no funciona en Windows; siempre correr `npm install` sobre el código fuente.
- `vite.config.ts` usa `host: true` para aceptar conexiones en el contenedor del server.
