import React from 'react'
import Navbar from './Navbar'
function Archived({archivedNotes=[]}) {
  return (
            <div>
                <h1>Archived Notes</h1>
                <div className="container">
                    {archivedNotes.map((entry, index) => (
                        <div key={index} className="entry">
                            <div>{entry.title}</div>
                            <h4>{entry.note}</h4>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default Archived