import React from 'react'
import DashboardTitle from '@/components/admin/ui/DashboardTitle'
import ExportFilterLayoutCard from '@/components/admin/ui/ExportFilterLayoutCard'
import ExportButton from '@/components/admin/ui/ExportButton'
import Input from '@/components/admin/ui/Input'
import SelectOption from '@/components/admin/ui/SelectOption'
import Button from '@/components/admin/ui/Button'

import { status, orderLimits } from '@/lib/dashboard/orders'

const Orders = () => {
  return (
    <section className='space-y-6'>
        <DashboardTitle title="Orders" />
        <ExportFilterLayoutCard>
            <ExportButton/>
        </ExportFilterLayoutCard>
        <form className="bg-white rounded-md px-4 h-24 flex items-center space-x-4">
        <Input placeholder="Search by Customer name" className="basis-1/4" />
          <SelectOption
            className="basis-1/4"
            name="status"
            options={status}
          />
          <SelectOption
            className="basis-1/4"
            name="order-limits"
            options={orderLimits}
          />
          <div className="flex basis-1/4 space-x-3 ">
            <Button bgColor="bg-lilac" text="Filter" className="text-white" />
            <Button bgColor="bg-slate-300" text="Reset" />
          </div>
        </form>
    </section>
  )
}

export default Orders