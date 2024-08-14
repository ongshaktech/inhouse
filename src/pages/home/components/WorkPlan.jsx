import React from 'react'
import WorkCard from './WorkCard'

export default function WorkPlan() {
  return (
    <div className='container mx-auto px-6'>
        <h2 className='text-2xl font-bold'>Work Plan</h2>
        <div className=" flex flex-col gap-8">
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    </div>
  )
}
