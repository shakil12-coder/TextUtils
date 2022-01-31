import React  from 'react';


function About(props) {

 
 let myStyle={
     color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
     border:props.mode==='dark'? '1px solid white':'1x solid black'
 }



  
  return (
      <div className="container my-3" >
        <h1 className='container' style={{color:props.mode==='dark'?'white':'dark'}}>About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    TextUtils gives you a way to manipulate your text such as convert words into uppercase ,Lowercase
                    clear your text and then you can copy your  text in your clipboard  in seconds by simply
                    tapping respective buttons.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free and Easy to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is completly free and easy to use ,it is character couter which can cout youu word ,character,time to read 
                    the text,therefore it is friendly to use in day to day life;.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter is compatible to use in any browser like chrome , firefox , safari , opera. it suits
                    to count character in facebook ,books ,excel etc. and also the main advantage of TextUtils is that it is 
                    responsive , it can be used in any devices like mobile , ipad, laptop ,big screens.
                </div>
                </div>
            </div>
       </div>
       
      </div>
  )
}

export default About;
