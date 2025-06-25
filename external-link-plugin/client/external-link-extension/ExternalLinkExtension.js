'use strict';
var _ = require('lodash');

const SERVER_URI = "https://actio-pre.dipta.cat/modelador";
//const SERVER_URI = window.location.href;

export default function ExternalLinkExtension(eventBus) {

  eventBus.on('element.click', function (event) {
    _.defer(function () {
      generateFormLink(event);

    });
  });


  eventBus.on('shape.changed', function (event) {
    _.defer(function () {
      generateFormLink(event);
    });
  });


  /**
   * Generates and manages form links for UserTask elements
   * @param {Object} event - The event object containing element information
   */
  function generateFormLink(event) {
    const element = event.element;
    const isUserTask = element.businessObject.$instanceOf('bpmn:UserTask');
    //console.log("generate link starts ......" + isUserTask)

    // Check if the element is a UserTask
    if (isUserTask) {
      // Find the form field group in the DOM
      const formField = document.querySelector('*[data-group-id="group-form"]');

      if (formField) {
        // Get the form type input field
        const formTypeField = formField.querySelector('*[name="formType"]')
        // Check for existing link to avoid duplicates
        const existingLink = formField.querySelector('*[data-new-link="1"]');

        // Remove existing link if present
        if (existingLink) {
          //(console.log("Remove modeler link.")
          existingLink.parentElement.remove();
        }
        //console.log("Form type value: " + formTypeField.value)
        // Only create new link if form type is 'external-reference'
        if (formTypeField && formTypeField.value === 'external-reference') {
          setLink(formField, element)
        }

      } else {
       // console.warn("[external-link-plugin] element does not have a form field.")
      }
    } else {
      //console.warn("[external-link-plugin] element is not a UserTask.")
    }

  }

  function setLink(formField, element) {
    // Base URL for the form editor
    let linkForm = SERVER_URI

    // Early return if element is not valid
    if (formField === undefined || formField === null) return;

    // Find the external reference panel and its input field
    const panelForm = formField.querySelector('*[data-entry-id="externalReference"]');
    const inputElement = panelForm.querySelector('*[name="externalReference"]');
    //console.log("Value of external reference: " + inputElement.value)

    // Append the reference value to the base URL if it exists
    if (inputElement && inputElement.value) {
      linkForm = linkForm +"/"+ inputElement.value
    }
    console.log("[external-link-plugin] [" + element.businessObject.id  + "|" +element.businessObject.name + "] final link: " + linkForm)

    // Create a new span element containing the link
    const formLink = document.createElement('span');
    formLink.innerHTML = `
               <a href= "${SERVER_URI}" data-new-link="1"
               target="_blank" rel="noopener" 
               title="Formulari">Anar al formulari</a>
                `;

    // Append the link to the panel
    panelForm.appendChild(formLink);
  }




}

ExternalLinkExtension.$inject = [
  'eventBus'
];