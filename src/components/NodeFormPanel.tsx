import React, { useEffect, useState } from 'react'
import { fetchAutomations } from '../api'

export default function NodeFormPanel({ node, onChange }){
  const [local, setLocal] = useState<any>(null)
  const [actions, setActions] = useState<any[]>([])

  useEffect(()=>{ fetchAutomations().then(setActions) }, [])
  useEffect(()=>{ setLocal(node ? {...node.data} : null) }, [node])

  if (!node) return <div>Select a node</div>

  const update = (patch:any) => {
    const updated = {...local, ...patch}
    setLocal(updated)
    onChange({...node, data: updated})
  }

  const type = node.type

  return (
    <div>
      <h3>{type.toUpperCase()} Node</h3>

      {type === 'start' && (
        <>
          <label>Start Title</label>
          <input value={local?.title||''} onChange={(e)=>update({title:e.target.value})} />
        </>
      )}

      {type === 'task' && (
        <>
          <label>Title</label>
          <input value={local?.title||''} onChange={(e)=>update({title:e.target.value})} />
          <label>Description</label>
          <textarea value={local?.description||''} onChange={(e)=>update({description:e.target.value})} />
          <label>Assignee</label>
          <input value={local?.assignee||''} onChange={(e)=>update({assignee:e.target.value})} />
        </>
      )}

      {type === 'approval' && (
        <>
          <label>Title</label>
          <input value={local?.title||''} onChange={(e)=>update({title:e.target.value})} />
          <label>Approver Role</label>
          <input value={local?.role||''} onChange={(e)=>update({role:e.target.value})} />
        </>
      )}

      {type === 'auto' && (
        <>
          <label>Title</label>
          <input value={local?.title||''} onChange={(e)=>update({title:e.target.value})} />

          <label>Action</label>
          <select value={local?.action||''} onChange={(e)=>update({action:e.target.value, params:{}})}>
            <option value="">-- select --</option>
            {actions.map(a=> <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>

          {local?.action && (
            <div>
              {actions.find(a=>a.id===local.action)?.params.map((p:string)=>(
                <div key={p}>
                  <label>{p}</label>
                  <input
                    value={local?.params?.[p] || ''}
                    onChange={(e)=>update({params:{...(local.params||{}), [p]:e.target.value}})}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {type === 'end' && (
        <>
          <label>Message</label>
          <input value={local?.message||''} onChange={(e)=>update({message:e.target.value})} />
        </>
      )}
    </div>
  )
}
