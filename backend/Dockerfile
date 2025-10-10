node_modules
npm-debug.log
.env
.vscode
# backend/Dockerfile
FROM node:18-alpine

# create app directory
WORKDIR /app

# copy dependency manifests first for better caching
COPY package*.json ./

# install dependencies
RUN npm install --production

# copy the rest of the app
COPY . .

# create persistent data directory for SQLite
RUN mkdir -p /app/data

# ensure the app binds to 0.0.0.0 inside container (app must listen on process.env.PORT)
ENV PORT=5000
EXPOSE 5000

# start the app
CMD ["npm", "start"]

