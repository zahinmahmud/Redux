# Use lightweight Node image
FROM node:alpine

# Set working directory
WORKDIR /vuejs

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose port 9000
EXPOSE 9000

# Run Vue CLI dev server on 0.0.0.0:9000
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "9000"]
