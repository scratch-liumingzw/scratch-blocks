'use strict';

goog.provide('Blockly.Blocks.rs_sensing');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_SENSING_CURRENT_POSITION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_POSITION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_SENSING_CURRENT_POSITION_X, 'X'],
            [Blockly.Msg.RS_SENSING_CURRENT_POSITION_Y, 'Y'],
            [Blockly.Msg.RS_SENSING_CURRENT_POSITION_Z, 'Z'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['RS_SENSING_CURRENT_ACCELERATION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_ACCELERATION,
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['RS_SENSING_CURRENT_SPEED'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_SPEED,
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
