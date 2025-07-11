const {
  is
} = require('bpmnlint-utils');

const utils = require('../utils');


module.exports = function() {

  function check(node, reporter) {

    // filter UserTask node
    if (is(node, 'bpmn:CallActivity')) {
      const modelerTemplate = node.modelerTemplate
      if(modelerTemplate === "SIGNREGEXPBIO"){
        const extensions = node.extensionElements.values;
        for (const extension in extensions) {
          const ext = extensions[extension];
          if(ext.$type === "zeebe:CalledElement" && (!ext.processId || ext.processId === "")){
            utils.log("check-registre-template",node, "NODE DATA: "+ ext.processId)
            reporter.report(node.id, "L'identificador del procés és obligatori");
          }

          if(ext.$type === "zeebe:IoMapping"){
            if(ext.hasOwnProperty('inputParameters')){
              utils.log("check-registre-template",node, "INPUT PARAMETERS: " + ext.inputParameters.length)
              for (const input in ext.inputParameters) {
                const source = ext.inputParameters[input].source
                if(!source || source === ""){
                  reporter.report(node.id, 'El camp '+ ext.inputParameters[input].target + ' és obligatori');
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    check: check
  };
};
