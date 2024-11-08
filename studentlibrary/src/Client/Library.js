import React, { useState,useEffect } from 'react'
import './style.css' 
import axios from 'axios'
function Library() {
const[studentData,setStudentData] =useState([])
const[bookData,setBookData] =useState([]) 
 useEffect(() => {
    const fetchData = async () => {
        try{
            const data= await axios.get('http://localhost:8000/library')
            console.log(data) 
            const stdData = data.data.Students.map (std =>({
                // bookName : std.bookName,
                name:std.name                
            }))
            const bookData = data.data.Books.map(book =>({
                bookName : book.bookName
            }))
            console.log("Successfully",stdData)
            setStudentData(stdData)
            setBookData(bookData)
        }
        catch(err) {console.log(err)}
    }
    fetchData()
 },[]) 
 return (
    <div className='student'>
              <h1>Welcome to Library Page</h1>             
              <form>
                    <div className='studentDetails'>
                    <label>StudentName:
                        <input 
                        list='a'
                        />                  
                        <datalist id='a'>  
                        {studentData.map((std,index) =>(
                                  <option key={index}>{std.name}</option>                                  
                                ))}
                        </datalist>   </label>            
                        <br/>
                        <label>BookName:
                        <input list='b'/>
                        <datalist id='b'>
                             {bookData.map((book,index) =>(
                                <option key={index} >{book.bookName}</option>
                             ))}
                                  {/* <option>MongoDB</option> */}
                            
                        </datalist> </label>
                        

                    </div>
              </form>
              {/* -----------TABLE-------------- */}

    </div>
  )
}

export default Library
