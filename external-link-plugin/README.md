# External Link Plugin for Camunda Modeler

## Overview

This plugin enhances the Camunda Modeler by automatically generating and managing external form links for UserTask elements. It provides a seamless way to link BPMN UserTasks to external form systems.

## Features

- Automatically detects UserTask elements in BPMN diagrams
- Adds clickable external links to UserTask properties panel
- Dynamically updates links when elements are clicked or modified
- Supports external reference form types
- Configurable server URI for form references

## Installation

### Prerequisites

- Camunda Modeler (compatible with version 5.0+)
- Node.js and npm

### Steps

1. Clone or download this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the plugin:
   ```
   npm run all
   ```
4. Copy the plugin to your Camunda Modeler plugins directory:
   - Windows: `%APPDATA%\camunda-modeler\plugins\`
   - MacOS: `~/Library/Application Support/camunda-modeler/plugins/`
   - Linux: `~/.config/camunda-modeler/plugins/`

## Configuration

The plugin is configured to use a default server URI: `https://actio-pre.dipta.cat/modelador`. You can modify this in the `ExternalLinkExtension.js` file if needed.

## Usage

1. Open a BPMN diagram in Camunda Modeler
2. Select a UserTask element in your diagram
3. In the properties panel, set the form type to 'external-reference'
4. The plugin will automatically add a link to the external form system
5. Click the link to open the form in a new browser tab

## How It Works

The plugin listens for element click and shape change events in the BPMN editor. When a UserTask is selected, it checks if the form type is set to 'external-reference' and then adds a form link to the properties panel.

## Development

### Scripts

- `npm run bundle`: Build the plugin for production
- `npm run dev`: Build with watch mode for development
- `npm run all`: Run all build scripts

### Project Structure

- `client/`: Contains the plugin's client-side code
  - `external-link-extension/`: Contains the main extension code
    - `ExternalLinkExtension.js`: Core functionality for generating links
- `index.js`: Plugin entry point
- `dist/`: Contains the bundled plugin code
- `package.json`: Project configuration and dependencies

## Dependencies

- lodash: ^4.17.21
- camunda-modeler-plugin-helpers: ^5.0.0
- webpack: ^5.75.0
- npm-run-all: ^4.1.5
- webpack-cli: ^5.0.1


