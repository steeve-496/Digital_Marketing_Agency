import { useEffect, useState } from 'react';
import "./app.css"
import Header_s from './components/pages/header_s/header_s';
import axios  from 'axios'; 

function Admin() {

  const[content,setContent] =useState({
    title1:"",
    title2:"",
    headerTitle:"",
    leftcnt:"",
    rightcnt:"",
    aboutTitle:"",
    aboutDesc: "",
    serviceTitle : "",
    services:[
        {
            title:"",
            desc:""
        }
    ],

    featureTitle: "",
    featureData_1:[
        {
            name:""
        }
    ],
    featureData_2:[
        {
            name:""
        }
    ],
    featureUrl: "",
    footerTitle:"",
    footerDesc:"",
  })

  useEffect(()=>{
    axios.get("http://localhost:5000/api/content")
        .then(res => setContent(res.data))
        .catch(err => console.log(err));
  },[]);

  const updateField = (field, value) => {
    setContent({...content , [field] :value});
  };

  const updateService = (index,key,value) => {
    const newServices=[...content.services];
    newServices[index][key] =value;
    setContent({ ...content, services: newServices});
  };


//Features
  const updateFeature1 = (index,key,value) => {
    const newFeatures1 = [...content.featureData_1];
    newFeatures1[index][key] =value;
    setContent({...content, featureData_1: newFeatures1});
  };

  const updateFeature2 = (index,key,value) => {
    const newFeatures2 = [...content.featureData_2];
    newFeatures2[index][key] =value;
    setContent({...content, featureData_2: newFeatures2});
  };
///

//Adding SERVICES

  const addService =() =>{
    setContent({
      ...content,
      services : [...content.services, {name:"", desc: ""}],
    });
  };

//Change saves

const saveChange =() =>{
  axios.put("http://localhost:5000/api/content",content)
    .then(()=>alert("✅ Content Updated Successfully"))
    .catch(err =>console.log(err));

}

  return (
    <section className='admin_section'>
      <h2 className='admin_title'>Admin Panel</h2>
      <form className='admin_form'>
        
        <div className='header__section'>
          <label>Logo Name</label>
          <input type="text" value={content.headerTitle}
          onChange={(e) => updateField("headerTitle", e.target.value)} />
        </div>

        <div className="hero__section">
          <h2>Hero Section</h2>
          {/* Title */}
          <label>Title</label>
          
          <input type="text" value={content.title1}
          onChange={(e) => updateField("title1", e.target.value)} />
          
          <input type="text" value={content.title2}
          onChange={(e) => updateField("title2", e.target.value)} />
          
          {/* Subtitle */}
          
          <label>Subtitles</label>
          
          <input type="text" value={content.leftcnt}
          onChange={(e) => updateField("leftcnt", e.target.value)}/>

          <input type="text" 
          value={content.rightcnt}
          onChange={(e) => updateField("rightcnt", e.target.value)}/>

        </div>

        <div className='about__us'>
          <h2>About Section</h2>
          {/* About title */}
          <label>Title</label>
          <input type="text" value={content.aboutTitle}
          onChange={(e) => updateField("aboutTitle", e.target.value)}/>
          <label>Description</label>
          <textarea value={content.aboutDesc}
          onChange={(e) => updateField("aboutDesc", e.target.value)}/>
        </div>

        <div className='service_section'>
          <h2>Services Section</h2>
          <label>Title</label>
          <input type="text" value={content.serviceTitle}
          onChange={(e) => updateField("serviceTitle", e.target.value)}/>
          <label>Services</label>
          {content?.services.map((service,i) =>(
            <div key={i} className='service_place'>
              <input 
              placeholder='Service Name'
              value={service.title}
              onChange={(e) => updateService(i,"title", e.target.value)}/>

              <input 
              placeholder='Service Description'
              value={service.desc}
              onChange={(e) => updateService(i,"desc", e.target.value)}/>
            </div>
          
          ))}
          <button type="button" onClick={addService}>Add Service</button>
        </div>

        <div className='feature__section'>
          <h2>Feature Section</h2>
          {/* Feature Title */}
          <label>Title</label>
          <input type="text" value={content.featureTitle}
          onChange={(e) => updateField("featureTitle", e.target.value)}/>
          <label> Features List</label>

          {content?.featureData_1.map((featureData,i)=>(
          <div key={i} className='feature_place'>
            {/* Feature Data 1 */}
            <input 
            placeholder='Feature'
            value={featureData.name}
            onChange={(e) => updateFeature1(i,"name", e.target.value)}
            />
          </div>
          ))}
            {/* Feature Data 2 */}
          {content?.featureData_2.map((featureData,i)=>(
            <div key={i} className='feature_place'>
              <input 
              placeholder='Feature'
              value={featureData.name}
              onChange ={(e)=> updateFeature2(i,"name",e.target.value)}/>
            </div>
          ))}
          </div>

          <button type="button" onClick={saveChange}>
            Apply the Changes
          </button>
          
          </form>
    </section>
  )
}

export default Admin