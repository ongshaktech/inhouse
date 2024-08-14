import React from 'react'
import ActiveTask from './components/ActiveTask'
import WorkPlan from './components/WorkPlan'

export default function Home() {
  return (
    <div>
        <ActiveTask />
        <WorkPlan />
    </div>
  )
}
