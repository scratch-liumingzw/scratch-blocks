'use strict';

goog.provide('Blockly.Blocks.rs_settings');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_SETTINGS_SET_MODULE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SETTINGS_SET_MODULE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_PEN_HOLDER, 'pen holder'],
            [Blockly.Msg.RS_OPTION_AIR_PICKER, 'air picker'],
            [Blockly.Msg.RS_OPTION_SOFT_GRIPPER, 'soft gripper'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_settings,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_settings.primary,
      "colourSecondary": Blockly.Colours.rs_settings.secondary,
      "colourTertiary": Blockly.Colours.rs_settings.tertiary
    });
  }
};

Blockly.Blocks['RS_SETTINGS_SET_SPEED'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SETTINGS_SET_SPEED,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE1"
        }
      ],
      "category": Blockly.Categories.rs_settings,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_settings.primary,
      "colourSecondary": Blockly.Colours.rs_settings.secondary,
      "colourTertiary": Blockly.Colours.rs_settings.tertiary
    });
  }
};

Blockly.Blocks['RS_SETTINGS_SET_ACCELERATION'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SETTINGS_SET_ACCELERATION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_PRINTING, 'printing'],
            [Blockly.Msg.RS_OPTION_RETRACT, 'retract'],
            [Blockly.Msg.RS_OPTION_TRAVEL, 'travel'],
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE2"
        }
      ],
      "category": Blockly.Categories.rs_settings,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_settings.primary,
      "colourSecondary": Blockly.Colours.rs_settings.secondary,
      "colourTertiary": Blockly.Colours.rs_settings.tertiary
    });
  }
};

Blockly.Blocks['RS_SETTINGS_SET_MOTION_MODE'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SETTINGS_SET_MOTION_MODE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_FAST, 'fast'],
            [Blockly.Msg.RS_OPTION_LINEAR, 'linear'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_settings,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_settings.primary,
      "colourSecondary": Blockly.Colours.rs_settings.secondary,
      "colourTertiary": Blockly.Colours.rs_settings.tertiary
    });
  }
};

Blockly.Blocks['RS_SETTINGS_SET_WORK_ORIGIN'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SETTINGS_SET_WORK_ORIGIN,
      "category": Blockly.Categories.rs_settings,
      "extensions": ["shape_statement"],
      "colour": Blockly.Colours.rs_settings.primary,
      "colourSecondary": Blockly.Colours.rs_settings.secondary,
      "colourTertiary": Blockly.Colours.rs_settings.tertiary
    });
  }
};
