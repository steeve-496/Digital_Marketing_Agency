import './feature.css'

function Feature({featureTitle, featureUrl, featureData_1= [], featureData_2 = []}) {
  return (
    <section className='feature' id="feature">
        <div className='feature-container'>
            <h2 id="feature-title">
                {featureTitle}
            </h2>
            <video src={featureUrl} preload="auto" autoPlay playsInline loop id="video-feature" muted></video>
       </div>
        
        <div className='feature-list'>
                <ul id='list1'>{featureData_1.map((list1,index)=><li key={index}>{list1.name}</li>)}</ul>
                <ul id='list2'>{featureData_2.map((list2 ,index)=><li key={index}>{list2.name}</li>)}</ul>
        </div>


    </section>
  )
}

export default Feature
