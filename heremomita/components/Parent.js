import React from 'react'
import CommandLine from './CommandLine'
import Body from './Body'

const Parent = () => {
  return (
    <div className='flex justify-between'>
      <CommandLine/>
      <Body/>
    </div>
  )
}

export default Parent
