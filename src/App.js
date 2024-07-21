import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Archived from './components/Archived';
import Bin from "./components/Bin";
import {  Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [entries, setEntries] = useState([]);
    const [deletedNotes, setDelete] = useState([]);
    const [archivedNotes, setArchive] = useState([]);
    const [pinnedNotes, setPin] = useState([]);
    
    const location = useLocation(); // Use useLocation to get the current path

    const titleChange = (e) => {
        setTitle(e.target.value);
    };

    const noteChange = (e) => {
        setNote(e.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        if (title.length > 0 && note.length > 0) {
            setEntries([...entries, { title, note }]);
            setTitle("");
            setNote("");
        }
    };

    const deleteNote = (entry) => {
        setDelete([...deletedNotes, entry]);
        setEntries(entries.filter(e => e !== entry));
    };

    const archiveNote = (entry) => {
        setArchive([...archivedNotes, entry]);
        setEntries(entries.filter(e => e !== entry));
    };

    const pinNote = (entry) => {
        setPin([...pinnedNotes, entry]);
        setEntries(entries.filter(e => e !== entry));
    };

    const removeHandle=(e)=>{
        setDelete(deletedNotes.filter(x => x!==e));
    }

    const removeArchive=(e)=>{
        setArchive(archivedNotes.filter(x => x!==e));
    }

    const deletePinNote=(entry)=>{
        setPin(pinnedNotes.filter(x=>x!==entry));
    }

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/archived" element={<Archived archivedNotes={archivedNotes} onremove={removeArchive} />}/>
                <Route path="/bin" element={<Bin deletedNotes={deletedNotes} onRemove={removeHandle}/>}/>
            </Routes>

            {/* Conditionally render the form and notes only if the path is not /archived */}
            {location.pathname !== "/archived" && location.pathname !== "/bin" && (
                <>
                    <form onSubmit={submitData}>
                        <input type="text" value={title} onChange={titleChange} placeholder="Enter title" />
                        <br />
                        <input type="text" value={note} onChange={noteChange} placeholder="Enter note" />
                        <button type="submit">Submit</button>
                    </form>
                    <h1>Notes</h1>
                    <div className="container">
                        {entries.map((entry, index) => (
                            <div key={index} className="entry">
                                <span className="delete-symbol" onClick={() => deleteNote(entry)} title="Delete">&#10006;</span> {/* Delete symbol */}
                                <div>{entry.title}</div>
                                <h4>{entry.note}</h4>
                                <div className="symbols">
                                    <span className="symbol" onClick={() => archiveNote(entry)} title="Archive">&#128462;</span> {/* Archive symbol */}
                                    <span className="symbol" onClick={() => pinNote(entry)} title="Pin It">&#128204;</span> {/* Pin symbol */}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        <h1>Pinned Notes</h1>
                        <div className="container">
                            {pinnedNotes.map((entry, index) => (
                                <div key={index} className="entry">
                                    <span className="delete-symbol" onClick={() => deletePinNote(entry)} title="Delete">&#10006;</span> 
                                    <div>{entry.title}</div>
                                    <h4>{entry.note}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                
                </>
            )}
        </div>
    );
}

export default App;
