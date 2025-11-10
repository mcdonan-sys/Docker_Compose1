# ---- Base Image ----
FROM node:18-alpine

# ---- Set Working Directory ----
WORKDIR /usr/src/app

# ---- Copy Dependency Files ----
COPY package*.json ./

# ---- Install Dependencies ----
RUN npm ci --omit=dev

# ---- Copy Application Source ----
COPY . .

# ---- Create persistent data dir (optional, e.g. SQLite) ----
RUN mkdir -p /usr/src/app/data

# ---- Environment ----
ENV NODE_ENV=production
ENV PORT=5000

# ---- Expose Port ----
EXPOSE 5000

# ---- Start Command ----
CMD ["npm", "start"]
