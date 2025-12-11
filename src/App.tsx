import React, { useState } from 'react'
import FlowCanvas from './components/FlowCanvas'
import Sidebar from './components/Sidebar'
import NodeFormPanel from './components/NodeFormPanel'
import { simulateWorkflow } from './api'

export default function App(){
  const [selectedNode, setSelectedNode] = useState<any | null>(null)
  const [logs, setLogs] = useState<any[]>([])

  const runSim = async (graph:any) => {
    setLogs([{ message: 'Simulating...' }])
    const res = await simulateWorkflow(graph)
    setLogs(res.logs || [])
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="canvas-panel">
        <div className="topbar">HR Workflow Designer</div>

        <div className="app-grid">
          <div className="canvas-area">
            <FlowCanvas onSelectNode={setSelectedNode} onSimulate={runSim} />
          </div>

          <div className="node-form">
            <NodeFormPanel node={selectedNode} onChange={setSelectedNode} />
          </div>
        </div>

        <div className="footer">
          <div style={{flex:1}}>
            <strong>Simulation Log</strong>
            <div className="log">
              {logs.map((l:any,i)=> (
                <div key={i}>{i+1}. {l.message}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
