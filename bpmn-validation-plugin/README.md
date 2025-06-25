# BPMN Validation Plugin for Camunda Modeler

## Overview

This plugin extends the Camunda Modeler with custom validation rules for BPMN diagrams. It focuses on ensuring proper assignment configuration for UserTask elements in BPMN workflows, particularly validating Zeebe assignment definitions.

## Features

- **Assignment Validation**: Verifies that UserTask elements have properly defined assignees
- **Deployment Control**: Automatically disables deployment and start buttons when validation fails
- **Real-time Feedback**: Provides immediate validation feedback during modeling

## Installation

1. Download or clone this repository
2. Copy the plugin folder into the `plugins` directory of your Camunda Modeler installation
3. Restart Camunda Modeler

## Configuration

The validation rules are defined in the `.bpmnlintrc` file. The current configuration enforces the `check-assignment-definition` rule with an 'error' severity level.

## Development

### Prerequisites

- Node.js
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run all
```

### Development Mode

```bash
npm run dev
```

## Project Structure

- `/bpmn-validation-extension`: Core validation logic
  - `/rules`: Contains individual validation rules
  - `utils.js`: Utility functions for controlling deployment buttons
  - `index.js`: Plugin configuration and rule registration
- `/client`: Client-side plugin integration
- `index.js`: Main entry point
- `webpack.config.js`: Build configuration

