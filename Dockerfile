# Use an official Node.js runtime as a parent image
FROM node:18

# Set environment variables (change as needed)
ENV NODE_ENV=development

# Create and set the working directory
RUN mkdir /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (same as in the docker-compose.yml)
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
