FROM node:18.17.0-alpine
# Set the working directory in the container
WORKDIR /app

# Copy just the package.json and package-lock.json files to optimize caching
COPY package*.json ./

# Install production dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application (if necessary)
RUN npm run compile

# Prune dev dependencies
RUN npm prune --production

# Define the command to run when the container starts
CMD [ "npm", "start" ]
