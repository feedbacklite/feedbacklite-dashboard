import React from 'react'

const ProjectCard: React.FC = () => {
  return (
    <div className="rounded-md border border-grey-600 w-full">
      <div className="w-full p-7 text-left border-b border-grey-600">
        <h3 className="text-heading-5 text-grey-800 font-fb-bold mb-4">
          Project Settings
        </h3>
        <label
          className="text-grey-800 text-sm-txt font-fb-bold"
          htmlFor="name"
        >
          Name
        </label>
        <input
          name="name"
          type="text"
          value="Pitiano"
          className="border border-grey-500 rounded-md w-full mt-3 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-grey-500"
        />
      </div>
      <div className="flex justify-between items-center px-7 py-4 bg-grey-400">
        <p className="text-grey-600">
          Project id: <span className="text-grey-700">fc6af43859a8bd</span>
        </p>
        <button className="py-2 px-6 text-grey-500 text-sm-txt font-fb-bold bg-white rounded-md ml-auto focus:outline-none hover:bg-opacity-60 transition duration-300 ease">
          Save
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
