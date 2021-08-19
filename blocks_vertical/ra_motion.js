'use strict';

goog.provide('Blockly.Blocks.ra_motion');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

// 设置手指的角度
Blockly.Blocks['RA_MOTION_SET_ANGLES'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RA_MOTION_SET_ANGLES,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        },
        {
          "type": "input_value",
          "name": "VALUE3"
        },
        {
          "type": "input_value",
          "name": "VALUE4"
        },
        {
          "type": "input_value",
          "name": "VALUE5"
        },
        {
          "type": "input_value",
          "name": "VALUE6"
        }
      ],
      "category": Blockly.Categories.rs_motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};