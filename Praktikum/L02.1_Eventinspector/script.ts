namespace l02_Eventinspector {


    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox, true);

        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);

        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        

        let x: number = _event.clientX;
        let y: number = _event.clientY;
        
        let span: HTMLElement = document.getElementById("span");

        
        span.innerHTML = _event.clientX + "," + _event.clientY + _event.target;

        span.style.top = _event.clientY + 10 + "px";
        span.style.left = _event.clientX + 10 + "px";
    }

    function logInfo(_event: Event): void {

       
        console.log("Event-Phase = ", _event.eventPhase, " | CurrentTarget = ", _event.currentTarget, " | EventType = ", _event.type, "| EventObject = ", _event, " | Target = ", _event.target );

    }


}