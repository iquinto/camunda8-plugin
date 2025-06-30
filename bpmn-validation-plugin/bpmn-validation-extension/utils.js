

export function disable() {
    const start = document.querySelector('[title="Start current diagram"]');
    if(start.disabled === false){
        // console.log("Disable start button");
        start.style.cursor = 'not-allowed';
        start.disabled = true;
    }
    const deploy = document.querySelector('[title="Deploy current diagram"]');
    if(deploy.disabled === false){
        // console.log("Disable deploy button");
        deploy.style.cursor = 'not-allowed';
        deploy.disabled = true;
    }
}

export function enable(){
    // console.log("Enable start and deploy");
    const start = document.querySelector('[title="Start current diagram"]');
    const deploy = document.querySelector('[title="Deploy current diagram"]');
    start.disabled = false;
    start.style.cursor = 'auto'; // Para indicar que no está permitido
    deploy.disabled = false;
    deploy.style.cursor = 'auto'; // Para indicar que no está permitido

}


export function log(jsClass, node, message) {
    console.log("[bpmn-validation-plugin] ["+ jsClass +"] ["  + node.id  + "|" + node.name + "] "  + message);
}


