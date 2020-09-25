'use strict';

goog.provide('Blockly.Blocks.rs_conveyor_belt');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_CONVEYOR_BELT_MOVE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_CONVEYOR_BELT_MOVE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_FORWARD, 'Forward'],
            [Blockly.Msg.RS_OPTION_BACKWARD, 'Backward'],
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "category": Blockly.Categories.rs_conveyor_belt,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_conveyor_belt.primary,
      "colourSecondary": Blockly.Colours.rs_conveyor_belt.secondary,
      "colourTertiary": Blockly.Colours.rs_conveyor_belt.tertiary
    });
  }
};

Blockly.Blocks['RS_CONVEYOR_BELT_STOP'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_CONVEYOR_BELT_STOP,
      "category": Blockly.Categories.rs_conveyor_belt,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_conveyor_belt.primary,
      "colourSecondary": Blockly.Colours.rs_conveyor_belt.secondary,
      "colourTertiary": Blockly.Colours.rs_conveyor_belt.tertiary
    });
  }
};
