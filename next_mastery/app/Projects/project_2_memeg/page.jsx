"use client"
import React,{useState,useEffect} from 'react'

const page = () => {
    const [memes, setMemes] = useState([]);
    const [selectedMemes, setSelectedMeme] = useState(null);
    const [topText,setTopText] = useState("");
    const [bottomText,setBottomText] = useState("");


    useEffect(() =>{
        const fetchMemes = async () =>{
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setMemes(data.data.memes);
            setSelectedMeme(data.data.memes[0]);
            console.log("meme data = ",data.data.memes);
        };
        fetchMemes();
    },[]);

    //Handle meme selection
    const handleChnage = (e) =>{
     const memeId = e.target.value;
     const meme = memes.find(m=>m.id == memeId);
     setSelectedMeme(meme);
    }


  return (
    <div className='container text-center mt-5'>
      <h1 className='mb-4 text-primary'>🔥 Meme Generator 🔥</h1>
      {/* Meme selection Dropdown */}
      <div className='mb-3'>
         <select className='form-select' onChange={handleChnage}>
            {memes.map(meme =>
            <option key={meme.id} value={meme.id}>{meme.name}</option>
            )}
         </select>
      </div>
      {/* meme preview */}
       {selectedMemes && (
        <div className='position-relative d-inline-block'>
            <img src={selectedMemes.url} width={400} height={400} alt="meme" className='img-fluid rounded'/>
            <p className='position-absolute top-0 start-50 translate-middle-x'>{topText}</p>
            <p className='position-absolute bottom-0 start-50 translate-middle-x'>{bottomText}</p>
        </div>
       )}
       {/* input fields */}
       <div className='row mt-3'>
          <div className="col">
            <input type="text" className='form-control' placeholder='Top text' value={topText} onChange={(e)=>setTopText(e.target.value)}/>
          </div>
          <div className="col">
            <input type="text" className='form-control' placeholder='Bottom text' value={bottomText} onChange={(e)=>setBottomText(e.target.value)}/>
          </div>
       </div>
       {/* Download button */}
       <button className='btn btn-success mt-3'>
          Download Meme
       </button>
    </div>
  )
}

export default page
