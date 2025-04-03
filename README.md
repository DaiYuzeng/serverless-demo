# Local Serverless API Demo

## 🚀 Platform Overview

- **Infrastructure as Code:** [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) (running Lambda locally)
- **Template Used:** AWS Quick Start Template
- **Runtime:** Node.js (v18+)

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

Make sure the following tools are installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- [Node.js](https://nodejs.org/) (v18 or later)

---

### 2. Clone This Repository

```bash
git clone https://github.com/daiyuzeng/serverless-demo.git
cd serverless-demo
```

---

### 3. Build the Application

```bash
sam build
```

---

### 4. Run Locally (Docker Required)

```bash
sam local start-api
```

Then open [http://localhost:3000/hello](http://localhost:3000/hello) in your browser.