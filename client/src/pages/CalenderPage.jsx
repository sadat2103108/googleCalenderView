import React from 'react'

const CalenderPage = () => {
    const calenderLink = "https://calendar.google.com/calendar/embed?src=8f29ba714e36a60f91e5b15ba971aa4d4eb2c87c8e168afc52aa287dbe5098ea%40group.calendar.google.com&ctz=Asia%2FDhaka&mode=WEEK" ;
  return (

    <>
      <div style={{ textAlign: "center", marginTop:"20px" }}>RAPL CALENDAR</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <iframe
          src= {calenderLink}
          style={{ border: "0", width: "80%", height:"600px" }}
        ></iframe>
      </div>
    </>
  )
}

export default CalenderPage