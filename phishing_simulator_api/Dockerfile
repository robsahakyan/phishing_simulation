# Use Node.js base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install necessary system dependencies for node-gyp and usb package
RUN apk add --no-cache python3 py3-pip make g++ \
    linux-headers libusb-dev eudev-dev

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
