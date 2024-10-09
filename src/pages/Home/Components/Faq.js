import React from 'react'
import { Accordion } from './Accordion'


const faqs = [
  {
    id: 1,
    question: "Why should I use CodeBook?",
    answer: "Loer ipsum Loer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsum"
  },
  {
    id: 2,
    question: "Why should I use CodeBook?",
    answer: "Loer ipsum Loer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsum"
  },
  {
    id: 3,
    question: "Why should I use CodeBook?",
    answer: "Loer ipsum Loer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsum"
  },
  {
    id: 4,
    question: "Why should I use CodeBook?",
    answer: "Loer ipsum Loer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsum"
  },
  {
    id: 5,
    question: "Why should I use CodeBook?",
    answer: "Loer ipsum Loer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsumLoer ipsum"
  }
]


export const Faq = () => {
  return (
    <div className='mt-16 px-6 border border-red-100 pt-10 dark:text-slate-100'>
      <h1 className="text-3xl text-center font-semibold dark:text-slate-100 mb-6 underline underline-offset-8">Question in mind?</h1>
      {faqs.map((faq) => (
        <Accordion key={faq.id} faq={faq} />
      ))}
    </div>
  )
}
