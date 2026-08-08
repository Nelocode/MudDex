# MudDex — Wiki & Compendio Oficial Diosesmon

Plataforma oficial de consulta, radar de spawns, calculador de captura y guía interactiva de Cobblemon (Minecraft 1.21.1 / Fabric) para la comunidad de **Diosesmon**. Creado por **Mudkill**.

## 🌟 Funcionalidades Principales

1. **Radar de Spawns & Recetas de Bloques**: Coordenadas Y, biomas y trucos de colocación de bloques para forzar spawns.
2. **Calculador Matemático de Captura Gen 8/9**: Tasa de éxito por Pokéball con multiplicadores en vivo.
3. **Pokédex de 1,025 Especies**: Sprites HD, animaciones Shiny, audios de rugido y estadísticas base.
4. **Enciclopedia de Objetos Equipables & Bayas**: Efectos en combate, bonificadores y métodos de obtención.
5. **Calculadora de Caza de Shinies (Shiny Hunting)**: Avistamientos acumulados con Amuleto Iris y Poder Variocolor.
6. **Matriz Interactiva de Efectividad de Tipos 18x18**: Debilidades 4x/2x, resistencias e inmunidades.
7. **Tier List Competitiva & Roles PvP**: Builds recomendados, naturalezas e ítems.
8. **Minijuego PokéQuiz ("¿Quién es este Pokémon?")**: Modos Silueta y Rugido de Audio.
9. **Guía de Entrenamiento de EVs**: Zonas de farming y objetos recios (+8 EVs).
10. **Perfil de Minecraft por Nickname & Backup JSON**: Cabeza 3D del skin de Minecraft y persistencia de datos.

## 🚀 Instalación y Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en puerto 3000
npm run dev

# Compilar para producción
npm run build
```

## 🐳 Despliegue con Docker / Easypanel

Este proyecto cuenta con un `Dockerfile` multi-stage ligero con Node 20 y Nginx Alpine.

1. Conecta tu repositorio a **Easypanel**.
2. Selecciona Build Method: **Dockerfile**.
3. Puerto del contenedor: **80**.
