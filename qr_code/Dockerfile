# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run your app
CMD ["npm", "start"]
