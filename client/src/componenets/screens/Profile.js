import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '..//..//App'

const Profile = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost)
        })
    },[])
    return (
      <div style={{maxWidth:"550px",margin:"0px auto"}}>
              <div style={{
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"18px 0px",
                  borderBottom:"1px solid grey"
              }}>
                  <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src="https://images.unsplash.com/photo-1569007889977-42e2392850d7?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=500q=60"
                   />
                   </div>
                <div>
                <div>
              <h4>{state?state.name:"loading"}</h4>
              <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                  <h5>40 posts</h5>
                  <h5>40 followers</h5>
                  <h5>40 following</h5>
              </div>
        </div>
    </div>
   </div>
            
            <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                           <img keys={item._id} className="item" src={item.photo} alt={item.title} alt={item.title}/>
                       )
                   })
               }

            </div>
        </div>
    )
}

export default Profile