'use strict';

goog.provide('Blockly.Blocks.rs_module');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_MODULE_AIR_PICKER'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MODULE_AIR_PICKER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_MODULE_AIR_PICKER_PICK, 'pick'],
            [Blockly.Msg.RS_MODULE_AIR_PICKER_RELEASE, 'release'],
            [Blockly.Msg.RS_MODULE_AIR_PICKER_OFF, 'off'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_module,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_module.primary,
      "colourSecondary": Blockly.Colours.rs_module.secondary,
      "colourTertiary": Blockly.Colours.rs_module.tertiary
    });
  }
};

Blockly.Blocks['RS_MODULE_SOFT_GRIPPER'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MODULE_SOFT_GRIPPER,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_MODULE_SOFT_GRIPPER_GRIP, 'grip'],
            [Blockly.Msg.RS_MODULE_SOFT_GRIPPER_RELEASE, 'release'],
            [Blockly.Msg.RS_MODULE_SOFT_GRIPPER_NETURAL, 'neutral'],
            [Blockly.Msg.RS_MODULE_AIR_PICKER_OFF, 'off'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_module,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_module.primary,
      "colourSecondary": Blockly.Colours.rs_module.secondary,
      "colourTertiary": Blockly.Colours.rs_module.tertiary
    });
  }
};

Blockly.Blocks['RS_MODULE_WRIST_ROTATE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_MODULE_WRIST_ROTATE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        }
      ],
      "category": Blockly.Categories.rs_module,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_module.primary,
      "colourSecondary": Blockly.Colours.rs_module.secondary,
      "colourTertiary": Blockly.Colours.rs_module.tertiary
    });
  }
};
