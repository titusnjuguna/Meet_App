import { useState,useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";




function AllMeetupsPage(){
  const [isLoading, setisLoading] = useState(true);
  const [LoadedMeetups,setLoadedMeetups] = useState([]);
  
  useEffect(()=>{
    setisLoading(true)
    fetch('https://meetapp-a3784-default-rtdb.firebaseio.com/meetups.json').then(response => {
    return response.json();
  }).then(data => {
    const meetups =[];
    for (const key in data){
      const meetup = {
        id: key,
        ...data[key]
      };
      meetups.push(meetup);
    }
    setisLoading(false);
    setLoadedMeetups(meetups);

  });
  },[]);
  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>

    );
  }

    return(
      
      
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={LoadedMeetups} />
      </section>
      

     
        

    );

    
}
export default AllMeetupsPage;