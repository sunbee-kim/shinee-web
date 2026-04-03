# Use official Node.js LTS image
FROM node:lts

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js static export
RUN npm run build

# Install http-server to serve the out directory
RUN npm install -g serve

# Expose the port for static server
EXPOSE 3000

# Serve the static files from out directory
CMD ["serve", "-s", "out", "-l", "3000"]
