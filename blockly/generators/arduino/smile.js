/*
    author": Nicolas Arndt for SMILE @ DDI University Oldenburg
    for more information: https://www.smile-smart-it.de
    Generator for the new Blocks
*/

'use strict';

goog.provide('Blockly.Arduino.smile');

goog.require('Blockly.Arduino');


/* Intialisieren der LED(s) an Pin */
Blockly.Arduino['smile_led_init'] = function(block) {
  var value_num_led_init = Blockly.Arduino.valueToCode(block, 'num_led_init', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin_led_init = block.getFieldValue('pin_led_init');
  Blockly.Arduino.includes_['smile_led'] = '#include <FastLED.h>';
  Blockly.Arduino.definitions_['smile_led'] = '#define NUM_LEDS '+value_num_led_init+'\n#define DATA_PIN '+dropdown_pin_led_init+'\nCRGB leds[NUM_LEDS];';
  Blockly.Arduino.setups_['smile_led_init'] = 'FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);';
  var code = '';
  return code;
};

/* Setze LED auf RGB-Wert */
Blockly.Arduino['smile_led_rgb'] = function(block) {
  var value_num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var value_green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var value_blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'leds[int('+value_num+')] = CRGB(int('+value_red+'), int('+value_green+'), int('+value_blue+'));\nFastLED.show();\n';
  return code;
};
/* Setze LED auf HEX-Wert */
Blockly.Arduino['smile_led_hex'] = function(block) {
  var value_num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_hex = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  var code = '...';
  return code;
};
