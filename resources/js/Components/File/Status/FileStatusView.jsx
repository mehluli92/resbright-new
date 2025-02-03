import InputLabel from '@/Components/InputLabel'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function FileStatusView({status}) {
    const { data } = useForm({
        id: status.id,
        rb_file_id: status.rb_file_id,
        file_opened: status.file_opened,
        controls_checked: status.controls_checked,
        tax_clearence_valid: status.tax_clearence_valid,
        worksheet_done: status.worksheet_done,
        quotation_sent: status.quotation_sent,
        duty_paid: status.duty_paid,
        entry_submitted: status.entry_submitted,
        entry_self_assessed: status.entry_self_assessed,
        entry_examined: status.entry_examined,
        query_raised_on_values: status.query_raised_on_values,
        query_raised_on_classification: status.query_raised_on_classification,
        pe_conducted: status.pe_conducted,
        query_resolved: status.query_resolved,
        entry_assessed: status.entry_assessed,
        entry_released: status.entry_released,
        entry_acquited: status.entry_acquited,
        storages_paid: status.storages_paid,
        entry_dispached: status.entry_dispached,
        goods_delivered: status.goods_delivered,
        service_fees_paid: status.service_fees_paid,
        file_closed: status.file_closed,
      })
    
      const statuses = [
        { name: 'file_opened', label: 'File Opened' },
        { name: 'controls_checked', label: 'Controls Checked' },
        { name: 'tax_clearence_valid', label: 'Tax Clearance Valid' },
        { name: 'worksheet_done', label: 'Worksheet Done' },
        { name: 'quotation_sent', label: 'Quotation Sent' },
        { name: 'duty_paid', label: 'Duty Paid' },
        { name: 'entry_submitted', label: 'Entry Submitted' },
        { name: 'entry_self_assessed', label: 'Entry Self Assessed' },
        { name: 'entry_examined', label: 'Entry Examined' },
        { name: 'query_raised_on_values', label: 'Query Raised on Values' },
        { name: 'query_raised_on_classification', label: 'Query Raised on Classification' },
        { name: 'pe_conducted', label: 'PE Conducted' },
        { name: 'query_resolved', label: 'Query Resolved' },
        { name: 'entry_assessed', label: 'Entry Assessed' },
        { name: 'entry_released', label: 'Entry Released' },
        { name: 'entry_acquited', label: 'Entry Acquitted' },
        { name: 'storages_paid', label: 'Storages Paid' },
        { name: 'entry_dispached', label: 'Entry Dispatched' },
        { name: 'goods_delivered', label: 'Goods Delivered' },
        { name: 'service_fees_paid', label: 'Service Fees Paid' },
        { name: 'file_closed', label: 'File Closed' },
      ]
  return (
    <div className="p-4 shadow-lg">
        <h2 className='text-lg font-bold py-2'>Status for tracking.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statuses.map((status) => (
                <div key={status.name} className="flex items-center gap-2">
                    <InputLabel htmlFor={status.name} value={status.label} />
                    <div className={`w-4 h-4 rounded-full ${data[status.name] ? 'bg-cyan-900':''} `}></div>
                </div>
            ))
            }
        </div>
        
    </div>
  )
}
