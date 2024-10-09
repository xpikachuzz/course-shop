import React, { useState } from 'react'


export const Accordion = ({ faq: { id, question, answer } }) => {
  const [show, setShow] = useState(false)

  return (
    <div key={id} onClick={() => setShow(!show)} className='flex flex-col  border-b-2'>
      <div className='flex flex-row justify-between w-full text-xl border-b-2 py-2 '>
        <button className='py-2 text-left w-full'>{question}</button>
        {
          show ?
            <button className='py-2 text-sm mr-4'>^</button>
            : <button className='py-2 text-sm mr-4'>v</button>
        }
      </div>
      {
        show ?
          <div className='mb-8 text-left pt-3'>
            {answer}
          </div>
          :
          <div className=''>
          </div>

      }
    </div>

  )
}
