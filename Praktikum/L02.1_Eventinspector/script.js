var l02_Eventinspector;
(function (l02_Eventinspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var span = document.getElementById("span");
        span.innerHTML = _event.clientX + "," + _event.clientY + _event;
        span.style.top = _event.clientY + 10 + "px";
        span.style.left = _event.clientX + 10 + "px";
    }
    function logInfo(_event) {
        console.log("Event-Phase = " + _event.eventPhase + " | CurrentTarget = " + _event.currentTarget + " | EventType = " + _event.type + "| EventObject = " + _event + " | Target = " + _event.target);
    }
})(l02_Eventinspector || (l02_Eventinspector = {}));
//# sourceMappingURL=script.js.map