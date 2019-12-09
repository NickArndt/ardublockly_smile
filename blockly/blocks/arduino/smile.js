/*
    author": Nicolas Arndt for SMILE @ DDI University Oldenburg
    for more information: https://www.smile-smart-it.de
    add new Blocks for SMILE Workshops
*/

'use strict';

goog.provide('Blockly.Blocks.smile'); /* Die Blöcke die durch diese Datei zur verfügung gestellt werden */

goog.require('Blockly.Blocks');

Blockly.Blocks.smile.HUE = "#e75b21"; /* Default Farbe der SMILE-Blöcke */

/* Intialisieren der LED(s) an Pin */
Blockly.Blocks['smile_led_init'] = {
  init: function() {
    this.appendValueInput("num_led_init")
        .setCheck('Number')
        .appendField(Blockly.Msg.SMILE_LED_INIT_INIT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_INIT_PIN)
        .appendField(new Blockly.FieldDropdown(
          Blockly.Arduino.Boards.selected.digitalPins), "pin_led_init");
    this.setInputsInline();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip("tooltip");
    this.setHelpUrl("webseite");
  }
};
/* Setze LED auf RGB-Wert */
Blockly.Blocks['smile_led_rgb'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField(Blockly.Msg.SMILE_LED_SET);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_AT);
    this.appendValueInput("RED")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_RGB_RED);
    this.appendValueInput("GREEN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_RGB_GREEN);
    this.appendValueInput("BLUE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField(Blockly.Msg.COLOUR_RGB_BLUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Setze LED auf HEX-Wert */
Blockly.Blocks['smile_led_hex'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField(Blockly.Msg.SMILE_LED_SET);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_AT_HEX)
        .appendField(new Blockly.FieldTextInput("00FF00"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Initialisieren eines Wlans mit wifimanager.h */
Blockly.Blocks['smile_wifi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_WIFI_INIT);
    this.appendValueInput("NETWORKNAME")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMILE_WIFI_NAME)
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
