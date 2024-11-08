import {React,useEffect,useState} from "react";
import axios  from 'axios'
import './style.css'
function Book(props) {
  let[bookName,setBookName]= useState( "")
  const[authorName,setAuthorName]=useState("")
  const[startDate,setStartDate]=useState(null)
  const[endDate,setEndDate]=useState(null)
  const[data,setData]=useState([])
  const submitDetails = async(e) =>{
     e.preventDefault()    
     if (!bookName || !authorName || !startDate || !endDate){
      alert("please enter all feilds")
      return;
     }
     try{
     const response= await axios.post('http://localhost:8000/book'
      ,{bookName,authorName,startDate,endDate})
     console.log("successsssss",response.data)
     setData([...data,{bookName,authorName,startDate,endDate}])
     setBookName("")
     setAuthorName("")
     setStartDate(null)
     setEndDate(null)
     }
     catch(error){
      console.log(error,"something went wrong")
     }
  }
  function clearDetails(){
    setBookName("")
     setAuthorName("")
     setStartDate(null)
     setEndDate(null)  
     }    
 
  
  return (
  <div  className="student">
    <form onSubmit={submitDetails}>
           <div className="studentDetails">              
               <h1>Book Details</h1>            
               <label>BookName:                           
               <input onChange={(e)=>setBookName(e.target.value)}
               value={bookName}
               type="text" placeholder="enter  BookName"/> </label>     
               <label>AuthorName:       
                <input 
                onChange={(e)=>{setAuthorName(e.target.value)}}
                  value={authorName}
                  placeholder="enter your AuthorName"/></label>                             
                 <label>StartDate:
                 <input                 
                  type="date"
                  onChange={(e)=>{setStartDate(e.target.value)}}
                 />
                 </label>
                 <label>EndDate:
                 <input
                  type="date"
                  onChange={(e)=>{setEndDate(e.target.value)}}
                 />
                 </label>             
                <div>
                     <button 
                     onClick={submitDetails}
                     style={{marginRight:"10px"}} type="submit">Submit</button>                                
                     <button 
                      onClick={clearDetails}
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
                          <th>BookNameName</th>
                          <th>AuthorName</th>
                          <th>startDate</th>
                          <th>endDate</th>
                       </tr>
                    </thead>
                    <tbody>                
                     {data && data.map((item,index) => (
                        <tr key={index}>
                           <td>{item.bookName}</td>
                           <td>{item.authorName}</td>
                           <td>{item.startDate}</td>
                           <td>{item.endDate}</td>                           
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
export default Book
