/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic" colour="210">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'    <block type="switch_case"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops" colour="120">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math" colour="230">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text" colour="160">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables" colour="330">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" colour="290" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output" colour="250">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time" colour="140">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio" colour="250">' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors" colour="80">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Comms" colour="160">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'  </category>' +
/* Ab hier folgen die SMILE-Bloecke */
'<category id="smile" name="SMILE">' +
'<category id="smile_Led" name="LED(s)">' +
'      <block type="smile_led_init">' +
'        <value name="num_led_init">' +
'            <block type="math_number">' +
'            <field name="NUM">1</field>' +
'          </block>' +
'        </value>' +
'      </block>' +
'     <block type="smile_led_brightness">' +
'         <value name="led_brightness">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'     </block>' +
'     <block type="smile_led_rgb">' +
'        <value name="NUM">' +
'         <block type="math_number">' +
'           <field name="NUM">0</field>' +
'         </block>' +
'        </value>' +
'        <value name="RED">' +
'          <block type="math_number">' +
'            <field name="NUM">231</field>' +
'          </block>' +
'        </value>' +
'        <value name="GREEN">' +
'          <block type="math_number">' +
'            <field name="NUM">91</field>' +
'          </block>' +
'        </value>' +
'        <value name="BLUE">' +
'          <block type="math_number">' +
'            <field name="NUM">33</field>' +
'          </block>' +
'        </value>' +
'      </block>' +
'      <block type="smile_led_hex">' +
'         <value name="NUM">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'      </block>' +
'      <block type="smile_led_colour">' +
'         <value name="position">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'      </block>' +
'     <block type="smile_led_fade">' +
'        <value name="position">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'         <value name="fromRed">' +
'          <block type="math_number">' +
'            <field name="NUM">255</field>' +
'          </block>' +
'        </value>' +
'        <value name="fromGreen">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'        <value name="fromBlue">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'        <value name="toRed">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'        <value name="toGreen">' +
'          <block type="math_number">' +
'            <field name="NUM">255</field>' +
'          </block>' +
'        </value>' +
'        <value name="toBlue">' +
'          <block type="math_number">' +
'            <field name="NUM">0</field>' +
'          </block>' +
'        </value>' +
'        <value name="sec">' +
'          <block type="math_number">' +
'            <field name="NUM">10</field>' +
'          </block>' +
'        </value>' +
'     </block>' +
'   </category>' +
'   <category id="smile_display" name="Display">' +
'      <block type="smile_display_init">' +
'      </block>' +
'      <block type="smile_display_write">' +
'         <value name="displayText">' +
'           <block type="text">' +
'             <field name="text">Text</field>' +
'           </block>' +
'        </value>' +
'        <value name="textSize">' +
'          <block type="math_number">' +
'            <field name="NUM">1</field>' +
'          </block>' +
'        </value>' +
'        <value name="xPosition">' +
'          <block type="math_number">' +
'            <field name="NUM">32</field>' +
'          </block>' +
'        </value>' +
'        <value name="yPosition">' +
'          <block type="math_number">' +
'            <field name="NUM">16</field>' +
'          </block>' +
'        </value>' +
'      </block>' +
'      <block type="smile_display_clear">' +
'      </block>' +
'   </category>' +
'      <block type="smile_wifi">' +
'         <value name="NETWORKNAME">' +
'            <block type="text">' +
'            <field name="TEXT">MeineSmarteLampe</field>' +
'            </block>' +
'         </value>' +
'      </block>' +
'      <block type="smile_openweathermap">' +
'         <value name="location">' +
'            <shadow type="text">' +
'            <field name="TEXT">Oldenburg</field>' +
'            </shadow>' +
'         </value>' +
'        <value name="apikey">' +
'            <shadow type="text">' +
'            <field name="TEXT"></field>' +
'            </shadow>' +
'         </value>' +
'      </block>' +
' </category>' +
'</xml>';
