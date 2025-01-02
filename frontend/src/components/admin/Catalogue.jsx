import React from 'react';

import DashboardTitle from './ui/DashboardTitle';
import ExportFilterLayoutCard from './ui/ExportFilterLayoutCard';
import ExportButton from './ui/ExportButton';
import Button from './ui/Button';

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
        <form action="" className="bg-white rounded-md px-4 h-24 flex items-center space-x-8">
            <input type="text" />
            <select name="" id=""></select>
        </form>

    </section>
  )
}

export default Catalogue