import React from 'react'

interface props {
  type: string
}

const Pill: React.FC<props> = ({ type }) => {
  return (
    <>
      {type === 'issue' && (
        <p className="text-sm-txt font-fb-bold text-error px-6 py-1 bg-error bg-opacity-20 rounded-full">
          Error
        </p>
      )}
      {type === 'idea' && (
        <p className="text-sm-txt font-fb-bold text-warning px-6 py-1 bg-warning bg-opacity-20 rounded-full">
          Idea
        </p>
      )}
      {type === 'other' && (
        <p className="text-sm-txt font-fb-bold text-grey-700 px-6 py-1 bg-grey-700 bg-opacity-20 rounded-full">
          Other
        </p>
      )}
    </>
  )
}

export default Pill
