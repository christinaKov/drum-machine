import React, { useEffect, useRef, useState } from 'react';

const DrumPad = ({audio, audioName, note, setDisplayingText, power, volume}) => {
  const [active, setActive] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    document.addEventListener('keydown', function(e){
      if (e.key === note || e.key.toUpperCase() === note) {
        divEl.current.click();
      }
    })
  })

  const start = e => {
    if (power) {
      setDisplayingText(audioName)
      e.target.children[0].volume = volume;
      e.target.children[0].play()
    }
    setActive(true);
    setTimeout(() => setActive(false), 200);
  }

  return (
      <div ref={divEl} onClick={start} className={`drum-pad ${active ? `active` : null}`}>
        <audio src={audio} className='clip'></audio>
        <p>{note}</p>
      </div>
  )
}

export default DrumPad;