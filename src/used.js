// import { useState,useEffect } from "react"

// const fake = [
//     {
//         id:1,
//         title:'Arrow function'
//     },
//     {
//         id:2,
//         title:'SPA/MPA'
//     },
//     {
//         id:3,
//         title:'JS modules'
//     }
// ]

// function Content(){
//    const [less, setLess]= useState(1)
//    const[note, setNote]=useState('')
//     const[listNote,setListNote] = useState([])
//    const hanldeAdd = ()=>{
//        setListNote(prev => [...prev,note])
//    }

  

//    useEffect(()=>{
//        const hanldeComment = ({detail})=>{
//         console.log(detail)
//        }
//        window.addEventListener(`lesson-${less}`, hanldeComment)
//        return()=>{
//        window.removeEventListener(`lesson-${less}`, hanldeComment)
//        }
//    },[less])

//       return(
//         <div>
//              <input
//              value={note}
//              onChange={(e)=>{setNote(e.target.value)}}
//              ></input>
//              <button
//              onClick={hanldeAdd}
//              >ADD</button>
//          <ul>
//              {fake.map((course,index)=>(
//                 <li
//                  key={course.id}
//                  style={less===course.id?{color:'red'}:{}}
//                  onClick={()=>setLess(course.id)}
//                  >
//                 {course.title}</li>)
//              )}
//          </ul>
//         </div>
    
        
//       )
      
// }
// export default Content