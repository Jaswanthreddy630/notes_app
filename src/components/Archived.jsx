import React from 'react'
import Navbar from './Navbar'
function Archived({archivedNotes=[],onremove}) {
    const deleteNote=(entry)=>{
        onremove(entry);
    }
  return (
            <div>
                <h1>Archived Notes</h1>
                <div className="container">
                    {archivedNotes.map((entry, index) => (
                        <div key={index} className="entry">
                            <span className="delete-symbol" onClick={() => deleteNote(entry)} title="Delete">&#10006;</span>
                            <div>{entry.title}</div>
                            <h4>{entry.note}</h4>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default Archived