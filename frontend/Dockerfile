# Use the official Node.js LTS image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run dev

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
