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
        .appendField(Blockly.Msg.SMILE_WIFI_NAME);
    this.setInputsInline(false);
    this.setPreviousStatement(true)
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Setze LED Farbe mit Colour Picker */
Blockly.Blocks['smile_led_colour'] = {
  init: function() {
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField(Blockly.Msg.SMILE_LED_SET);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_AT)
        .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Setze die Helligkeit der LED */
Blockly.Blocks['smile_led_brightness'] = {
  init: function() {
    this.appendValueInput("led_brightness")
        .setCheck("Number")
        .appendField(Blockly.Msg.SMILE_LED_BRIGHT);
    this.appendDummyInput()
        .appendField("(0...255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Fading der LED */
Blockly.Blocks['smile_led_fade'] = {
  init: function() {
    this.appendValueInput("position")
        .setCheck("Number")
        .appendField(Blockly.Msg.SMILE_LED_FADE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_FADE_FROM);
    this.appendValueInput("fromRed")
        .setCheck("Number");
    this.appendValueInput("fromGreen")
        .setCheck("Number");
    this.appendValueInput("fromBlue")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_FADE_TO);
    this.appendValueInput("toRed")
        .setCheck("Number");
    this.appendValueInput("toGreen")
        .setCheck("Number");
    this.appendValueInput("toBlue")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("sec")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_LED_FADE_SEC);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Initialisiert das Display */
Blockly.Blocks['smile_display_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_DISPLAY_INIT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Gibt Text auf dem Display aus */
Blockly.Blocks['smile_display_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_DISPLAY_WRITE);
    this.appendValueInput("displayText")
        .setCheck("Text");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_DISPLAY_POS)
        .appendField(" x:");
    this.appendValueInput("xPosition")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("y:");
    this.appendValueInput("yPosition")
        .setCheck("Number");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Löscht die Displayanzeige */
Blockly.Blocks['smile_display_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SMILE_DISPLAY_CLEAR)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
/* Ruft Wetterinformationen von openweathermap.org ab */
Blockly.Blocks['smile_openweathermap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SMILE_OPENWEATHERMAP_DROPDOWN_TEMP, "weatherTemp"], [Blockly.Msg.SMILE_OPENWEATHERMAP_DROPDOWN_ID, "weatherID"]]), "smile_openweathermap");
    this.appendValueInput("location")
        .appendField(Blockly.Msg.SMILE_OPENWEATHERMAP_FOR);
    this.appendValueInput("apikey")
        .appendField(Blockly.Msg.SMILE_OPENWEATHERMAP_APIKEY);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.smile.HUE);
    this.setTooltip('tooltip');
    this.setHelpUrl('webseite');
  }
};
