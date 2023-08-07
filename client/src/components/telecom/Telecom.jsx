import s from'./telecom.module.scss';
import voiceCall_img from '../assets/voice_call.svg'
import videoCall_img from '../assets/video_call.svg'
import msgChat_img from '../assets/chat.svg'

export const Telecom = () => {
  return (
    <div className={`${s.telecom}`}>
      <button className={`${s.btn}`}>
        <img className={`${s.vo_call}`} src={voiceCall_img} alt='voiceCall_image' />
        <p>voice call</p> 
      </button>
      <button className={`${s.btn}`}>
        <img className={`${s.vo_call}`} src={videoCall_img} alt='videoCall_image' />
        <p>video call</p>        
      </button>
      <button style={{backgroundColor:'#F0AA78'}} className={`${s.btn}`}>
        <img className={`${s.vo_call}`} src={msgChat_img} alt='msgChat_image' />
        <p>message</p>       
      </button> 
    </div>
  )
}
