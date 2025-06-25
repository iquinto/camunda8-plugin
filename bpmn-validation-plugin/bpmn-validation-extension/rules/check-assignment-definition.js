const {
  is
} = require('bpmnlint-utils');

const utils = require('../utils');


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
          utils.log("check-assignment-definition",node, "ASSIGNMENT DEFINITIONS DATA: "+ ext.assignee + "|" + ext.candidateGroups + "|" + ext.candidateUsers)
          if(!ext.assignee || ext.assignee === ""){
            reporter.report(node.id, 'El camp assignee és obligatori');
            //deployment.disable()
          } else if (/\d/.test(ext.assignee)) {
            reporter.report(node.id, 'El camp assignee no pot contenir números');
          }
          else {
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
