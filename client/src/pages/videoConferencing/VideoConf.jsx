import React from 'react'

export const VideoConf = () => {

  const handleNavigate = () => {
    
    const externalURL = 'https://meet.jit.si';

    // Navigate to the external URL, replacing the current page
    window.location.href = externalURL;
  };

  // const externalURL = 'https://meet.jit.si';
  const externalURL = 'https://meet.jit.si/medHealth024';
  

  return (
    <div>
      <h3>Welcome to MedHealt-assist</h3>

      <h5>Want to see a doctor, click the button below</h5>
      
      <div>
          <h1>My React App</h1>

          <iframe
            src={externalURL}
            title="External Website"
            width="800"
            height="400"
            frameBorder="0"
            overflow= 'hidden'
            scrolling= "no"
          />
      </div>


      <button onClick={handleNavigate} >Start a video</button>

    </div>
  )
}
