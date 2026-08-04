# ---------------------------------------------------------------
# STAGE 1: BUILD
# Compila la app con Node + Vite
# ---------------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Dependencias primero (caching de capa de Docker)
COPY package.json package-lock.json ./
RUN npm ci

# Código fuente y build de producción
COPY . .
RUN npm run build

# ---------------------------------------------------------------
# STAGE 2: RUNTIME
# Sirve los estáticos con Nginx (rápido y ligero)
# ---------------------------------------------------------------
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Config SPA: sirve index.html para rutas que no existan en disco
# (fallback para navegación de cliente como /project/xyz)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
