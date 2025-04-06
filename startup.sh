#!/bin/bash
set -e

# Check if node_modules directory exists in the current directory (project root)
if [ ! -d "node_modules" ]; then
  # If node_modules does not exist, print message and install dependencies
  echo "INFO: node_modules not found. Installing dependencies..."
  npm install
fi

# After dependency check/installation, print message and start the dev server
echo "INFO: Starting development server..."
npm run dev