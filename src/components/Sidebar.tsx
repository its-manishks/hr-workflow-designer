import React from 'react'

const NODE_TYPES = [
  { type: 'start', label: 'Start' },
  { type: 'task', label: 'Task' },
  { type: 'approval', label: 'Approval' },
  { type: 'auto', label: 'Automated Step' },
  { type: 'end', label: 'End' }
]

export default function Sidebar(){
  return (
    <div>
      <h3>Nodes</h3>
      {NODE_TYPES.map(n=> (
        <div key={n.type} className="node-card" draggable
          onDragStart={(e)=> e.dataTransfer.setData('node/type', n.type)}>
          {n.label}
        </div>
      ))}
      <div style={{fontSize:12, marginTop:8}}>
        Drag a node onto the canvas.
      </div>
    </div>
  )
}
