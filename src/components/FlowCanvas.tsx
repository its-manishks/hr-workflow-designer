import React, { useCallback, useState } from 'react'
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer'
import { v4 as uuid } from 'uuid'

export default function FlowCanvas({ onSelectNode, onSimulate }){
  const [nodes, setNodes] = useState<any[]>([
    { id: 'start-1', type: 'start', position: { x: 50, y: 50 }, data: { title: 'Start' } }
  ])
  const [edges, setEdges] = useState<any[]>([])

  const onConnect = (params:any) => setEdges((eds)=>addEdge(params, eds))

  const onDrop = useCallback((event:any) => {
    event.preventDefault()
    const type = event.dataTransfer.getData('node/type')
    const bounds = event.currentTarget.getBoundingClientRect()

    const position = {
      x: event.clientX - bounds.left - 50,
      y: event.clientY - bounds.top - 20
    }

    const id = `${type}-${uuid().slice(0,6)}`
    const newNode = { id, type, position, data: { title: type } }

    setNodes((ns)=>ns.concat(newNode))
  }, [])

  const onDragOver = (e:any)=>{ e.preventDefault() }

  const simulate = () => {
    onSimulate({ nodes, edges })
  }

  return (
    <div style={{height:'100%'}} onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodeClick={(e, n)=> onSelectNode(n)}
        fitView
        style={{width:'100%',height:'100%'}}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>

      <button
        onClick={simulate}
        style={{position:'absolute', right:20, top:20}}
        className="button small"
      >
        Simulate
      </button>
    </div>
  )
}
