# Use the official Node.js image as the base image
FROM node:14.16.0-alpine

# Set the working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

# Install the dependencies
RUN npm i --verbose --unsafe-perm

COPY . .
# Expose the default Vite development server port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
#CMD ["yarn", "dev" , "--host",  "0.0.0.0"]
