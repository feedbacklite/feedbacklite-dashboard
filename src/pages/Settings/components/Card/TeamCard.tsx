import React from 'react'

const TeamCard: React.FC = () => {
  return (
    <div className="rounded-md border border-grey-600 w-full">
      <div className="w-full pt-7 text-left">
        <h3 className="text-heading-5 text-grey-800 font-fb-bold mb-4 px-7">
          Your Team
        </h3>
        <ul className="flex flex-col text-grey-700">
          <li className="flex justify-between items-center px-7 py-3 border-b border-grey-600">
            <p>aquilaafuadajo@gmail.com</p> <p>OWNER</p>
          </li>
          <li className="flex justify-between items-center px-7 py-3 border-b border-grey-600">
            <p>aquilaafuadajo@gmail.com</p> <p>MEMBER</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-7 py-4 bg-grey-400">
        <input
          name="email"
          type="text"
          placeholder="arnold@gmail.com"
          className="border placeholder-grey-600 border-grey-500 rounded-md w-2/5 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-grey-500"
        />
        <button className="py-2 px-6 text-grey-500 text-sm-txt font-fb-bold bg-white rounded-md ml-auto focus:outline-none hover:bg-opacity-60 transition duration-300 ease">
          Invite member
        </button>
      </div>
    </div>
  )
}

export default TeamCard
