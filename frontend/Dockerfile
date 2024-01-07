# Use the official Node.js LTS image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy all necessary files
COPY . .

# Install dependencies and build the Next.js app
RUN npm install
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
