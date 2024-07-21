import { useState } from "react";
import '../App.css';
import Archived from './Archived';
import { Link, Route, Routes } from 'react-router-dom';
function Home() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [entries, setEntries] = useState([]);
    const [deletedNotes, setDelete] = useState([]);
    const [archivedNotes, setArchive] = useState([]);
    const [pinnedNotes, setPin] = useState([]);

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
            console.log(entries);
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

    return (
        <div>

            
        <nav>
        <Link to="/archived">Archived</Link>
        </nav>

        <Routes>
            <Route path="/archived" element={<Archived archivedNotes={archivedNotes}/>}/>
        </Routes>

            <form onSubmit={submitData}>
                <input type="text" value={title} onChange={titleChange} placeholder="Enter title" />
                <br />
                <input type="text" value={note} onChange={noteChange} placeholder="Enter note" />
                <button type="submit">Submit</button>
            </form>

            <div className="container">
                <h1>Notes</h1>
                {entries.map((entry, index) => (
                    <div key={index} className="entry">
                        <div>{entry.title}</div>
                        <h4>{entry.note}</h4>
                        <button onClick={() => deleteNote(entry)}>Delete</button>
                        <button onClick={() => archiveNote(entry)}>Archive</button>
                        <button onClick={() => pinNote(entry)}>Pin It</button>
                    </div>
                ))}
            </div>
            
            <div>
                <h1>Pinned Notes</h1>
                <div className="container">
                    {pinnedNotes.map((entry, index) => (
                        <div key={index} className="entry">
                            <div>{entry.title}</div>
                            <h4>{entry.note}</h4>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h1>Bin</h1>
                <div className="container">
                    {deletedNotes.map((entry, index) => (
                        <div key={index} className="entry">
                            <div>{entry.title}</div>
                            <h4>{entry.note}</h4>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Home;
