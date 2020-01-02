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
  Blockly.Arduino.includes_['smile_led_init'] = '#include <FastLED.h>';
  Blockly.Arduino.definitions_['smile_led_init'] = '#define NUM_LEDS '+value_num_led_init+'\n#define DATA_PIN '+dropdown_pin_led_init+'\nCRGB leds[NUM_LEDS];';
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
  var text_color = block.getFieldValue('COLOR');
  var code = 'leds[0] = 0x'+text_color+';\nFastLED.show();\n';
  return code;
};

/* Initialisieren eines Wlans mit wifimanager.h */
Blockly.Arduino['smile_wifi'] = function(block) {
  var text_networkname = Blockly.Arduino.valueToCode(block, 'NETWORKNAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['smile_wifi'] = '#include <WiFiManager.h>';
  Blockly.Arduino.setups_['smile_wifi'] = 'WiFiManager wifiManager;\n  wifiManager.autoConnect('+text_networkname+');';
  var code = '';
  return code;
};

/* Setze LED Farbe mit Colour Picker */
Blockly.Arduino['smile_led_colour'] = function(block) {
  var value_position = Blockly.Arduino.valueToCode(block, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var colour_name = block.getFieldValue('COLOR');
  var code = 'leds[0] = 0x'+colour_name.substr(1,6)+';\nFastLED.show();\n';
  return code;
};
/* Setze die Helligkeit der LED */
Blockly.Arduino['smile_led_brightness'] = function(block) {
  var value_led_brightness = Blockly.Arduino.valueToCode(block, 'led_brightness', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'FastLED.setBrightness(int('+value_led_brightness+'));\n';
  return code;
};

/* Fading der LED */
Blockly.Arduino['smile_led_fade'] = function(block) {
  var value_position = Blockly.Arduino.valueToCode(block, 'position', Blockly.Arduino.ORDER_ATOMIC);
  var value_fromred = Blockly.Arduino.valueToCode(block, 'fromRed', Blockly.Arduino.ORDER_ATOMIC);
  var value_fromgreen = Blockly.Arduino.valueToCode(block, 'fromGreen', Blockly.Arduino.ORDER_ATOMIC);
  var value_fromblue = Blockly.Arduino.valueToCode(block, 'fromBlue', Blockly.Arduino.ORDER_ATOMIC);
  var value_tored = Blockly.Arduino.valueToCode(block, 'toRed', Blockly.Arduino.ORDER_ATOMIC);
  var value_togreen = Blockly.Arduino.valueToCode(block, 'toGreen', Blockly.Arduino.ORDER_ATOMIC);
  var value_toblue = Blockly.Arduino.valueToCode(block, 'toBlue', Blockly.Arduino.ORDER_ATOMIC);
  var value_sec = Blockly.Arduino.valueToCode(block, 'sec', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.userFunctions_['smile_led_fade'] = 'void fade(int led_position, uint16_t duration, uint16_t delay_val, uint16_t startR, uint16_t startG, uint16_t startB, uint16_t endR, uint16_t endG, uint16_t endB) {\nint16_t redDiff = endR - startR;\nint16_t greenDiff = endG - startG;\nint16_t blueDiff = endB - startB;\nint16_t steps = duration*1000 / delay_val;\nint16_t redValue, greenValue, blueValue;\nfor (int16_t i = 0 ; i < steps - 1 ; ++i) {\n  redValue = (int16_t)startR + (redDiff * i / steps);\n  greenValue = (int16_t)startG + (greenDiff * i / steps);\n  blueValue = (int16_t)startB + (blueDiff * i / steps);\n  leds[led_position]=CRGB(redValue, greenValue, blueValue);\n  FastLED.show();\n  delay(delay_val);\n}\nleds[led_position]=CRGB(endR, endG, endB);\n}';

  var code =  'fade(int('+value_position+'),int('+value_sec+'),int(100),int('+value_fromred+'),int('+value_fromgreen+'),int('+value_fromblue+'),int('+value_tored+'),int('+value_togreen+'),int('+value_toblue+'));';
  return code;
};

/* Initialisiert das Display */
Blockly.Arduino['smile_display_init'] = function(block) {
  Blockly.Arduino.includes_['smile_display_init'] = '#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>';
  Blockly.Arduino.definitions_['smile_display_init'] = '#define SCREEN_WIDTH 128\n#define SCREEN_HEIGHT 64\n#define OLED_RESET 0';
  Blockly.Arduino.userFunctions_['smile_display_init'] = 'Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);';
  Blockly.Arduino.setups_['smile_display_init'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n  display.clearDisplay();\n  display.display();\n  display.setTextColor(WHITE);\n  display.setTextSize(1);';
  var code = '';
  return code;
};

/* Gibt Text auf dem Display aus */
Blockly.Arduino['smile_display_write'] = function(block) {
  var value_displaytext = Blockly.Arduino.valueToCode(block, 'displayText', Blockly.Arduino.ORDER_ATOMIC);
  var value_xposition = Blockly.Arduino.valueToCode(block, 'xPosition', Blockly.Arduino.ORDER_ATOMIC);
  var value_yposition = Blockly.Arduino.valueToCode(block, 'yPosition', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'display.setCursor(int(' + value_xposition + '),int(' + value_yposition + '));\ndisplay.println('+value_displaytext+');\ndisplay.display();\n';
  return code;
};

/* Löscht die Displayanzeige */
Blockly.Arduino['smile_display_clear'] = function(block) {
  var code = 'display.clearDisplay();\n';
  return code;
};

/* Abrufen der Wetterinformationen über openweathermap.org */
Blockly.Arduino['smile_get_weather'] = function(block) {
  var value_location = Blockly.Arduino.valueToCode(block, 'location', Blockly.Arduino.ORDER_ATOMIC);
  var value_apikey = Blockly.Arduino.valueToCode(block, 'apikey', Blockly.Arduino.ORDER_ATOMIC);
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};
