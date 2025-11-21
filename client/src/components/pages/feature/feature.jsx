import './feature.css'



function Feature() {

    const list_data_1 =[{name: 'Brand Strategy'},{name:'Guidelines & Systems'},{name:'Identity Design'},
        {name:'UI Design'},{name:'UX Strategy'},
    ]   

    const list_data_2 =[{name: 'Prototyping'},{name:'App Design'},{name:'Web/App Development'},
        {name:'AI-Enhanced Digital Marketing'},{name:'Brand/G2M Activations'},
    ]   


  return (
    <section className='feature' id="feature">
        <div className='feature-container'>
            <h2 id="feature-title">
                FLEXIBLE AGENCY MODEL BUILT FOR YOU
            </h2>
            <video src="https://framerusercontent.com/assets/4EHdVsMTPAphodaUbRYZiAs.mp4" preload="auto" autoPlay playsInline loop id="video-feature" muted></video>
       </div>
        
        <div className='feature-list'>
                <ul id='list1'>{list_data_1.map((list1)=><li>{list1.name}</li>)}</ul>
                <ul id='list2'>{list_data_2.map((list2)=><li>{list2.name}</li>)}</ul>
        </div>


    </section>
  )
}

export default Feature
