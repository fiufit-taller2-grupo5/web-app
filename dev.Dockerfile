# Use the official Node.js image as the base image
FROM node:18.13.0-alpine

# Set the working directory
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# Install the dependencies
RUN yarn --pure-lockfile

COPY . .
# Expose the default Vite development server port
EXPOSE 3000

# Start the development server
CMD ["yarn", "dev" , "--host",  "0.0.0.0"]
