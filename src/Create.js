import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Osho');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added")
            setIsPending(false)
            history.push('/')
        })
        
        
    }
    
    return (  

        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Osho">Osho</option>
                    <option value="Sadhguru">Sadhguru</option>
                </select>

                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled >Adding blog...</button>}


                <h3>{title}</h3>
                <p>{body}</p>
                {body && title && <p>{ author }</p>}
                
            </form>
        </div>
    );
}
 
export default Create;