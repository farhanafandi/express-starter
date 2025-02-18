# Gunakan Node.js image dari Docker Hub
FROM node:20

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json untuk install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file aplikasi ke dalam container
COPY . .

# Jalankan aplikasi pada port 3000
EXPOSE 3000
CMD ["npm", "start"]