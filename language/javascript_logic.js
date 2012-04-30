/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/google-blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for logic blocks.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.JavaScript.logic_compare = function(opt_dropParens) {
  // Comparison operator.
  var argument0 = Blockly.JavaScript.valueToCode_(this, 0) || '0';
  var argument1 = Blockly.JavaScript.valueToCode_(this, 1) || '0';
  var operator = Blockly.JavaScript.logic_compare.MAP_[this.getValueLabel(1)];
  var code = argument0 + ' ' + operator + ' ' + argument1;
  if (!opt_dropParens) {
    code = '(' + code + ')';
  }
  return Blockly.JavaScript.scrub_(this, code);
};

Blockly.JavaScript.logic_compare.MAP_ = {};
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_EQ] = '==';
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_NEQ] = '!=';
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_LT] = '<';
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_LTE] = '<=';
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_GT] = '>';
Blockly.JavaScript.logic_compare.MAP_[Blockly.Language.logic_compare.MSG_GTE] = '>=';

Blockly.JavaScript.logic_operation = function(opt_dropParens) {
  // Operations 'and', 'or'.
  var argument0 = Blockly.JavaScript.valueToCode_(this, 0) || 'false';
  var argument1 = Blockly.JavaScript.valueToCode_(this, 1) || 'false';
  var operator = (this.getValueLabel(1) == Blockly.Language.logic_operation.MSG_AND) ? '&&' : '||';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  if (!opt_dropParens) {
    code = '(' + code + ')';
  }
  return Blockly.JavaScript.scrub_(this, code);
};

Blockly.JavaScript.logic_negate = function(opt_dropParens) {
  // Negation.
  var argument0 = Blockly.JavaScript.valueToCode_(this, 0) || 'false';
  var code = '!' + argument0;
  if (!opt_dropParens) {
    code = '(' + code + ')';
  }
  return Blockly.JavaScript.scrub_(this, code);
};

Blockly.JavaScript.logic_boolean = function() {
  // Boolean values true and false.
  var bool = (this.getTitleText(0) == Blockly.Language.logic_boolean.MSG_TRUE) ?
      'true' : 'false';
  return Blockly.JavaScript.scrub_(bool);
};