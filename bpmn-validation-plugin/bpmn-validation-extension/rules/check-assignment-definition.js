const {
  is
} = require('bpmnlint-utils');

const deployment = require('../utils');


module.exports = function() {

  function check(node, reporter) {

    // filter UserTask node
    if (is(node, 'bpmn:UserTask')) {
      const extensions = node.extensionElements.values;
      for (const extension in extensions) {
        // filter AssignmentDefinition node
        //console.log("[bpmn-validation-extension] extension type: " + extensions[extension].$type );
       const ext = extensions[extension];
        if(ext.$type === "zeebe:AssignmentDefinition"){
          console.log("[bpmn-validation-plugin] ["  + node.id  + "|" +node.name + "] node data: assignee="  + ext.assignee + ", candidateGroups=" + ext.candidateGroups + ", candidateUsers=" + ext.candidateUsers);
          if(!ext.assignee){
            reporter.report(node.id, 'El camp assignee és obligatori');
            //deployment.disable()
          } else {
            //deployment.enable()
          }
        }
      }
    }
  }

  return {
    check: check
  };
};
