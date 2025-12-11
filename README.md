# HR Workflow Designer – Prototype

A functional HR Workflow Designer built using **React**, **React Flow**, **TypeScript**, and **Mock APIs (MSW)**.  
This prototype enables HR teams to visually design and simulate workflows such as onboarding, leave approvals, or automated document steps.

---

## 🚀 Objective

This project demonstrates:

- React + React Flow proficiency
- Modular, scalable front-end architecture
- Custom node configuration panels
- Mock API integration
- Workflow simulation and graph serialization

---

## 📁 Folder Structure
```
src/
│ App.tsx
│ main.tsx
│ styles.css
│ types.ts
│
├── api/
│ index.ts
│
├── components/
│ Sidebar.tsx
│ FlowCanvas.tsx
│ NodeFormPanel.tsx
│
└── mocks/
browser.ts
handlers.ts
```
---

## 🛠️ How to Run
```
npm install
npm run dev
http://localhost:5173
```
MSW mock APIs load automatically in development.

---

## 🧩 Node Types

**Start Node** – Title, metadata  
**Task Node** – Title, description, assignee, due date  
**Approval Node** – Title, approver role, threshold  
**Automated Step Node** – Title, select action, dynamic parameters  
**End Node** – Message, summary flag

---

## 📡 Mock API Endpoints

### `GET /automations`

Returns automation actions with dynamic parameters.

### `POST /simulate`

Accepts serialized workflow (nodes + edges) and returns step-by-step execution logs.

---

## 🧪 Workflow Simulation

- Serializes full workflow graph
- Sends to `/simulate`
- Displays ordered execution logs
- Validates workflow structure at a basic level

---

## 🧱 Design Decisions

- Architecture-first approach for scalability
- Dynamic forms for easy node-type extension
- Simplified simulation to demonstrate workflow execution flow

---

## ✅ Completed Features

- Drag-and-drop canvas with React Flow
- Five custom node types
- Editable node configuration panel
- Mock APIs with MSW
- Workflow simulation interface
- Clean, modular file structure

---


