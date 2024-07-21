import React from 'react'
function Bin({deletedNotes=[],onRemove}) {
    const removeIt=(entry)=>{
        console.log("Clicked")
        onRemove(entry);
    }
  return (
            <div>
                <h1>Bin</h1>
                <div className="container">
                    {deletedNotes.map((entry, index) => (
                        <div key={index} className="entry">
                            <span className="delete-symbol" onClick={()=>removeIt(entry)} title="Delete">&#10006;</span>
                            <div>{entry.title}</div>
                            <h4>{entry.note}</h4>
                            
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default Bin