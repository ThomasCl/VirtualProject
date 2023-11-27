# Use the official Node.js LTS image
FROM node:latest

# Set the working directory
WORKDIR /app

# Set environment variable to disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only necessary files for building the application
COPY public ./public
COPY src ./src
COPY .env ./.env
COPY .eslintrc.json ./.eslintrc.json
COPY components.json ./components.json
COPY next-env.d.ts ./next-env.d.ts
COPY next.config.js ./next.config.js
COPY package-lock.json ./package-lock.json
COPY postcss.config.js ./postcss.config.js
COPY prettier.config.js ./prettier.config.js
COPY tailwind.config.ts ./tailwind.config.ts
COPY tsconfig.json ./tsconfig.json

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
