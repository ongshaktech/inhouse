import React from 'react'
import ActiveTask from './components/ActiveTask'
import WorkPlan from './components/WorkPlan'
import Toast from '../../components/ui/Toast'

export default function Home() {
  return (
    <div>
        <ActiveTask />
        <WorkPlan />
        <Toast />
    </div>
  )
}
