# Stage 1
FROM node:14-alpine as builder
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
EXPOSE 80
COPY --from=builder /app/dist/hahn-softwareentwicklung-solution /usr/share/nginx/html