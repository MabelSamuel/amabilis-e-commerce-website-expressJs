import React from 'react'
import DashboardTitle from '@/components/admin/ui/DashboardTitle'
import ExportFilterLayoutCard from '@/components/admin/ui/ExportFilterLayoutCard'
import ExportButton from '@/components/admin/ui/ExportButton'

const Orders = () => {
  return (
    <section className='space-y-6'>
        <DashboardTitle title="Orders" />
        <ExportFilterLayoutCard>
            <ExportButton/>
        </ExportFilterLayoutCard>
        <form className="bg-white rounded-md px-4 h-24 flex items-center space-x-8">

        </form>
    </section>
  )
}

export default Orders