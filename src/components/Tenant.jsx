import React from 'react'

export default function Tenant() {
  return (
    <div className='request-form'>
        <h1>Welcome</h1>
        <h3>Submit Request</h3>
        <div>
            <div>
                <input type="text" placeholder="Area"/>
            </div>
            <div>
                <input type="text" placeholder="Description"/>
            </div>
            <div>
                <input type="file" placeholder="Photo"/>
            </div>
            <button>Submit</button>
        </div>
    </div>
  )
}
