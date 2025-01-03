import React from 'react';

import DashboardTitle from './ui/DashboardTitle';
import ExportFilterLayoutCard from './ui/ExportFilterLayoutCard';
import ExportButton from './ui/ExportButton';
import Button from './ui/Button';
import Input from './ui/Input';

import { GoPlus } from "react-icons/go";

const Catalogue = () => {
  return (
    <section className="space-y-6">
        <DashboardTitle title="Catalogue" />
        <ExportFilterLayoutCard className='justify-between'>
            <ExportButton/>
            <Button bgColor='bg-green-500' className=' w-auto text-white px-3 flex items-center space-x-2'>
                <GoPlus/>
                <p>Add product</p>
            </Button>
        </ExportFilterLayoutCard>
        <form action="" className="bg-white rounded-md px-4 h-24 flex items-center space-x-4">
            <Input placeholder="Search product" className='basis-1/4' />
            <select name="" className='basis-1/4 h-10 border border-slate-300 rounded-md px-4 outline-none bg-slate-200'>
                <option value="">Category</option>
            </select>
            <select name="" className='basis-1/4 h-10 border border-slate-300 rounded-md px-4 outline-none bg-slate-200'>
                <option value="">Price</option>
            </select>
            <div className='flex basis-1/4 space-x-3 '>
            <Button bgColor="bg-lilac" text="Filter" className="text-white" />
            <Button bgColor="bg-slate-300" text="Reset" />
            </div>
        </form>

    </section>
  )
}

export default Catalogue