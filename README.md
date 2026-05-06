# ACCEA API Documentation

This repository contains the internal API Reference Guide for ACCEA, built using [VitePress](https://vitepress.dev/). 

---

## Getting Started (First-Time Setup)

If you have just cloned this repository for the first time, follow these steps to set up your environment and run the documentation locally.

### 1. Initialize and Install Dependencies
Open your terminal, navigate to the project directory, and run the following commands:

```bash
# Ensure the global npm directory exists (Windows PowerShell fix)
mkdir "$env:APPDATA\npm"

# Initialize a default package.json if it doesn't exist
npm init -y

# Initialize VitePress configuration (if setting up fresh)
npx vitepress init

# Install VitePress as a development dependency
npm install -D vitepress
```
### 2. Run the Development Server
To start the local development server and view your changes in real-time, run:
```bash
npm run docs:dev
```
Once the server starts successfully, you can view the local site by opening your browser and navigating to:
```bash
http://localhost:5173/api-listings/
```

#### Screenshot
<img width="1416" height="728" alt="image" src="https://github.com/user-attachments/assets/5c2ebd78-5e59-4ed8-97d9-e1895e1b9db6" />
