FROM node:alpine AS alticci-front-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=alticci-front-build /app/dist/alticci-front /usr/share/nginx/html
EXPOSE 80