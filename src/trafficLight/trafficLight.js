import'./trafficLight.styl';
/**
 * 
 * @param {String} selector Simple css selector of root element
 */
function trafficLight(selector){
    const rootElement = document.querySelector(selector);
    const widgetTemplate = `    
      <button  class="stateStop" data-state="stop"></button>
      <button  class="stateWait" data-state="wait"</button>
      <button  class="stateStart" data-state="start"></button> 
  `;
    let startLight;
    let waitLight;
    let stopLight;

    function clickHandler(){
        changeColor(this.getAttribute('data-state'));
    }

    function changeColor(stateParam){  
        switch(stateParam){
            case "start":
            console.log('start');
                startLight.style.background = 'green';
                stopLight.style.background ='#A6ABAB';
                waitLight.style.background ='#A6ABAB';
                break;
            case "wait":
            console.log('wait');
                startLight.style.background = '#A6ABAB';
                stopLight.style.background = '#A6ABAB';
                waitLight.style.background = 'yellow';
                break;
            case "stop":
            console.log('stop');
                startLight.style.background = '#A6ABAB';
                stopLight.style.background = 'red';
                waitLight.style.background = '#A6ABAB';
                break;
        }
    }
    
    function renderStatic(){  
        rootElement.innerHTML = widgetTemplate;
        startLight = rootElement.querySelector('.stateStart');
        stopLight = rootElement.querySelector('.stateStop');
        waitLight = rootElement.querySelector('.stateWait');
    }

    function handleEvents(){
        startLight.addEventListener("click", clickHandler);
        stopLight.addEventListener("click", clickHandler);
        waitLight.addEventListener("click", clickHandler);
    }
    renderStatic();
    handleEvents();
}
export {trafficLight} 