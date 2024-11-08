import {React,useEffect,useState} from "react";
import axios  from 'axios'
import './style.css'
function Student(props) {
  let[name,setName]= useState( "")
  const[email,setEmail]=useState("")
  const[photo,setPhoto]=useState(null)
  const[video,setVideo]=useState(null)
  const[data,setData]=useState([])
  const submitDetails = async(e) =>{
     e.preventDefault()    
     if (!name || !email || !photo || !video){
      alert("please enter all feilds")
      return;
     }
     try{
     const response= await axios.post('http://localhost:8000/student'
      ,{name,email,photo,video})
     console.log("successsssss",response.data)
     setData([...data,{name,email,photo,video}])
     setName("")
     setEmail("")
     setPhoto(null)
     setVideo(null)
     }
     catch(error){
      console.log(error,"something went wrong")
     }
  }
  function func(){
    setName("")
     setEmail("")
     setPhoto(null)
     setVideo(null)  
     }    
  let globalPhotoUrl 
  let globalVideoUrl
  const displayPhoto = (e) => {
    const file = (e.target.files[0])
  if(file){
   let photoUrl = URL.createObjectURL(file)
   globalPhotoUrl = photoUrl
    setPhoto(photoUrl)
  }   }
  const displayVideo = (e) => {
    const file = (e.target.files[0])
  if(file){
   let photoUrl = URL.createObjectURL(file)
   globalVideoUrl=photoUrl
   setVideo(photoUrl)
  }  }
  return (
  <div  className="student">
    <form onSubmit={submitDetails}>
           <div className="studentDetails">              
               <h1>Student Form</h1>            
               <label>Name:    
                       
               <input onChange={(e)=>setName(e.target.value)}
               value={name}
               type="text" placeholder="enter your name"/> </label>     
               <label>Email:       
                <input 
                onChange={(e)=>{setEmail(e.target.value)}}
                  value={email}
                  placeholder="enter your email"/></label>                
                <label>Upload a photo:  
                 <input 
                
                  onChange={displayPhoto}
                  
                 type="file" /></label>             
                 <label>upload a video: 
                  <input 
                  onChange={displayVideo}
                  type="file" /></label>   
                <div>
                     <button 
                     onClick={submitDetails}
                     style={{marginRight:"10px"}} type="submit">Submit</button>                                
                     <button 
                      onClick={func}
                      type="button"
                      style={{"margin":"50px auto" }}> Clear
                      </button>
                      </div>               
           </div>
           </form>          
           <div className="stu-table">
                   <table>
                    <thead>
                       <tr>
                          <th>studentName</th>
                          <th>Email</th>
                          <th>Photo</th>
                          <th>Video</th>
                       </tr>
                    </thead>
                    <tbody>                
                     {data && data.map((item,index) => (
                        <tr key={index}>
                           <td>{item.name}</td>
                           <td>{item.email}</td>
                           <td>{item.photo ?                         
                        <img src={item.photo} 
                          alt="selected"
                          style={{width:"50px",height:"50px"}} controls/>
                           : "no photo"}</td>
                            <td>{item.video ? 
                              <video width="50" height="50" controls>
    <source src={item.video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
                            
                            : "no video"}</td>
                        </tr>
                     ))}
                  </tbody>
                   </table>
              <div>
                <button
                 style={{margin:"5px 100px 90px 600px"                
                 }}
                //  onClick={editDetails}
                >Edit</button>
              </div>
           </div>            
    </div>
    
 )}          
export default Student