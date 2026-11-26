
# Use Node.js 20 as the base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Application listens on port 4100
EXPOSE 4100

# Start the application
CMD ["npm", "start"]
