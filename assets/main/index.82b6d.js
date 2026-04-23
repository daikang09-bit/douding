window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "1_PianoGames": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e87fYBwuFOg6VNCQAQXop+", "1_PianoGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node
      },
      onLoad: function onLoad() {
        this.director = cc.find("Canvas");
      },
      start: function start() {},
      update: function update(dt) {
        1 == this.director.getComponent("director_PianoGames").clear_flag && this.director.getComponent("director_PianoGames").fire1_killed(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  "2_PianoGames": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4ab5kra4tL+ZHXWiHyaYvk", "2_PianoGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node
      },
      onLoad: function onLoad() {
        this.director = cc.find("Canvas");
      },
      start: function start() {},
      update: function update(dt) {
        1 == this.director.getComponent("director_PianoGames").clear_flag && this.director.getComponent("director_PianoGames").fire2_killed(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  "3_PianoGames": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "279abY2BdtBhpa4x4UDDXNZ", "3_PianoGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node
      },
      onLoad: function onLoad() {
        this.director = cc.find("Canvas");
      },
      start: function start() {},
      update: function update(dt) {
        1 == this.director.getComponent("director_PianoGames").clear_flag && this.director.getComponent("director_PianoGames").fire3_killed(this.node);
      }
    });
    cc._RF.pop();
  }, {} ],
  BezierAction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc634bkAoBFrbSQxXpdMl87", "BezierAction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: cc.Node,
        ctrl1: cc.Node,
        ctrl2: cc.Node,
        duration: 2
      },
      start: function start() {
        this.oldPosition = this.node.position;
      },
      play: function play() {
        var array = [ this.ctrl1.position, this.ctrl2.position, this.target.position ];
        this.node.runAction(cc.bezierTo(this.duration, array));
      },
      reset: function reset() {
        this.node.position = this.oldPosition;
      }
    });
    cc._RF.pop();
  }, {} ],
  BoxPaoPao: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65ce7r4vhpLOq1/5lD2ZDPk", "BoxPaoPao");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        num: 1,
        music: {
          type: cc.AudioClip,
          default: null
        }
      },
      start: function start() {},
      init: function init() {
        this.num = 1.1 * Math.random() + .3;
        this.node.scale = this.num;
      },
      bnt: function bnt() {
        cc.audioEngine.play(this.music, false, 1);
        var fn1 = cc.scaleTo(.1, this.num + .5, this.num + .5);
        var fn2 = cc.fadeOut(.1);
        var sqn = cc.sequence([ fn1, fn2 ]);
        this.node.runAction(sqn);
        setTimeout(function() {
          this.node.destroy();
        }.bind(this), 120);
      }
    });
    cc._RF.pop();
  }, {} ],
  Box_Games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e40d2GsneFDQqBA96A/7Xvq", "Box_Games");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music: {
          type: cc.AudioClip,
          default: null
        },
        gamePrefab: [ cc.Prefab ]
      },
      Zebra_Game: function Zebra_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[0]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Tiger_Game: function Tiger_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[1]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Fishing_Game: function Fishing_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[2]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Fish_blocks_Game: function Fish_blocks_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[3]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Costume_Game: function Costume_Game() {
        var game = cc.instantiate(this.gamePrefab[4]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Balloon_Game: function Balloon_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[5]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Arrange_Game: function Arrange_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[6]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Apple_Game: function Apple_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[7]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Animals_Game: function Animals_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[8]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Hand_Game: function Hand_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[9]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Insects_Game: function Insects_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[10]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      shapes_Game: function shapes_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[11]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      wheel_Game: function wheel_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[12]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Animalheads_Game: function Animalheads_Game() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("animalhead");
      },
      Newton_Game: function Newton_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[14]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Snowflake_Game: function Snowflake_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[15]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      },
      Wire_Game: function Wire_Game() {
        cc.audioEngine.play(this.music, false, 1);
        var game = cc.instantiate(this.gamePrefab[16]);
        this.node.addChild(game);
        game.setPosition(0, 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  Bug_Games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49147ed/4VBtq5f8lNLV8q4", "Bug_Games");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bug_Games = function(_super) {
      __extends(Bug_Games, _super);
      function Bug_Games() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundInterval = 5;
        _this.sounds = [];
        _this.games = [];
        return _this;
      }
      Bug_Games.prototype.onEnable = function() {
        var _this = this;
        this.schedule(function(_) {
          var sound = _this.sounds[Math.floor(Math.random() * _this.sounds.length)];
          cc.audioEngine.play(sound, false, 1);
        }, this.soundInterval);
      };
      Bug_Games.prototype.onDisable = function() {
        this.unscheduleAllCallbacks();
      };
      Bug_Games.prototype.onClickButterfly1 = function() {
        this.showPrefab(this.games[0]);
      };
      Bug_Games.prototype.onClickButterfly2 = function() {
        this.showPrefab(this.games[1]);
      };
      Bug_Games.prototype.onClickHoneybeeFly = function() {
        this.showPrefab(this.games[2]);
      };
      Bug_Games.prototype.onClickFlowerPuzzle = function() {
        this.showPrefab(this.games[3]);
      };
      Bug_Games.prototype.onClickSnailCount = function() {
        this.showPrefab(this.games[4]);
      };
      Bug_Games.prototype.onClickBugFlip = function() {
        this.showPrefab(this.games[5]);
      };
      Bug_Games.prototype.onClickPathMove = function() {
        this.showPrefab(this.games[6]);
      };
      Bug_Games.prototype.onClickCockroachMatch = function() {
        this.showPrefab(this.games[7]);
      };
      Bug_Games.prototype.onClickBeeCircle = function() {
        this.showPrefab(this.games[8]);
      };
      Bug_Games.prototype.onClickOutlines = function() {
        this.showPrefab(this.games[9]);
      };
      Bug_Games.prototype.showPrefab = function(prefab) {
        var node = cc.instantiate(prefab);
        node.parent = this.node;
        node.setPosition(0, 0);
      };
      __decorate([ property({
        tooltip: "\u9e1f\u53eb\u58f0\u95f4\u9694\uff08\u79d2s\uff09"
      }) ], Bug_Games.prototype, "soundInterval", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u591a\u79cd\u9e1f\u53eb\u58f0"
      }) ], Bug_Games.prototype, "sounds", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u82b1\u56ed\u6e38\u620f\u9884\u5236\u4f53"
      }) ], Bug_Games.prototype, "games", void 0);
      Bug_Games = __decorate([ ccclass ], Bug_Games);
      return Bug_Games;
    }(cc.Component);
    exports.default = Bug_Games;
    cc._RF.pop();
  }, {} ],
  ChrismasTree_mgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "841caBblLlDY7oXOTdtUWrm", "ChrismasTree_mgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mask: [ cc.Node ],
        timer: 0,
        audio: {
          type: cc.AudioClip,
          default: []
        },
        is_piano: false,
        is_bell: false,
        is_violin: false,
        is_height: false,
        violinSpr: [ cc.Node ],
        bellSpr: [ cc.Node ],
        mouse: [ cc.Node ]
      },
      onLoad: function onLoad() {
        for (var i = 0; i < this.mask.length; i++) this.mask[i].active = false;
        for (var _i = 0; _i < 4; _i++) this.mouse[_i].active = false;
        this.violinSpr[1].active = false;
        this.bellSpr[1].active = false;
      },
      start: function start() {},
      pianoPlay: function pianoPlay() {
        false == this.is_piano ? this.piano = cc.audioEngine.play(this.audio[0], true, 1) : cc.audioEngine.stop(this.piano);
        this.is_piano = !this.is_piano;
      },
      bellPlay: function bellPlay() {
        if (false == this.is_bell) {
          this.bell = cc.audioEngine.play(this.audio[1], true, 1);
          this.bellSpr[0].active = false;
          this.bellSpr[1].active = true;
        } else {
          cc.audioEngine.stop(this.bell);
          this.bellSpr[1].active = false;
          this.bellSpr[0].active = true;
        }
        this.is_bell = !this.is_bell;
      },
      violinPlay: function violinPlay() {
        if (false == this.is_violin) {
          this.violin = cc.audioEngine.play(this.audio[2], true, 1);
          this.violinSpr[0].active = false;
          this.violinSpr[1].active = true;
        } else {
          cc.audioEngine.stop(this.violin);
          this.violinSpr[0].active = true;
          this.violinSpr[1].active = false;
        }
        this.is_violin = !this.is_violin;
      },
      heightPlay: function heightPlay() {
        if (false == this.is_height) {
          this.height = cc.audioEngine.play(this.audio[3], true, 1);
          for (var i = 0; i < 4; i++) this.mouse[i].active = true;
        } else {
          cc.audioEngine.stop(this.height);
          for (var _i2 = 0; _i2 < 4; _i2++) this.mouse[_i2].active = false;
        }
        this.is_height = !this.is_height;
      }
    });
    cc._RF.pop();
  }, {} ],
  Click_Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0496eanU+lMJqVdXfPujACk", "Click_Audio");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Click_Audio = function(_super) {
      __extends(Click_Audio, _super);
      function Click_Audio() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.back = null;
        return _this;
      }
      Click_Audio.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
      };
      Click_Audio.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
      };
      Click_Audio.prototype.onClick = function() {
        cc.audioEngine.play(this.back, false, 1);
      };
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u70b9\u51fb\u97f3\u6548"
      }) ], Click_Audio.prototype, "back", void 0);
      Click_Audio = __decorate([ ccclass ], Click_Audio);
      return Click_Audio;
    }(cc.Component);
    exports.default = Click_Audio;
    cc._RF.pop();
  }, {} ],
  CompareGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e51cdtOc11NJZEbySepvsVP", "CompareGames");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onClick = function(event, scane) {
        cc.director.loadScene("matching_" + scane);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Dragable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56d9dNS7rVOm6mnj7PHUM/R", "Dragable");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        cc.log("onload");
      },
      start: function start() {
        cc.log("start");
      },
      onEnable: function onEnable() {
        cc.log("enable");
      },
      _onTouchMove: function _onTouchMove(touchEvent) {
        var location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location);
      }
    });
    cc._RF.pop();
  }, {} ],
  DrawBezier: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be96fRMg0NMwpsEYx303zQC", "DrawBezier");
    "use strict";
    var BezierAction = require("BezierAction");
    cc.Class({
      editor: {
        executeInEditMode: true
      },
      extends: cc.Component,
      properties: {
        bezierActions: [ BezierAction ],
        actionNode: cc.Node,
        duration: 2,
        params: {
          type: cc.String,
          multiline: true,
          get: function get() {
            var params = this._getBezierParams();
            return JSON.stringify(params);
          }
        }
      },
      _getBezierParams: function _getBezierParams() {
        var params = [];
        this.bezierActions.forEach(function(bezierAction) {
          if (!bezierAction) return;
          var param = [ bezierAction.node.position, bezierAction.ctrl1.position, bezierAction.ctrl2.position, bezierAction.target.position ];
          params.push(param);
        });
        return params;
      },
      start: function start() {
        var _this = this;
        this.graphics = this.getComponent(cc.Graphics);
        this.bezierActions.forEach(function(bezierAction) {
          _this._registerNodeEvent(bezierAction);
        });
        this._onDrawBezierCurve();
      },
      _registerNodeEvent: function _registerNodeEvent(bezierAction) {
        var _this2 = this;
        var array = [ bezierAction.node, bezierAction.target, bezierAction.ctrl1, bezierAction.ctrl2 ];
        array.forEach(function(node) {
          node.on(cc.Node.EventType.POSITION_CHANGED, _this2._onDrawBezierCurve, _this2);
        });
      },
      _unregisterNodeEvent: function _unregisterNodeEvent(bezierAction) {
        var _this3 = this;
        var array = [ bezierAction.node, bezierAction.target, bezierAction.ctrl1, bezierAction.ctrl2 ];
        array.forEach(function(node) {
          return node && node.targetOff(_this3);
        });
      },
      onDestroy: function onDestroy() {
        var _this4 = this;
        this.bezierActions.forEach(function(bezierAction) {
          _this4._unregisterNodeEvent(bezierAction);
        });
      },
      _onDrawBezierCurve: function _onDrawBezierCurve() {
        var _this5 = this;
        var haveRun = this.bezierActions.find(function(bezierAction) {
          return bezierAction.node.getNumberOfRunningActions();
        });
        if (haveRun) return;
        this.graphics.clear();
        this.bezierActions.forEach(function(bezierAction) {
          _this5._drawOneBezier(bezierAction);
        });
      },
      _drawOneBezier: function _drawOneBezier(bezierAction) {
        this._drawLine(bezierAction.node, bezierAction.ctrl1, cc.Color.RED);
        this._drawLine(bezierAction.target, bezierAction.ctrl2, cc.Color.RED);
        this.graphics.strokeColor = cc.Color.YELLOW;
        this.graphics.lineWidth = 4;
        this.graphics.moveTo(bezierAction.node.x, bezierAction.node.y);
        this.graphics.bezierCurveTo(bezierAction.ctrl1.x, bezierAction.ctrl1.y, bezierAction.ctrl2.x, bezierAction.ctrl2.y, bezierAction.target.x, bezierAction.target.y);
        this.graphics.stroke();
      },
      _drawLine: function _drawLine(startNode, ctrlNode, color) {
        this.graphics.strokeColor = color;
        this.graphics.lineWidth = 2;
        this.graphics.moveTo(startNode.x, startNode.y);
        this.graphics.lineTo(ctrlNode.x, ctrlNode.y);
        this.graphics.stroke();
      },
      playBezierAction: function playBezierAction() {
        var _this6 = this;
        var params = this._getBezierParams();
        this.actionNode.position = params[0][0];
        var actions = params.map(function(param) {
          return cc.bezierTo(_this6.duration, param.slice(1));
        });
        this.actionNode.runAction(cc.sequence(actions));
      }
    });
    cc._RF.pop();
  }, {
    BezierAction: "BezierAction"
  } ],
  Games_Butterfly_Move: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bfdagwKwRIM47UgwY5rZF/", "Games_Butterfly_Move");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_Butterfly_Move = function(_super) {
      __extends(Games_Butterfly_Move, _super);
      function Games_Butterfly_Move() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.butterflys = [];
        _this.butterflyCount = 20;
        return _this;
      }
      Games_Butterfly_Move_1 = Games_Butterfly_Move;
      Games_Butterfly_Move.prototype.onLoad = function() {
        var windowSize = cc.winSize;
        var width = windowSize.width;
        var height = windowSize.height;
        Games_Butterfly_Move_1.MaxLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        cc.log("maxLength: " + Games_Butterfly_Move_1.MaxLength);
      };
      Games_Butterfly_Move.prototype.onEnable = function() {
        var windowSize = cc.winSize;
        var width = windowSize.width;
        var height = windowSize.height;
        for (var i = 0; i < this.butterflyCount; i++) {
          var butterfly = this.butterflys[Math.floor(Math.random() * this.butterflys.length)];
          var node = cc.instantiate(butterfly);
          node.parent = this.node.getChildByName("content");
          node.setPosition(-width / 2 + Math.random() * width, -height / 2 + Math.random() * height);
          node.scale = .5 + Math.random();
          node.angle = -360 * Math.random();
        }
      };
      Games_Butterfly_Move.prototype.hide = function() {
        this.node.destroy();
      };
      var Games_Butterfly_Move_1;
      Games_Butterfly_Move.MaxLength = 1500;
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u56db\u79cd\u8774\u8776"
      }) ], Games_Butterfly_Move.prototype, "butterflys", void 0);
      __decorate([ property({
        tooltip: "\u4e00\u6b21\u6027\u51fa\u73b0\u8774\u8776\u4e2a\u6570"
      }) ], Games_Butterfly_Move.prototype, "butterflyCount", void 0);
      Games_Butterfly_Move = Games_Butterfly_Move_1 = __decorate([ ccclass ], Games_Butterfly_Move);
      return Games_Butterfly_Move;
    }(cc.Component);
    exports.default = Games_Butterfly_Move;
    cc._RF.pop();
  }, {} ],
  Games_Butterfly: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1e9d3Tw/BNt53J6jpD8nl0", "Games_Butterfly");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_Butterfly = function(_super) {
      __extends(Games_Butterfly, _super);
      function Games_Butterfly() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.butterflys = [];
        return _this;
      }
      Games_Butterfly.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
      };
      Games_Butterfly.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
      };
      Games_Butterfly.prototype.onTouchStartCallback = function(t) {
        var p = t.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        var butterfly = this.butterflys[Math.floor(Math.random() * this.butterflys.length)];
        var node = cc.instantiate(butterfly);
        var btn = node.getComponent(cc.Button);
        btn && (btn.interactable = false);
        node.parent = this.node.getChildByName("content");
        node.setPosition(p.x, p.y);
        node.scale = .5 + Math.random();
        node.angle = 360 * Math.random();
      };
      Games_Butterfly.prototype.hide = function() {
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u56db\u79cd\u8774\u8776"
      }) ], Games_Butterfly.prototype, "butterflys", void 0);
      Games_Butterfly = __decorate([ ccclass ], Games_Butterfly);
      return Games_Butterfly;
    }(cc.Component);
    exports.default = Games_Butterfly;
    cc._RF.pop();
  }, {} ],
  Games_beecircle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b78cZvsWBHvqKvIcayNz4G", "Games_beecircle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_beecircle = function(_super) {
      __extends(Games_beecircle, _super);
      function Games_beecircle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.petals = [];
        _this.petalOpens = [];
        _this.petalCloses = [];
        _this.audios = [];
        _this.waiNode = null;
        _this.neiNode = null;
        _this.touchPoint = null;
        _this.switchs = [ 0, 0, 0, 0, 0 ];
        _this.audioIds = [ -1, -1, -1, -1, -1 ];
        _this.animState = null;
        _this.waiActions = [];
        _this.neiActions = [];
        _this.touchOriginalPos = null;
        return _this;
      }
      Games_beecircle.prototype.onLoad = function() {
        this.touchOriginalPos = this.touchPoint.position;
        cc.director.getCollisionManager().enabled = true;
      };
      Games_beecircle.prototype.start = function() {
        var anim = this.waiNode.getComponent(cc.Animation);
        anim && (this.animState = anim.play());
        this.pauseAll();
      };
      Games_beecircle.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
        this.node.on("collision.circle", this.onClickBigSwitch, this);
        this.node.on("collision.petal", this.onClickSwitch, this);
      };
      Games_beecircle.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
        this.node.off("collision.circle", this.onClickBigSwitch, this);
        this.node.off("collision.petal", this.onClickSwitch, this);
      };
      Games_beecircle.prototype.onTouchStartCallback = function(t) {
        var p = t.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.touchPoint.position = p;
      };
      Games_beecircle.prototype.onClickSwitch = function(index) {
        this.touchPoint.position = this.touchOriginalPos;
        if (this.switchs[index]) {
          this.petals[index].spriteFrame = this.petalCloses[index];
          cc.audioEngine.pause(this.audioIds[index]);
          this.switchs[index] = 0;
          0 === index ? this.waiNode.children.forEach(function(_) {
            _.stopAllActions();
          }) : 1 === index && this.neiNode.children.forEach(function(_) {
            _.stopAllActions();
          });
          var every = this.switchs.every(function(_) {
            return !_;
          });
          every && this.animState && this.animState.pause();
        } else {
          this.petals[index].spriteFrame = this.petalOpens[index];
          this.audioIds[index] > -1 ? cc.audioEngine.resume(this.audioIds[index]) : this.audioIds[index] = cc.audioEngine.play(this.audios[index], true, 1);
          this.switchs[index] = 1;
          0 === index ? this.waiNode.children.forEach(function(_) {
            var beecircle = _.getComponent("beecircle");
            beecircle && beecircle.anim_wai();
          }) : 1 === index && this.neiNode.children.forEach(function(_) {
            var beecircle = _.getComponent("beecircle");
            beecircle && beecircle.anim_nei();
          });
          var every = this.switchs.every(function(_) {
            return _;
          });
          every && this.animState && this.animState.resume();
        }
      };
      Games_beecircle.prototype.onClickBigSwitch = function() {
        this.touchPoint.position = this.touchOriginalPos;
        var open = this.switchs.some(function(_) {
          return _;
        });
        if (open) {
          this.switchs.fill(0);
          this.pauseAll();
        } else {
          this.switchs.fill(1);
          this.resumeAll();
        }
      };
      Games_beecircle.prototype.resumeAll = function() {
        var _this = this;
        this.petals.forEach(function(_, i) {
          return _.spriteFrame = _this.petalOpens[i];
        });
        this.audioIds.forEach(function(_, i) {
          _ > -1 ? cc.audioEngine.resume(_) : _this.audioIds[i] = cc.audioEngine.play(_this.audios[i], true, 1);
        });
        this.animState && this.animState.resume();
        this.waiNode.children.forEach(function(_) {
          var beecircle = _.getComponent("beecircle");
          beecircle && beecircle.anim_wai();
        });
        this.neiNode.children.forEach(function(_) {
          var beecircle = _.getComponent("beecircle");
          beecircle && beecircle.anim_nei();
        });
      };
      Games_beecircle.prototype.pauseAll = function() {
        var _this = this;
        this.petals.forEach(function(_, i) {
          return _.spriteFrame = _this.petalCloses[i];
        });
        this.audioIds.forEach(function(_) {
          return _ > -1 && cc.audioEngine.pause(_);
        });
        this.animState && this.animState.pause();
        this.waiNode.children.forEach(function(_) {
          _.stopAllActions();
        });
        this.neiNode.children.forEach(function(_) {
          _.stopAllActions();
        });
      };
      Games_beecircle.prototype.hide = function() {
        this.audioIds.forEach(function(_) {
          return cc.audioEngine.stop(_);
        });
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.Sprite,
        tooltip: "5\u4e2a\u82b1\u74e3\u8282\u70b9"
      }) ], Games_beecircle.prototype, "petals", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "5\u4e2a\u82b1\u74e3\u8282\u70b9\u5f00\u542f\u72b6\u6001"
      }) ], Games_beecircle.prototype, "petalOpens", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "5\u4e2a\u82b1\u74e3\u8282\u70b9\u5173\u95ed\u72b6\u6001"
      }) ], Games_beecircle.prototype, "petalCloses", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "5\u79cd\u97f3\u4e50"
      }) ], Games_beecircle.prototype, "audios", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5916\u5708\u8282\u70b9"
      }) ], Games_beecircle.prototype, "waiNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5185\u5708\u8282\u70b9"
      }) ], Games_beecircle.prototype, "neiNode", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u89e6\u6478\u70b9"
      }) ], Games_beecircle.prototype, "touchPoint", void 0);
      Games_beecircle = __decorate([ ccclass ], Games_beecircle);
      return Games_beecircle;
    }(cc.Component);
    exports.default = Games_beecircle;
    cc._RF.pop();
  }, {} ],
  Games_beefly: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f87b28CkxMoIWPos9wsGqW", "Games_beefly");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_beefly = function(_super) {
      __extends(Games_beefly, _super);
      function Games_beefly() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.beefly = null;
        _this.beeflyCount = 15;
        _this.beeflyRadius = 100;
        return _this;
      }
      Games_beefly_1 = Games_beefly;
      Games_beefly.prototype.onLoad = function() {
        var windowSize = cc.winSize;
        var width = windowSize.width;
        var height = windowSize.height;
        Games_beefly_1.MaxLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        cc.log("maxLength: " + Games_beefly_1.MaxLength);
        cc.director.getCollisionManager().enabled = true;
      };
      Games_beefly.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
      };
      Games_beefly.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
      };
      Games_beefly.prototype.onTouchStartCallback = function(t) {
        var p = t.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        for (var i = 0; i < this.beeflyCount; i++) {
          var node = cc.instantiate(this.beefly);
          node.parent = this.node.getChildByName("content");
          node.setPosition(p.x - this.beeflyRadius + 2 * Math.random() * this.beeflyRadius, p.y - this.beeflyRadius + 2 * Math.random() * this.beeflyRadius);
          node.scale = .4 + .2 * Math.random();
          node.angle = 360 * Math.random();
        }
      };
      Games_beefly.prototype.hide = function() {
        this.node.getChildByName("content").children.forEach(function(_) {
          if ("beefly" === _.name) {
            var beefly = _.getComponent("beefly");
            beefly && beefly.stopAudio();
          }
        });
        this.node.destroy();
      };
      var Games_beefly_1;
      Games_beefly.MaxLength = 1500;
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u5c0f\u871c\u8702\u9884\u5236\u4f53"
      }) ], Games_beefly.prototype, "beefly", void 0);
      __decorate([ property({
        tooltip: "\u70b9\u51fb\u51fa\u73b0\u5c0f\u871c\u8702\u4e2a\u6570"
      }) ], Games_beefly.prototype, "beeflyCount", void 0);
      __decorate([ property({
        tooltip: "\u5c0f\u871c\u8702\u51fa\u73b0\u77e9\u5f62\u534a\u5f84"
      }) ], Games_beefly.prototype, "beeflyRadius", void 0);
      Games_beefly = Games_beefly_1 = __decorate([ ccclass ], Games_beefly);
      return Games_beefly;
    }(cc.Component);
    exports.default = Games_beefly;
    cc._RF.pop();
  }, {} ],
  Games_bughunt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "106d3BPiWFF87kRMZbE63Oo", "Games_bughunt");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_bughunt = function(_super) {
      __extends(Games_bughunt, _super);
      function Games_bughunt() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bug = null;
        _this.clover = null;
        _this.cloverCount = 200;
        _this.bugMinCount = 5;
        _this.bugMaxCount = 9;
        _this.tapNode = null;
        _this.width = 960;
        _this.height = 640;
        return _this;
      }
      Games_bughunt.prototype.onLoad = function() {
        var windowSize = cc.winSize;
        this.width = windowSize.width;
        this.height = windowSize.height;
        cc.director.getCollisionManager().enabled = true;
      };
      Games_bughunt.prototype.onDestroy = function() {
        cc.director.getCollisionManager().enabled = false;
      };
      Games_bughunt.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveCallback, this);
        this.node.on("bug.collision", this.restart, this);
      };
      Games_bughunt.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveCallback, this);
        this.node.off("bug.collision", this.restart, this);
      };
      Games_bughunt.prototype.start = function() {
        var bugCount = this.bugMinCount + Math.floor(Math.random() * (this.bugMaxCount - this.bugMinCount));
        for (var i = 0; i < bugCount; i++) {
          var node = cc.instantiate(this.bug);
          node.parent = this.node.getChildByName("content");
          node.emit("onShow", i + 1);
          var w = .8 * this.width;
          var h = .8 * this.height;
          node.setPosition(-w / 2 + Math.random() * w, -h / 2 + Math.random() * h);
          node.angle = -360 * Math.random();
        }
        for (var i = 0; i < this.cloverCount; i++) {
          var node = cc.instantiate(this.clover);
          node.parent = this.node.getChildByName("content");
          node.setPosition(-this.width / 2 + Math.random() * this.width, -this.height / 2 + Math.random() * this.height);
          node.angle = -120 * Math.random();
        }
      };
      Games_bughunt.prototype.restart = function() {
        var _this = this;
        this.scheduleOnce(function(_) {
          var content = _this.node.getChildByName("content");
          if (content) {
            var bug = content.getChildByName("bug");
            if (!bug) {
              content.removeAllChildren();
              _this.start();
            }
          }
        }, 1);
      };
      Games_bughunt.prototype.onTouchStartCallback = function(t) {
        var p = t.getLocation();
        p = this.node.convertToNodeSpaceAR(p);
        this.tapNode.position = p;
      };
      Games_bughunt.prototype.onTouchMoveCallback = function(t) {
        var delta = t.getDelta();
        this.tapNode.x += delta.x;
        this.tapNode.y += delta.y;
      };
      Games_bughunt.prototype.hide = function() {
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u8717\u725b\u9884\u5236\u4f53"
      }) ], Games_bughunt.prototype, "bug", void 0);
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u4e09\u53f6\u8349\u9884\u5236\u4f53"
      }) ], Games_bughunt.prototype, "clover", void 0);
      __decorate([ property({
        tooltip: "\u4e09\u53f6\u8349\u6570\u91cf"
      }) ], Games_bughunt.prototype, "cloverCount", void 0);
      __decorate([ property({
        tooltip: "\u8717\u725b\u6700\u5c0f\u6570\u91cf"
      }) ], Games_bughunt.prototype, "bugMinCount", void 0);
      __decorate([ property({
        tooltip: "\u8717\u725b\u6700\u5927\u6570\u91cf"
      }) ], Games_bughunt.prototype, "bugMaxCount", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u89e6\u6478\u9884\u5236\u4f53"
      }) ], Games_bughunt.prototype, "tapNode", void 0);
      Games_bughunt = __decorate([ ccclass ], Games_bughunt);
      return Games_bughunt;
    }(cc.Component);
    exports.default = Games_bughunt;
    cc._RF.pop();
  }, {} ],
  Games_cubes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a20a6lTW0JLcq7cZ/qTtWVc", "Games_cubes");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_cubes = function(_super) {
      __extends(Games_cubes, _super);
      function Games_cubes() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Games_cubes.prototype.hide = function() {
        this.node.destroy();
      };
      Games_cubes = __decorate([ ccclass ], Games_cubes);
      return Games_cubes;
    }(cc.Component);
    exports.default = Games_cubes;
    cc._RF.pop();
  }, {} ],
  Games_notebugs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19550KmNEZGcI6VW6CZEB7g", "Games_notebugs");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_notebugs = function(_super) {
      __extends(Games_notebugs, _super);
      function Games_notebugs() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bug = null;
        _this.grid = null;
        _this.BugCount = 20;
        return _this;
      }
      Games_notebugs.prototype.onEnable = function() {
        this.grid.removeAllChildren(true);
        for (var i = 0; i < this.BugCount; i++) {
          var node = cc.instantiate(this.bug);
          node.parent = this.grid;
        }
      };
      Games_notebugs.prototype.hide = function() {
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.Prefab,
        tooltip: "\u866b\u5b50\u9884\u5236\u4f53"
      }) ], Games_notebugs.prototype, "bug", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u7f51\u683c\u8282\u70b9"
      }) ], Games_notebugs.prototype, "grid", void 0);
      Games_notebugs = __decorate([ ccclass ], Games_notebugs);
      return Games_notebugs;
    }(cc.Component);
    exports.default = Games_notebugs;
    cc._RF.pop();
  }, {} ],
  Games_outlines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9e96oGC2NCNYAJ40RjXSXG", "Games_outlines");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var bug_anim_1 = require("./bug_anim");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_outlines = function(_super) {
      __extends(Games_outlines, _super);
      function Games_outlines() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.p1s = [];
        _this.p2s = [];
        _this.index = 1;
        _this.totalNum = 3;
        return _this;
      }
      Games_outlines.prototype.clickBtn = function() {
        var every = this["p" + this.index + "s"].every(function(_) {
          return _.isDone();
        });
        if (every) {
          var node = this.node.getChildByName("p" + this.index);
          node && (node.active = false);
          this.index++;
          this.index > this.totalNum && (this.index = 1);
          node = this.node.getChildByName("p" + this.index);
          node && (node.active = true);
        }
      };
      Games_outlines.prototype.hide = function() {
        this.node.destroy();
      };
      __decorate([ property({
        type: bug_anim_1.default,
        tooltip: "\u56fe\u4e00\u52a8\u753b\u96c6"
      }) ], Games_outlines.prototype, "p1s", void 0);
      __decorate([ property({
        type: bug_anim_1.default,
        tooltip: "\u56fe\u4e8c\u52a8\u753b\u96c6"
      }) ], Games_outlines.prototype, "p2s", void 0);
      Games_outlines = __decorate([ ccclass ], Games_outlines);
      return Games_outlines;
    }(cc.Component);
    exports.default = Games_outlines;
    cc._RF.pop();
  }, {
    "./bug_anim": "bug_anim"
  } ],
  Games_trails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "818b1xwNtFAQJar4YyxpxSJ", "Games_trails");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Games_trails = function(_super) {
      __extends(Games_trails, _super);
      function Games_trails() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ps = [];
        return _this;
      }
      Games_trails.prototype.onEnable = function() {
        this.node.on("anim.finish", this.finish, this);
      };
      Games_trails.prototype.onDisable = function() {
        this.node.off("anim.finish", this.finish, this);
      };
      Games_trails.prototype.finish = function(index) {
        var _this = this;
        if (index >= this.ps.length) {
          this.scheduleOnce(function(_) {
            _this.ps.forEach(function(_) {
              return _.active = false;
            });
            _this.ps[0].active = true;
          }, 1);
          return;
        }
        this.ps[index].active = true;
      };
      Games_trails.prototype.hide = function() {
        this.ps.forEach(function(_) {
          var trail = _.getComponentInChildren("trail");
          trail && trail.stopAudio();
        });
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u663e\u793a\u6216\u9690\u85cf\u8282\u70b9"
      }) ], Games_trails.prototype, "ps", void 0);
      Games_trails = __decorate([ ccclass ], Games_trails);
      return Games_trails;
    }(cc.Component);
    exports.default = Games_trails;
    cc._RF.pop();
  }, {} ],
  Gendarmes_bug: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69a7eff9t5E96Ky9MyHPyFH", "Gendarmes_bug");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Gendarmes_bug = function(_super) {
      __extends(Gendarmes_bug, _super);
      function Gendarmes_bug() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cockroachs = [];
        _this.cockroach = null;
        _this.sound = null;
        _this.index = 0;
        _this.originalX = 0;
        _this.screenWidth = 960;
        return _this;
      }
      Gendarmes_bug.prototype.onLoad = function() {
        this.originalX = this.cockroach.node.x;
        this.index = Math.floor(Math.random() * this.cockroachs.length);
        this.cockroach.spriteFrame = this.cockroachs[this.index];
        var windowSize = cc.winSize;
        this.screenWidth = windowSize.width;
      };
      Gendarmes_bug.prototype.onClick = function(ev, data) {
        var _this = this;
        if (Math.round(this.cockroach.node.x) !== this.originalX) return;
        var d = parseInt(data);
        if (d === this.index) {
          var x = this.screenWidth / 2 + this.cockroach.node.height / 2;
          var y = this.cockroach.node.y;
          this.cockroach.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(x, y)), cc.moveTo(0, cc.v2(-x, y)), cc.callFunc(function(_) {
            while (true) {
              var i = Math.floor(Math.random() * _this.cockroachs.length);
              if (i !== _this.index) {
                _this.index = i;
                break;
              }
            }
            _this.cockroach.spriteFrame = _this.cockroachs[_this.index];
          }), cc.moveTo(1.2, cc.v2(this.originalX, y)), cc.callFunc(function(_) {
            cc.audioEngine.play(_this.sound, false, 1);
          })));
        }
      };
      Gendarmes_bug.prototype.hide = function() {
        this.node.destroy();
      };
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "\u87d1\u8782\u56fe\u96c6"
      }) ], Gendarmes_bug.prototype, "cockroachs", void 0);
      __decorate([ property({
        type: cc.Sprite,
        tooltip: "\u4e2d\u95f4\u7684\u87d1\u8782"
      }) ], Gendarmes_bug.prototype, "cockroach", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u89e6\u53d1\u58f0\u97f3"
      }) ], Gendarmes_bug.prototype, "sound", void 0);
      Gendarmes_bug = __decorate([ ccclass ], Gendarmes_bug);
      return Gendarmes_bug;
    }(cc.Component);
    exports.default = Gendarmes_bug;
    cc._RF.pop();
  }, {} ],
  JG_main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cef0XVOz1Pk56ihsBxWIrY", "JG_main");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JG_main = function(_super) {
      __extends(JG_main, _super);
      function JG_main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.page_rainbow = null;
        _this.page_rocket = null;
        _this.page_pig = null;
        _this.page_leaf = null;
        _this.page_ball = null;
        _this.page_flower = null;
        _this.page_ladybird = null;
        _this.page_moon = null;
        _this.page_down = null;
        _this.page_butterfly = null;
        _this.btns = [];
        return _this;
      }
      JG_main.prototype.onClickRainbow = function() {
        var _this = this;
        this.hideAllPage("button 10001");
        this.scheduleOnce(function(_) {
          _this.page_rainbow.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickRocket = function() {
        var _this = this;
        this.hideAllPage("button 20001");
        this.scheduleOnce(function(_) {
          _this.page_rocket.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickPig = function() {
        var _this = this;
        this.hideAllPage("button 30001");
        this.scheduleOnce(function(_) {
          _this.page_pig.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickLeaf = function() {
        var _this = this;
        this.hideAllPage("button 40001");
        this.scheduleOnce(function(_) {
          _this.page_leaf.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickBall = function() {
        var _this = this;
        this.hideAllPage("button 70001");
        this.scheduleOnce(function(_) {
          _this.page_ball.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickFollower = function() {
        var _this = this;
        this.hideAllPage("button 150001");
        this.scheduleOnce(function(_) {
          _this.page_flower.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickLadybird = function() {
        var _this = this;
        this.hideAllPage("button 50001");
        this.scheduleOnce(function(_) {
          _this.page_ladybird.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickMoon = function() {
        var _this = this;
        this.hideAllPage("button 80001");
        this.scheduleOnce(function(_) {
          _this.page_moon.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickDown = function() {
        var _this = this;
        this.hideAllPage("button 170001");
        this.scheduleOnce(function(_) {
          _this.page_down.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.onClickButterFly = function() {
        var _this = this;
        this.hideAllPage("button 210001");
        this.scheduleOnce(function(_) {
          _this.page_butterfly.active = true;
        }, .1 * this.btns.length + .2);
      };
      JG_main.prototype.hideAllPage = function(name) {
        this.btns.forEach(function(_, i) {
          name !== _.name && _.runAction(cc.sequence(cc.delayTime(.1 * Math.round(Math.random() * i)), cc.fadeOut(.3), cc.delayTime(2), cc.fadeIn(.2)));
        });
        this.page_rainbow.active = false;
        this.page_rocket.active = false;
        this.page_pig.active = false;
        this.page_leaf.active = false;
        this.page_ball.active = false;
        this.page_flower.active = false;
        this.page_ladybird.active = false;
        this.page_moon.active = false;
        this.page_down.active = false;
        this.page_butterfly.active = false;
      };
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_rainbow", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_rocket", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_pig", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_leaf", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_ball", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_flower", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_ladybird", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_moon", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_down", void 0);
      __decorate([ property(cc.Node) ], JG_main.prototype, "page_butterfly", void 0);
      __decorate([ property([ cc.Node ]) ], JG_main.prototype, "btns", void 0);
      JG_main = __decorate([ ccclass ], JG_main);
      return JG_main;
    }(cc.Component);
    exports.default = JG_main;
    cc._RF.pop();
  }, {} ],
  JG_match: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7dc4CAaxVEB5oOER/HUUAZ", "JG_match");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MIN_Z = 10;
    var FULLSCREEN_WIDTH = 960;
    var FULLSCREEN_HEIGHT = 640;
    var JG_match = function(_super) {
      __extends(JG_match, _super);
      function JG_match() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.original = null;
        _this.raw = null;
        _this.audio = null;
        _this.match = false;
        _this.callback = null;
        return _this;
      }
      JG_match.prototype.onEnable = function() {
        this.raw.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.raw.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      JG_match.prototype.onDisable = function() {
        this.raw.targetOff(this);
      };
      JG_match.prototype.onTouchMove = function(t) {
        var delta = t.getDelta();
        this.raw.x += delta.x;
        this.raw.y += delta.y;
      };
      JG_match.prototype.onTouchEnd = function() {
        var width = Math.abs(this.raw.x - this.original.x);
        var height = Math.abs(this.raw.y - this.original.y);
        cc.log("raw.x: " + this.raw.x + " original.x: " + this.original.x + "  raw.y: " + this.raw.y + " original.y: " + this.original.y);
        if (!this.match && width <= MIN_Z && height <= MIN_Z) {
          this.original.opacity = 255;
          this.raw.opacity = 0;
          this.match = true;
          this.callback && this.callback();
          cc.audioEngine.play(this.audio, false, 1);
        }
      };
      JG_match.prototype.isMatch = function() {
        return this.match;
      };
      JG_match.prototype.setFinish = function(callback) {
        this.callback = callback;
      };
      JG_match.prototype.clear = function() {
        this.raw.opacity = 255;
        this.original.opacity = 0;
        this.match = false;
        this.raw.x = Math.random() * FULLSCREEN_WIDTH - FULLSCREEN_WIDTH / 2;
        this.raw.y = Math.random() * FULLSCREEN_HEIGHT - FULLSCREEN_HEIGHT / 2;
      };
      __decorate([ property(cc.Node) ], JG_match.prototype, "original", void 0);
      __decorate([ property(cc.Node) ], JG_match.prototype, "raw", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], JG_match.prototype, "audio", void 0);
      JG_match = __decorate([ ccclass ], JG_match);
      return JG_match;
    }(cc.Component);
    exports.default = JG_match;
    cc._RF.pop();
  }, {} ],
  JG_module: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00ff58z30tIAKLF0pWTgHfv", "JG_module");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JG_match_1 = require("./JG_match");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JG_module = function(_super) {
      __extends(JG_module, _super);
      function JG_module() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.smallRocket = null;
        _this.raws = [];
        _this.smallRocketX = 412;
        _this.laughter = null;
        return _this;
      }
      JG_module.prototype.onLoad = function() {
        var _this = this;
        this.raws.forEach(function(_) {
          _.setFinish(_this.callback.bind(_this));
        });
      };
      JG_module.prototype.callback = function() {
        var all = true;
        for (var i = 0; i < this.raws.length; i++) if (!this.raws[i].isMatch()) {
          all = false;
          break;
        }
        if (all) {
          this.smallRocket.runAction(cc.moveTo(1, cc.v2(this.smallRocketX, 320)).easing(cc.easeCubicActionOut()));
          cc.audioEngine.play(this.laughter, false, 1);
        }
      };
      JG_module.prototype.onClickRestart = function() {
        this.smallRocket.y = -320;
        this.raws.forEach(function(_) {
          _.clear();
        });
      };
      JG_module.prototype.hide = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], JG_module.prototype, "smallRocket", void 0);
      __decorate([ property([ JG_match_1.default ]) ], JG_module.prototype, "raws", void 0);
      __decorate([ property ], JG_module.prototype, "smallRocketX", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], JG_module.prototype, "laughter", void 0);
      JG_module = __decorate([ ccclass ], JG_module);
      return JG_module;
    }(cc.Component);
    exports.default = JG_module;
    cc._RF.pop();
  }, {
    "./JG_match": "JG_match"
  } ],
  LittleGames_back: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95a4bSZxo9L+oJA2c4J/w4s", "LittleGames_back");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      Back_Home: function Back_Home() {
        cc.audioEngine.stopMusic();
        cc.director.loadScene("LittleGames_three");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_child: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12cc9tv+hxDOrsf7VVt3rUI", "LittleGames_child");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      Little_Games_theatre: function Little_Games_theatre() {
        cc.director.loadScene("theatre");
      },
      Little_Games_dolphin_box: function Little_Games_dolphin_box() {
        cc.director.loadScene("dolphin_box");
      },
      Little_Games_pig_box: function Little_Games_pig_box() {
        cc.director.loadScene("pig_box");
      },
      Little_Games_dolphins: function Little_Games_dolphins() {
        cc.director.loadScene("dolphins");
      },
      Little_Games_kaliedascope: function Little_Games_kaliedascope() {
        cc.director.loadScene("kaliedascope");
      },
      Little_Games_ball_417: function Little_Games_ball_417() {
        cc.director.loadScene("ball_417");
      },
      Little_Games_clowns_417: function Little_Games_clowns_417() {
        cc.director.loadScene("clowns_417");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_drag0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83b0fCE3jNEFapPqu3U7egd", "LittleGames_drag0");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.game.setFrameRate(36);
        this.isstartdrag = false;
        this.zcb = this.node.getChildByName("shape 58");
        this.ycb = this.node.getChildByName("shape 57");
        this.speed = 30;
        this.viscosity = 1.03;
        this.pozy = 415;
        this.yvelocity = 0;
        this.stopdrag = false;
      },
      start: function start() {
        this.node.getChildByName("hitarea0").on(cc.Node.EventType.TOUCH_START, this.startdrag.bind(this), this);
        this.node.getChildByName("hitarea1").on(cc.Node.EventType.TOUCH_START, this.startdrag.bind(this), this);
        this.node.getChildByName("hitarea0").on(cc.Node.EventType.TOUCH_MOVE, this.move.bind(this), this);
        this.node.getChildByName("hitarea1").on(cc.Node.EventType.TOUCH_MOVE, this.move.bind(this), this);
        this.node.getChildByName("hitarea0").on(cc.Node.EventType.TOUCH_CANCEL, this.stopdragf.bind(this), this);
        this.node.getChildByName("hitarea1").on(cc.Node.EventType.TOUCH_CANCEL, this.stopdragf.bind(this), this);
        this.node.getChildByName("hitarea0").on(cc.Node.EventType.TOUCH_END, this.stopdragf.bind(this), this);
        this.node.getChildByName("hitarea1").on(cc.Node.EventType.TOUCH_END, this.stopdragf.bind(this), this);
      },
      startdrag: function startdrag(e) {
        this.stopdrag = false;
        this.isstartdrag = true;
        console.log(this.isstartdrag);
      },
      move: function move(e) {
        this.isstartdrag && !this.stopdrag && this.node.y > 160 && (this.node.y += e.getDelta().y);
      },
      stopdragf: function stopdragf() {
        this.stopdrag = true;
      },
      update: function update(dt) {
        this.zcb.angle = -[ -this.node.y / 4 - 60 ];
        this.ycb.angle = -[ this.node.y / 4 - 110 ];
        if (this.stopdrag) {
          this.difference2 = this.pozy - this.node.y;
          this.yvelocity = (this.yvelocity + this.difference2 / this.speed) / this.viscosity;
          this.node.y += this.yvelocity;
          this.difference2 = this.pozy - this.node.y;
          this.yvelocity = (this.yvelocity + this.difference2 / this.speed) / this.viscosity;
          this.node.y += this.yvelocity;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_drag1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02f18vrb5ZEfaEYf5qVo6kU", "LittleGames_drag1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.isstartdrag = false;
        this.isstopdrag = false;
        this.myarray = [ 11, 0, -11, 0 ];
        this.index = 0;
        this.zmn = this.node.getChildByName("shape 70");
        this.sound = this.node.getComponent(cc.AudioSource);
        this.sound.loop = true;
        this.o = false;
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startdrag.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.move.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stopdrag.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.stopdrag.bind(this), this);
      },
      startdrag: function startdrag(e) {
        this.isstartdrag = true;
        this.isstopdrag = false;
      },
      move: function move(e) {
        if (this.isstartdrag && !this.isstopdrag && this.node.y > -106 && this.node.y < 155) {
          this.node.y += e.getDelta().y;
          this.node.y < -106 && (this.node.y = -106);
          this.node.y > 155 && (this.node.y = 155);
        }
      },
      stopdrag: function stopdrag(e) {
        this.isstopdrag = true;
      },
      update: function update(dt) {
        if (this.isstopdrag) {
          if (!this.o) {
            this.o = true;
            this.sound.play();
          }
          this.zmn.angle = -this.myarray[this.index];
          this.index++;
          this.index > this.myarray.length - 1 && (this.index = 0);
          this.drop = parseInt(6 * Math.random() + 1);
          this.node.y -= this.drop - 1;
          if (this.node.y <= -105) {
            this.o = false;
            this.sound.stop();
            this.isstopdrag = false;
            this.node.y = -105;
            this.zmn.angle = 11;
            console.log(this.zmn.angle);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_ft: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c3269s14hKkrCQ+0A09HUr", "LittleGames_ft");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.walk = 1;
        this.time = 0;
        this.readywalk = false;
        this.end = false;
        this.sound = this.getComponent(cc.AudioSource);
        this.ft = cc.find("Canvas/LittleGames_three/ftanime").getComponent(cc.Animation);
        this.leg = cc.find("Canvas/LittleGames_three/legs").getComponent(cc.Animation);
        this.target = cc.find("Canvas/LittleGames_three");
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startft.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.stopft.bind(this), this);
      },
      startft: function startft(e) {
        this.readywalk = true;
        this.ft.play("ftanime");
      },
      stopft: function stopft(e) {
        this.ft.play("ftanime2");
        this.leg.play();
        this.end = true;
        this.sound.play();
        this.sound.loop = true;
      },
      update: function update(dt) {
        if (this.readywalk) {
          this.time += .05;
          this.walk += parseInt(this.time);
          console.log(this.walk);
        }
        if (this.end) {
          this.readywalk = false;
          if (this.walk > 0) {
            this.target.x -= 1;
            this.target.x < -500 && (this.target.x = 457);
          } else {
            this.time = 0;
            this.walk = 1;
            this.sound.stop();
            this.end = false;
            this.leg.stop();
            var cur = this.ft.currentClip;
            this.ft.play(cur.name, 0);
            this.ft.sample(cur.name);
            this.ft.stop();
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51eb4MPCxZJ5ItucFYcVXE9", "LittleGames_home");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      Little_Games_theatre: function Little_Games_theatre() {
        cc.director.loadScene("theatre");
      },
      kidshome_child_ShapesGames: function kidshome_child_ShapesGames() {
        cc.director.loadScene("ShapesGames");
      },
      kidshome_child_JigsawGames: function kidshome_child_JigsawGames() {
        cc.director.loadScene("JigsawGames");
      },
      kidshome_child_Song_Games: function kidshome_child_Song_Games() {
        cc.director.loadScene("Song _Games");
      },
      kidshome_child_PianoGames: function kidshome_child_PianoGames() {
        cc.director.loadScene("PianoGames");
      },
      kidshome_child_Wooden: function kidshome_child_Wooden() {
        cc.director.loadScene("Wooden");
      },
      kidshome_child_bottles: function kidshome_child_bottles() {
        cc.director.loadScene("bottles");
      },
      kidshome_child_CompareGames: function kidshome_child_CompareGames() {
        cc.director.loadScene("CompareGames");
      },
      kidshome_child_paint_game: function kidshome_child_paint_game() {
        cc.director.loadScene("paint_game");
      },
      kidshome_child_ColoringGames: function kidshome_child_ColoringGames() {
        cc.director.loadScene("ColoringGames");
      },
      kidshome_child_LittleGames_three: function kidshome_child_LittleGames_three() {
        cc.director.loadScene("LittleGames_three");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  LittleGames_walk: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b60ddBgP+pGAKs2Tk3UJf9s", "LittleGames_walk");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.ft = cc.find("Canvas/LittleGames_three/ftanime/hitarea").getComponent("LittleGames_ft");
      },
      walkend: function walkend() {
        this.ft.walk--;
      }
    });
    cc._RF.pop();
  }, {} ],
  NewScript_fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50b1dpqAepHD7PLEU3w+Mjn", "NewScript_fish");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 0,
        right_x: 0,
        left_x: 0
      },
      onLoad: function onLoad() {
        this.left_x = this.node.x;
      },
      start: function start() {},
      update: function update(dt) {
        this.node.x += this.speed * dt;
        if (this.node.x >= this.right_x) {
          var random = Math.floor(801 * Math.random());
          this.node.x = this.left_x - random;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PaoPaoMgr_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3bfb+Hi0xPU5/x3BLpgGEh", "PaoPaoMgr_1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        games_two: cc.Node,
        Pao: cc.Prefab,
        music: {
          type: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.CreatPaoPao();
      },
      start: function start() {},
      CreatPaoPao: function CreatPaoPao() {
        for (var i = 0; i < 10; i++) {
          var a = cc.instantiate(this.Pao);
          this.node.addChild(a);
          var x = 900 * Math.random() - 450;
          var y = 560 * Math.random() - 280;
          a.setPosition(x, y);
          a.getComponent("BoxPaoPao").init();
        }
      },
      close: function close() {
        this.games_two.active = false;
        cc.audioEngine.play(this.music, false, 1);
      },
      closeTwo: function closeTwo() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("Box_Games");
      }
    });
    cc._RF.pop();
  }, {} ],
  PaoPaoMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6d77P/R6NJzotDtATdmXOc", "PaoPaoMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Pao: cc.Prefab,
        music: {
          type: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        this.CreatPaoPao();
      },
      start: function start() {},
      CreatPaoPao: function CreatPaoPao() {
        for (var i = 0; i < 10; i++) {
          var a = cc.instantiate(this.Pao);
          this.node.addChild(a);
          var x = 900 * Math.random() - 450;
          var y = 560 * Math.random() - 280;
          a.setPosition(x, y);
          a.getComponent("BoxPaoPao").init();
        }
      },
      close: function close() {
        this.node.stopAllActions();
        this.node.destroy();
        cc.audioEngine.play(this.music, false, 1);
      },
      closeTwo: function closeTwo() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("Box_Games");
      }
    });
    cc._RF.pop();
  }, {} ],
  Pig_box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e21ecYvEAlFFYKKTJ2yZDqZ", "Pig_box");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pig_box = function(_super) {
      __extends(Pig_box, _super);
      function Pig_box() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animation_box = null;
        _this.animation_pig = [];
        _this.node_box_content = null;
        _this.audioClip_bgm = null;
        _this._isBoxOpen = false;
        return _this;
      }
      Pig_box.prototype.onLoad = function() {
        this.node_box_content.active = false;
      };
      Pig_box.prototype.clickGlass = function(event, customEventData) {
        var anim_p = this.animation_pig[customEventData];
        if (anim_p) {
          var animState = anim_p.getAnimationState("pig_box_pig");
          animState.isPaused ? anim_p.resume() : anim_p.pause();
        }
      };
      Pig_box.prototype.clickBox = function() {
        this._isBoxOpen ? this.closeBox() : this.openBox();
      };
      Pig_box.prototype.openBox = function() {
        this._isBoxOpen = true;
        this.animation_box.stop();
        var animState = this.animation_box.getAnimationState("pig_box");
        animState.wrapMode = cc.WrapMode.Normal;
        this.animation_box.play();
        this.node_box_content.active = true;
        cc.audioEngine.playMusic(this.audioClip_bgm, true);
        this.animation_pig.forEach(function(v) {
          return v.play();
        });
      };
      Pig_box.prototype.closeBox = function() {
        this._isBoxOpen = false;
        this.animation_box.stop();
        var animState = this.animation_box.getAnimationState("pig_box");
        animState.wrapMode = cc.WrapMode.Reverse;
        this.animation_box.play();
        this.node_box_content.active = false;
        cc.audioEngine.stopMusic();
        this.animation_pig.forEach(function(v) {
          return v.stop();
        });
      };
      __decorate([ property(cc.Animation) ], Pig_box.prototype, "animation_box", void 0);
      __decorate([ property([ cc.Animation ]) ], Pig_box.prototype, "animation_pig", void 0);
      __decorate([ property(cc.Node) ], Pig_box.prototype, "node_box_content", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Pig_box.prototype, "audioClip_bgm", void 0);
      Pig_box = __decorate([ ccclass ], Pig_box);
      return Pig_box;
    }(cc.Component);
    exports.default = Pig_box;
    cc._RF.pop();
  }, {} ],
  ShadowGames_game_0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30dbcz+ehFDY582IedsLefY", "ShadowGames_game_0");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_0 = function(_super) {
      __extends(ShadowGames_game_0, _super);
      function ShadowGames_game_0() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_all_item = null;
        _this.item = null;
        _this._orignX = 0;
        _this._isMoving = false;
        return _this;
      }
      ShadowGames_game_0.prototype.onLoad = function() {
        for (var index = 1; index < 11; index++) {
          var item = cc.instantiate(this.item);
          item.y = this.item.y - this.item.height * this.item.scaleY * index;
          this.node_all_item.addChild(item);
        }
      };
      ShadowGames_game_0.prototype.playGame = function() {
        var _this = this;
        if (this._isMoving) return;
        this._isMoving = true;
        this.node_all_item.children.forEach(function(c, i) {
          i % 2 === 0 && c.children.forEach(function(c2) {
            c2.runAction(cc.sequence(cc.moveBy(.1, 16, 0), cc.callFunc(function() {
              Math.round(c2.x) >= 224 && (c2.x = -224);
              _this._isMoving = false;
            })));
          });
        });
        this.playSound();
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_0.prototype, "node_all_item", void 0);
      __decorate([ property(cc.Node) ], ShadowGames_game_0.prototype, "item", void 0);
      ShadowGames_game_0 = __decorate([ ccclass ], ShadowGames_game_0);
      return ShadowGames_game_0;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_0;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d044d5dwjhD5YUWTiAWFwNe", "ShadowGames_game_1");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_1 = function(_super) {
      __extends(ShadowGames_game_1, _super);
      function ShadowGames_game_1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sl_left = null;
        _this.sl_right = null;
        _this.node_left = null;
        _this.node_right = null;
        return _this;
      }
      ShadowGames_game_1.prototype.update = function(dt) {
        this.node_left.angle -= -[ 1 * (this.sl_left.progress - .5) ];
        this.node_right.angle -= -[ 1 * (this.sl_right.progress - .5) ];
      };
      __decorate([ property(cc.Slider) ], ShadowGames_game_1.prototype, "sl_left", void 0);
      __decorate([ property(cc.Slider) ], ShadowGames_game_1.prototype, "sl_right", void 0);
      __decorate([ property(cc.Node) ], ShadowGames_game_1.prototype, "node_left", void 0);
      __decorate([ property(cc.Node) ], ShadowGames_game_1.prototype, "node_right", void 0);
      ShadowGames_game_1 = __decorate([ ccclass ], ShadowGames_game_1);
      return ShadowGames_game_1;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_1;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b280eUeQpLSaSjfrXPC9A3", "ShadowGames_game_2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_1 = function(_super) {
      __extends(ShadowGames_game_1, _super);
      function ShadowGames_game_1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        _this._isPlaying = false;
        return _this;
      }
      ShadowGames_game_1.prototype.onLoad = function() {
        this.reset();
      };
      ShadowGames_game_1.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this.node_parent.children.forEach(function(v) {
          return v.active = false;
        });
      };
      ShadowGames_game_1.prototype.playGame = function() {
        var _this = this;
        if (this._isPlaying) return;
        this._isPlaying = true;
        var isActive = this.node_parent.children[0].active;
        this.node_parent.children.forEach(function(v, i) {
          _this.scheduleOnce(function() {
            v.active = !v.active;
            if (isActive || i !== _this.node_parent.childrenCount - 1) isActive && 0 === i && (_this._isPlaying = false); else {
              _this.playSound();
              _this._isPlaying = false;
            }
          }, .01 * (isActive ? _this.node_parent.childrenCount - i : i));
        });
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_1.prototype, "node_parent", void 0);
      ShadowGames_game_1 = __decorate([ ccclass ], ShadowGames_game_1);
      return ShadowGames_game_1;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_1;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc869UbEKlCaZM2vspmqXVK", "ShadowGames_game_3");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_3 = function(_super) {
      __extends(ShadowGames_game_3, _super);
      function ShadowGames_game_3() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        _this._isPlaying = false;
        return _this;
      }
      ShadowGames_game_3.prototype.onLoad = function() {
        this.reset();
      };
      ShadowGames_game_3.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this.node_parent.children.forEach(function(v, i) {
          v.stopAllActions();
          v.color = i < 2 ? cc.Color.WHITE : cc.Color.BLACK;
        });
        this._isPlaying = false;
      };
      ShadowGames_game_3.prototype.playGame = function() {
        var _this = this;
        if (this._isPlaying) return;
        this._isPlaying = true;
        this.node_parent.children.forEach(function(v, i) {
          _this.playSound();
          v.stopAllActions();
          v.color.equals(cc.Color.WHITE) ? v.runAction(cc.sequence(cc.tintTo(.8, 0, 0, 0), cc.callFunc(function() {
            _this._isPlaying = false;
          }))) : v.runAction(cc.sequence(cc.tintTo(.8, 255, 255, 255), cc.callFunc(function() {
            _this._isPlaying = false;
          })));
        });
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_3.prototype, "node_parent", void 0);
      ShadowGames_game_3 = __decorate([ ccclass ], ShadowGames_game_3);
      return ShadowGames_game_3;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_3;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eafeosW29KyZB3nQjyER7N", "ShadowGames_game_4");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_4 = function(_super) {
      __extends(ShadowGames_game_4, _super);
      function ShadowGames_game_4() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        _this._aminIndex = [ 0, 1 ];
        return _this;
      }
      ShadowGames_game_4.prototype.onLoad = function() {
        this.reset();
      };
      ShadowGames_game_4.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this._aminIndex = [ 1, 0 ];
        this.node_parent.children.forEach(function(v, i) {
          var amin = v.getComponent(cc.Animation);
          amin.play();
        });
      };
      ShadowGames_game_4.prototype.playGame = function(evt, index) {
        var amin = this.node_parent.children[index].getComponent(cc.Animation);
        amin.play(amin.getClips()[this._aminIndex[index]].name);
        this._aminIndex[index] = (this._aminIndex[index] + 1) % 2;
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_4.prototype, "node_parent", void 0);
      ShadowGames_game_4 = __decorate([ ccclass ], ShadowGames_game_4);
      return ShadowGames_game_4;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_4;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72b7bCu9fBKipK8FtI/+YYY", "ShadowGames_game_5");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_5 = function(_super) {
      __extends(ShadowGames_game_5, _super);
      function ShadowGames_game_5() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        return _this;
      }
      ShadowGames_game_5.prototype.onLoad = function() {
        var _this = this;
        this.node_parent.children.forEach(function(v) {
          v.on(cc.Node.EventType.TOUCH_START, function() {
            _this.playGame(v);
          });
        });
        this.reset();
      };
      ShadowGames_game_5.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this.node_parent.children.forEach(function(v) {
          v.stopAllActions();
          v.angle = -180;
        });
      };
      ShadowGames_game_5.prototype.playGame = function(node) {
        if (node.getNumberOfRunningActions() < 1) {
          node.runAction(cc.rotateBy(.5, 180));
          this.playSound();
        }
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_5.prototype, "node_parent", void 0);
      ShadowGames_game_5 = __decorate([ ccclass ], ShadowGames_game_5);
      return ShadowGames_game_5;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_5;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_6: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0a09VGKYJEnp7eW3rHUg0v", "ShadowGames_game_6");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_6 = function(_super) {
      __extends(ShadowGames_game_6, _super);
      function ShadowGames_game_6() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        _this._aminIndex = 0;
        return _this;
      }
      ShadowGames_game_6.prototype.onLoad = function() {
        var _this = this;
        this.node_parent.children.forEach(function(v) {
          v.on(cc.Node.EventType.TOUCH_START, function() {
            _this.playGame();
          });
        });
        this.reset();
      };
      ShadowGames_game_6.prototype.reset = function() {
        _super.prototype.reset.call(this);
      };
      ShadowGames_game_6.prototype.playGame = function() {
        var anima = this.node_parent.getComponent(cc.Animation);
        anima.play(anima.getClips()[this._aminIndex++ % 2].name);
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_6.prototype, "node_parent", void 0);
      ShadowGames_game_6 = __decorate([ ccclass ], ShadowGames_game_6);
      return ShadowGames_game_6;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_6;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_7: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d916PITX1OyaPk4PCJAOcT", "ShadowGames_game_7");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_7 = function(_super) {
      __extends(ShadowGames_game_7, _super);
      function ShadowGames_game_7() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_parent = null;
        _this._touchLocation = cc.v2();
        return _this;
      }
      ShadowGames_game_7.prototype.onLoad = function() {
        this.node_parent.parent.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node_parent.parent.on(cc.Node.EventType.TOUCH_MOVE, this._touchStart, this);
      };
      ShadowGames_game_7.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this._touchLocation = cc.v2();
      };
      ShadowGames_game_7.prototype._touchStart = function(touch) {
        var target = touch.target;
        this._touchLocation = target.parent.convertToNodeSpaceAR(touch.getLocation());
      };
      ShadowGames_game_7.prototype.update = function(dt) {
        var dis = this._touchLocation.magSqr();
        dis > 400 && (this.node_parent.angle += .03 * -this._touchLocation.x);
      };
      __decorate([ property(cc.Node) ], ShadowGames_game_7.prototype, "node_parent", void 0);
      ShadowGames_game_7 = __decorate([ ccclass ], ShadowGames_game_7);
      return ShadowGames_game_7;
    }(ShadowGames_game_base_1.default);
    exports.default = ShadowGames_game_7;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShadowGames_game_base: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "922d2npnhhAFKw7mG1OMMkW", "ShadowGames_game_base");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames_game_base = function(_super) {
      __extends(ShadowGames_game_base, _super);
      function ShadowGames_game_base() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioClip_show = [];
        return _this;
      }
      ShadowGames_game_base.prototype.playSound = function() {
        cc.audioEngine.playEffect(this.audioClip_show[Math.floor(this.audioClip_show.length * Math.random())], false);
      };
      ShadowGames_game_base.prototype.reset = function() {};
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], ShadowGames_game_base.prototype, "audioClip_show", void 0);
      ShadowGames_game_base = __decorate([ ccclass ], ShadowGames_game_base);
      return ShadowGames_game_base;
    }(cc.Component);
    exports.default = ShadowGames_game_base;
    cc._RF.pop();
  }, {} ],
  ShadowGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15ccc0sq49HO5nQjPLe3WEb", "ShadowGames");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShadowGames_game_base_1 = require("./ShadowGames_game_base");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShadowGames = function(_super) {
      __extends(ShadowGames, _super);
      function ShadowGames() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_menu = null;
        _this.node_game = null;
        _this.node_back = null;
        _this._isOpeningOrClosing = false;
        return _this;
      }
      ShadowGames.prototype.onLoad = function() {
        var _this = this;
        this.node_menu.active = true;
        this.node_game.active = false;
        this.node_menu.children.forEach(function(v, i) {
          v.on(cc.Node.EventType.TOUCH_START, function() {
            _this.openGame(i);
          });
        });
      };
      ShadowGames.prototype.openGame = function(index) {
        var _this = this;
        if (this._isOpeningOrClosing) return;
        this._isOpeningOrClosing = true;
        this.node_game.active = false;
        this.node_menu.children.forEach(function(v, i) {
          _this.node_game.children[i].active = false;
          _this.scheduleOnce(function() {
            v.active = false;
            if (i === _this.node_menu.childrenCount - 1) {
              _this.node_game.children[index].active = true;
              _this._isOpeningOrClosing = false;
              _this.node_game.active = true;
              _this.node_back.active = false;
              _this.node_game.children[index].getComponent(ShadowGames_game_base_1.default).reset();
            }
          }, .1 * i);
        });
      };
      ShadowGames.prototype.backToMenu = function() {
        var _this = this;
        if (this._isOpeningOrClosing) return;
        this._isOpeningOrClosing = true;
        this.node_game.active = false;
        this.node_back.active = true;
        this.node_menu.children.forEach(function(v, i) {
          _this.node_game.children[i].active = false;
          _this.scheduleOnce(function() {
            v.active = true;
            i === _this.node_menu.childrenCount - 1 && (_this._isOpeningOrClosing = false);
          }, .1 * i);
        });
      };
      __decorate([ property(cc.Node) ], ShadowGames.prototype, "node_menu", void 0);
      __decorate([ property(cc.Node) ], ShadowGames.prototype, "node_game", void 0);
      __decorate([ property(cc.Node) ], ShadowGames.prototype, "node_back", void 0);
      ShadowGames = __decorate([ ccclass ], ShadowGames);
      return ShadowGames;
    }(cc.Component);
    exports.default = ShadowGames;
    cc._RF.pop();
  }, {
    "./ShadowGames_game_base": "ShadowGames_game_base"
  } ],
  ShapesGames_mapItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9bfc2X3LXNPnpWH4CUAjoQm", "ShapesGames_mapItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GOT_IT_DIS = 2500;
    var POS_OFFSET = cc.v2(-50, 50);
    var ShapesGames_mapItem = function(_super) {
      __extends(ShapesGames_mapItem, _super);
      function ShapesGames_mapItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pos_target = cc.v2();
        _this.mask = null;
        _this.node_big = null;
        _this.sp_big = null;
        _this.sp_mask_top = null;
        _this.audioClip_hide = [];
        return _this;
      }
      ShapesGames_mapItem.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
      };
      ShapesGames_mapItem.prototype.init = function(sp_mask, sp_big, sp_mask_top) {
        var pos_target = cc.v2(600 * Math.random() - 300, 200 * Math.random() - 100);
        this.pos_target = pos_target;
        this.node_big.x = pos_target.x;
        this.node_big.y = pos_target.y;
        this.mask.spriteFrame = sp_mask;
        this.sp_big.spriteFrame = sp_big;
        this.sp_mask_top.spriteFrame = sp_mask_top;
        var rect = this.mask.spriteFrame.getRect();
        this.mask.node.setContentSize(rect.width, rect.height);
        this.node.setContentSize(rect.width, rect.height);
      };
      ShapesGames_mapItem.prototype._onTouchMove = function(touchEvent) {
        var location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location).add(POS_OFFSET);
      };
      ShapesGames_mapItem.prototype._onTouchEnd = function(touchEvent) {
        var dis = this.node.position.add(this.pos_target).magSqr();
        if (dis < GOT_IT_DIS) {
          cc.log("got it");
          cc.audioEngine.playEffect(this.audioClip_hide[Math.floor(this.audioClip_hide.length * Math.random())], false);
          this.node.active = false;
        }
      };
      __decorate([ property(cc.Vec2) ], ShapesGames_mapItem.prototype, "pos_target", void 0);
      __decorate([ property(cc.Mask) ], ShapesGames_mapItem.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], ShapesGames_mapItem.prototype, "node_big", void 0);
      __decorate([ property(cc.Sprite) ], ShapesGames_mapItem.prototype, "sp_big", void 0);
      __decorate([ property(cc.Sprite) ], ShapesGames_mapItem.prototype, "sp_mask_top", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], ShapesGames_mapItem.prototype, "audioClip_hide", void 0);
      ShapesGames_mapItem = __decorate([ ccclass ], ShapesGames_mapItem);
      return ShapesGames_mapItem;
    }(cc.Component);
    exports.default = ShapesGames_mapItem;
    cc._RF.pop();
  }, {} ],
  ShapesGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1eefe6/ZhOd7mvuLw7hrPB", "ShapesGames");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShapesGames_mapItem_1 = require("./ShapesGames_mapItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShapesGames = function(_super) {
      __extends(ShapesGames, _super);
      function ShapesGames() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_menu = null;
        _this.node_match = null;
        _this.node_back = null;
        _this.mapItem = null;
        _this.node_match_bg = null;
        _this.spf_big = [];
        _this.spf_mask = [];
        _this.spf_mask_top = [];
        _this.audioClip_show = [];
        _this._mapItems = [];
        _this._showCount = 0;
        return _this;
      }
      ShapesGames.prototype.onLoad = function() {
        this._mapItems = [ this.mapItem ];
        for (var index = 0; index < 4; index++) {
          var node_map = cc.instantiate(this.mapItem.node);
          this._mapItems.push(node_map.getComponent(ShapesGames_mapItem_1.default));
          this.node_match_bg.addChild(node_map);
        }
        this.backToMenu();
      };
      ShapesGames.prototype.openGameView = function(evt, customEventData) {
        var _this = this;
        this.node_menu.active = false;
        this.node_match.active = true;
        this.node_back.active = false;
        this.node_match_bg.getComponent(cc.Sprite).spriteFrame = this.spf_big[customEventData];
        this._mapItems.forEach(function(item, index) {
          item.node.x = 140 * index - 250;
          item.node.y = -260;
          item.node.active = false;
          item.init(_this.spf_mask[customEventData], _this.spf_big[customEventData], _this.spf_mask_top[customEventData]);
        });
        this._showCount = 0;
        this.unschedule(this.showMapItem);
        this.schedule(this.showMapItem, .2, 4);
      };
      ShapesGames.prototype.backToMenu = function() {
        this.node_menu.active = true;
        this.node_match.active = false;
        this.node_back.active = true;
      };
      ShapesGames.prototype.showMapItem = function() {
        this._mapItems[this._showCount++].node.active = true;
        cc.audioEngine.playEffect(this.audioClip_show[Math.floor(this.audioClip_show.length * Math.random())], false);
      };
      __decorate([ property(cc.Node) ], ShapesGames.prototype, "node_menu", void 0);
      __decorate([ property(cc.Node) ], ShapesGames.prototype, "node_match", void 0);
      __decorate([ property(cc.Node) ], ShapesGames.prototype, "node_back", void 0);
      __decorate([ property(ShapesGames_mapItem_1.default) ], ShapesGames.prototype, "mapItem", void 0);
      __decorate([ property(cc.Node) ], ShapesGames.prototype, "node_match_bg", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], ShapesGames.prototype, "spf_big", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], ShapesGames.prototype, "spf_mask", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], ShapesGames.prototype, "spf_mask_top", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], ShapesGames.prototype, "audioClip_show", void 0);
      ShapesGames = __decorate([ ccclass ], ShapesGames);
      return ShapesGames;
    }(cc.Component);
    exports.default = ShapesGames;
    cc._RF.pop();
  }, {
    "./ShapesGames_mapItem": "ShapesGames_mapItem"
  } ],
  Song_Games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4f6bOfrA1Gqp+U6vsuBfAl", "Song_Games");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        anim: {
          type: cc.Animation,
          default: null
        },
        spicons: {
          default: [],
          type: cc.SpriteFrame
        },
        mouse: cc.Sprite,
        mouse_flag: 0
      },
      onLoad: function onLoad() {
        this.mouse_flag = 0;
        this.node.on("touchstart", function(event) {
          this.exchange_bk();
          this.play_music();
          this.play_anima();
        }, this);
      },
      exchange_bk: function exchange_bk() {
        if (0 == this.mouse_flag) {
          cc.log(this.mouse_flag);
          this.mouse_flag = 1;
        } else if (1 == this.mouse_flag) {
          cc.log(this.mouse_flag);
          this.mouse_flag = 0;
        }
      },
      play_music: function play_music() {
        1 == this.mouse_flag ? this.node.getComponent(cc.AudioSource).play() : this.node.getComponent(cc.AudioSource).stop();
      },
      play_anima: function play_anima() {
        1 == this.mouse_flag ? this.anim.getComponent(cc.Animation).play() : this.anim.getComponent(cc.Animation).stop();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Star_Games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea38a4AJixIkp0T/21LmdRh", "Star_Games");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Star_Games = function(_super) {
      __extends(Star_Games, _super);
      function Star_Games() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_all_star = null;
        _this.audioClip_show = [];
        return _this;
      }
      Star_Games.prototype.start = function() {
        this.resetGame();
        this.node_all_star.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
      };
      Star_Games.prototype._touchStart = function(touchEvent) {
        var _this = this;
        var location = touchEvent.getLocation();
        this.node_all_star.children.forEach(function(c) {
          if (0 === c.opacity && c.getNumberOfRunningActions() < 1) {
            var poly = c.getComponent(cc.PolygonCollider);
            if (poly && cc.Intersection.pointInPolygon(c.convertToNodeSpaceAR(location), poly.points)) {
              c.runAction(cc.fadeIn(1));
              cc.audioEngine.playEffect(_this.audioClip_show[Math.floor(_this.audioClip_show.length * Math.random())], false);
            }
          }
        });
      };
      Star_Games.prototype.resetGame = function() {
        this.node_all_star.children.forEach(function(c) {
          c.stopAllActions();
          c.opacity = 0;
        });
      };
      __decorate([ property(cc.Node) ], Star_Games.prototype, "node_all_star", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], Star_Games.prototype, "audioClip_show", void 0);
      Star_Games = __decorate([ ccclass ], Star_Games);
      return Star_Games;
    }(cc.Component);
    exports.default = Star_Games;
    cc._RF.pop();
  }, {} ],
  Tiger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d423eRlOO1CCLSjwMQbhvHX", "Tiger");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Tiger: cc.Node,
        music: {
          type: cc.AudioClip,
          default: []
        },
        isShow: false,
        isMoveing: false
      },
      onLoad: function onLoad() {
        this.Tiger.opacity = 0;
        this.isShow = false;
        this.Tiger.setPosition(-235, 0);
      },
      start: function start() {},
      showZebraBnt: function showZebraBnt() {
        if (this.isMoveing) return;
        this.isMoveing = true;
        setTimeout(function() {
          if (this.Tiger.x > 600) {
            this.Tiger.x = -235;
            this.isShow = false;
          }
          this.isMoveing = false;
        }.bind(this), 420);
        var fn1 = null;
        var fn2 = null;
        if (this.isShow) {
          fn1 = cc.fadeOut(.4);
          fn2 = cc.moveBy(.4, 61.5, 0);
        } else {
          cc.audioEngine.play(this.music[0], false, 1);
          fn1 = cc.fadeIn(.4);
          fn2 = cc.moveBy(.4, 61.5, 0);
        }
        this.isShow = !this.isShow;
        this.Tiger.runAction(fn1);
        this.Tiger.runAction(fn2);
      },
      Close: function Close() {
        cc.audioEngine.play(this.music[1], false, 1);
        cc.director.loadScene("Box_Games");
      }
    });
    cc._RF.pop();
  }, {} ],
  Zebra: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f858fTaFKlDJobTVTHSXEd9", "Zebra");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        zebra: cc.Node,
        music: {
          type: cc.AudioClip,
          default: null
        },
        isShow: false,
        isMoveing: false
      },
      onLoad: function onLoad() {
        this.zebra.opacity = 0;
        this.isShow = false;
        this.zebra.setPosition(-170, 0);
      },
      start: function start() {},
      showZebraBnt: function showZebraBnt() {
        if (this.isMoveing) return;
        this.isMoveing = true;
        setTimeout(function() {
          if (this.zebra.x > 600) {
            this.zebra.x = -170;
            this.isShow = false;
          }
          this.isMoveing = false;
        }.bind(this), 420);
        var fn1, fn2;
        if (this.isShow) {
          fn1 = cc.fadeOut(.4);
          fn2 = cc.moveBy(.4, 57.5, 0);
        } else {
          fn1 = cc.fadeIn(.4);
          fn2 = cc.moveBy(.4, 57.5, 0);
        }
        this.isShow = !this.isShow;
        this.zebra.runAction(fn1);
        this.zebra.runAction(fn2);
      },
      Close: function Close() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("Box_Games");
      }
    });
    cc._RF.pop();
  }, {} ],
  animals_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23846oWdVNKaZ6GVofd/uv/", "animals_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        down: cc.Sprite,
        up: cc.Sprite,
        type: 0,
        spr: [ cc.SpriteFrame ],
        music: {
          type: cc.AudioClip,
          default: []
        },
        isBnt: false
      },
      onLoad: function onLoad() {
        this.type = 0;
        this.node.opacity = 0;
      },
      start: function start() {},
      Bnt: function Bnt() {
        if (this.isBnt) return;
        this.isBnt = true;
        setTimeout(function() {
          this.isBnt = false;
        }.bind(this), 200);
        this.node.opacity = 255;
        this.up.node.setPosition(0, 0);
        this.up.spriteFrame = this.spr[this.type];
        this.up.node.runAction(cc.moveBy(.2, -167, 0));
        cc.audioEngine.play(this.music[this.type]);
        this.down.spriteFrame = this.spr[this.type + 1];
        this.type += 1;
        if (6 == this.type) {
          this.type = 0;
          this.node.opacity = 0;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  apple_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc039FdDFFBXphcwdY4ubPv", "apple_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        app: cc.Node,
        spr: [ cc.SpriteFrame ],
        music: {
          type: cc.AudioClip,
          default: []
        },
        num: 0
      },
      start: function start() {},
      bnt: function bnt() {
        if (19 == this.num) {
          this.num = 0;
          this.app.getComponent(cc.Sprite).spriteFrame = this.spr[this.num];
          return;
        }
        this.num += 1;
        cc.audioEngine.play(this.music[0]);
        this.app.getComponent(cc.Sprite).spriteFrame = this.spr[this.num];
        if (19 == this.num) {
          cc.audioEngine.play(this.music[1]);
          return;
        }
      },
      close: function close() {
        cc.audioEngine.play(this.music[2], false, 1);
        cc.director.loadScene("Box_Games");
      }
    });
    cc._RF.pop();
  }, {} ],
  arrange_boxgames_Mgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cec08QqZKpGwKosh1QQYn2z", "arrange_boxgames_Mgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        prefab: cc.Prefab,
        spr: [ cc.SpriteFrame ],
        touch: cc.Node
      },
      start: function start() {
        this.CreatBox();
        this.touch.on(cc.Node.EventType.TOUCH_MOVE, function() {
          console.log("\u89e6\u6478");
        }.bind(this));
      },
      CreatBox: function CreatBox() {
        for (var i = 0; i < this.spr.length; i++) {
          var a = cc.instantiate(this.prefab);
          a.getChildByName("child").getComponent(cc.Sprite).spriteFrame = this.spr[i];
          var x = 860 * Math.random() - 430;
          var y = 500 * Math.random() - 250;
          this.node.addChild(a);
          a.setPosition(x, y);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  arrange_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "872d4gIJbJLK7CRUQb8Pzb3", "arrange_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spr: cc.Node,
        touch: cc.Node
      },
      start: function start() {
        this.touch.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var pos = event.getLocation();
          this.node.setPosition(pos.x - 550, pos.y - 250);
        }.bind(this));
        this.touch.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          this.DD();
        }.bind(this));
        this.touch.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.DD();
        }.bind(this));
      },
      DD: function DD() {
        var fn1 = cc.rotateBy(.1, 10);
        var fn2 = cc.rotateBy(.1, -10);
        var fn = cc.sequence([ fn1, fn2 ]);
        this.spr.runAction(fn);
      }
    });
    cc._RF.pop();
  }, {} ],
  ball_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1221fjfRpFC6o+6iHdFmwND", "ball_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        player: {
          default: null,
          type: cc.Node,
          tooltip: "this is a tips"
        },
        ball: {
          default: [],
          type: cc.Node
        },
        AudioSource: [ cc.AudioSource ]
      },
      onLoad: function onLoad() {
        var chicken = cc.repeat(cc.sequence(cc.moveTo(40, -600, -149), cc.place(490.7, -149)), 8);
        this.player.runAction(chicken);
      },
      moveball0: function moveball0() {
        var moveDown = cc.moveTo(1, -350, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, -350, 127).easing(cc.easeOut(15));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[0].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[0].play();
        }, .8);
        this.ball[0].pauseSystemEvents();
        this.ball[1].resumeSystemEvents();
        this.ball[2].resumeSystemEvents();
        this.ball[3].resumeSystemEvents();
        this.ball[4].resumeSystemEvents();
        this.ball[5].resumeSystemEvents();
      },
      moveball1: function moveball1() {
        var moveDown = cc.moveTo(1, -194, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, -194, 127).easing(cc.easeOut(15));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[1].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[1].play();
        }, 1);
        this.ball[1].pauseSystemEvents();
        this.ball[0].resumeSystemEvents();
        this.ball[2].resumeSystemEvents();
        this.ball[3].resumeSystemEvents();
        this.ball[4].resumeSystemEvents();
        this.ball[5].resumeSystemEvents();
      },
      moveball2: function moveball2() {
        var moveDown = cc.moveTo(1, -46, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, -46, 127).easing(cc.easeOut(15));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[2].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[2].play();
        }, 1);
        this.ball[2].pauseSystemEvents();
        this.ball[1].resumeSystemEvents();
        this.ball[0].resumeSystemEvents();
        this.ball[3].resumeSystemEvents();
        this.ball[4].resumeSystemEvents();
        this.ball[5].resumeSystemEvents();
      },
      moveball3: function moveball3() {
        var moveDown = cc.moveTo(1, 101, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, 101, 127).easing(cc.easeOut(15));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[3].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[3].play();
        }, 1);
        this.ball[3].pauseSystemEvents();
        this.ball[1].resumeSystemEvents();
        this.ball[2].resumeSystemEvents();
        this.ball[0].resumeSystemEvents();
        this.ball[4].resumeSystemEvents();
        this.ball[5].resumeSystemEvents();
      },
      moveball4: function moveball4() {
        var moveDown = cc.moveTo(1, 267, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, 267, 127).easing(cc.easeOut(15));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[4].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[4].play();
        }, 1);
        this.ball[4].pauseSystemEvents();
        this.ball[1].resumeSystemEvents();
        this.ball[2].resumeSystemEvents();
        this.ball[3].resumeSystemEvents();
        this.ball[0].resumeSystemEvents();
        this.ball[5].resumeSystemEvents();
      },
      moveball5: function moveball5() {
        var moveDown = cc.moveTo(1, 411, -229).easing(cc.easeIn(7));
        var moveUp = cc.moveTo(.7, 411, 127).easing(cc.easeOut(20));
        var seq = cc.sequence(moveDown, moveUp);
        this.ball[5].runAction(seq);
        this.scheduleOnce(function() {
          this.AudioSource[5].play();
        }, 1);
        this.ball[5].pauseSystemEvents();
        this.ball[1].resumeSystemEvents();
        this.ball[2].resumeSystemEvents();
        this.ball[3].resumeSystemEvents();
        this.ball[4].resumeSystemEvents();
        this.ball[0].resumeSystemEvents();
      }
    });
    cc._RF.pop();
  }, {} ],
  ball_915: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6696vwsjBH47DpmyOnRlSo", "ball_915");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.node.getComponent(cc.RigidBody).linearVelocity.x = Math.floor(301 * Math.random() - 150);
        this.node.getComponent(cc.RigidBody).linearVelocity.y = Math.floor(111 * Math.random() - 100);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  balloon_ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c1c2416qBAFbMVphLJs9/H", "balloon_ball");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        flag: 0
      },
      onLoad: function onLoad() {
        this.director = cc.find("Canvas");
        this.node.on("touchstart", function(event) {
          0 == this.flag ? this.director.getComponent("man_ball").balloon0_killed(this.node) : 1 == this.flag ? this.director.getComponent("man_ball").balloon1_killed(this.node) : 2 == this.flag ? this.director.getComponent("man_ball").balloon2_killed(this.node) : 3 == this.flag ? this.director.getComponent("man_ball").balloon3_killed(this.node) : 4 == this.flag ? this.director.getComponent("man_ball").balloon4_killed(this.node) : 5 == this.flag ? this.director.getComponent("man_ball").balloon5_killed(this.node) : 6 == this.flag && this.director.getComponent("man_ball").balloon6_killed(this.node);
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  balloon_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48605DmNEVD9KHqHYtTGRWh", "balloon_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        qiu: cc.Sprite,
        spr: [ cc.SpriteFrame ],
        num: 1,
        bg: cc.Node,
        qiguan: cc.Node,
        isPumping: false,
        prefab: cc.Prefab,
        spr1: [ cc.SpriteFrame ],
        music: {
          type: cc.AudioClip,
          default: []
        }
      },
      start: function start() {},
      pumpUP: function pumpUP() {
        if (this.isPumping || 11 == this.num) return;
        this.isPumping = true;
        this.num += 1;
        var fn1 = cc.moveTo(.2, -200, -90);
        var fn2 = cc.moveTo(.4, -155, -69);
        var sqn = cc.sequence([ fn1, fn2 ]);
        this.qiguan.runAction(sqn);
        setTimeout(function() {
          this.qiu && cc.audioEngine.play(this.music[0], false, 1);
        }.bind(this), 250);
        setTimeout(function() {
          if (this.qiu) {
            this.isPumping = false;
            this.qiu.spriteFrame = this.spr[this.num];
            if (11 == this.num) {
              cc.audioEngine.play(this.music[1], false, 1);
              this.qiu.node.runAction(cc.fadeOut(.3));
              this.CreatAnim();
            }
          }
        }.bind(this), 600);
      },
      CreatAnim: function CreatAnim() {
        var numa = Math.floor(6 * Math.random());
        for (var i = 0; i < 10; i++) setTimeout(function() {
          for (var j = 0; j < 10; j++) if (this.prefab) {
            var a = cc.instantiate(this.prefab);
            this.bg.addChild(a);
            a.getComponent(cc.Sprite).spriteFrame = this.spr1[numa];
            a.scale = 1;
            var x = 888 * Math.random() - 444;
            var y = 560 * Math.random() - 270;
            a.setPosition(x, y);
          }
        }.bind(this), 500 * i);
      }
    });
    cc._RF.pop();
  }, {} ],
  "ban 6-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64ecarrOoFKiYv6uIfhZ9Gk", "ban 6-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        flag: 0
      },
      onLoad: function onLoad() {
        this.node.on("touchstart", function(event) {
          this.flag = 1;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  beecircle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fb6drg1Y9J74m3wvNlHdO7", "beecircle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var beecircle = function(_super) {
      __extends(beecircle, _super);
      function beecircle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.originalRotation = 0;
        return _this;
      }
      beecircle.prototype.start = function() {
        this.originalRotation = this.node.angle;
      };
      beecircle.prototype.anim_wai = function() {
        this.node.angle = this.originalRotation;
        this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.1, 180), cc.delayTime(.4), cc.rotateBy(.1, 180), cc.delayTime(.4))));
      };
      beecircle.prototype.anim_nei = function() {
        this.node.angle = this.originalRotation;
        this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.4, -90), cc.delayTime(.1), cc.rotateBy(.4, 90), cc.delayTime(.1))));
      };
      beecircle.prototype.stop_action = function() {
        this.node.stopAllActions();
      };
      beecircle = __decorate([ ccclass ], beecircle);
      return beecircle;
    }(cc.Component);
    exports.default = beecircle;
    cc._RF.pop();
  }, {} ],
  beefly: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "696a7/nXSZG8rNj5UR20fjP", "beefly");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Games_beefly_1 = require("./Games_beefly");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var beefly = function(_super) {
      __extends(beefly, _super);
      function beefly() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sound = null;
        _this.delayFly = .5;
        _this.maxLength = 1500;
        _this.audioID = 0;
        return _this;
      }
      beefly.prototype.onLoad = function() {
        this.node.opacity = 0;
      };
      beefly.prototype.start = function() {
        var _this = this;
        this.audioID = cc.audioEngine.play(this.sound, true, 1);
        var anim = this.node.getComponent(cc.Animation);
        anim.play();
        var rotation = -this.node.angle;
        var maxLength = Games_beefly_1.default.MaxLength;
        var hudu = 2 * Math.PI / 360 * rotation;
        var x = Math.sin(hudu) * maxLength;
        var y = Math.cos(hudu) * maxLength;
        var showTime = .3 * Math.random();
        this.node.runAction(cc.sequence(cc.delayTime(showTime), cc.fadeIn(0), cc.delayTime(this.delayFly - showTime), cc.moveBy(4, cc.v2(x, y)), cc.callFunc(function(_) {
          return cc.audioEngine.stop(_this.audioID);
        })));
      };
      beefly.prototype.stopAudio = function() {
        cc.audioEngine.stop(this.audioID);
      };
      beefly.prototype.onCollisionEnter = function(other, self) {
        this.stopAudio();
      };
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u871c\u8702\u98de\u7684\u58f0\u97f3"
      }) ], beefly.prototype, "sound", void 0);
      __decorate([ property({
        tooltip: "\u871c\u8702\u5ef6\u8fdf\u591a\u957f\u65f6\u95f4\u98de\u8d70\uff08\u79d2s\uff09"
      }) ], beefly.prototype, "delayFly", void 0);
      beefly = __decorate([ ccclass ], beefly);
      return beefly;
    }(cc.Component);
    exports.default = beefly;
    cc._RF.pop();
  }, {
    "./Games_beefly": "Games_beefly"
  } ],
  "bottles 8-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9f70iyN0hKwr10X2VJCz6a", "bottles 8-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        chuizi: cc.Node,
        mouse_flag: 0
      },
      onLoad: function onLoad() {
        this.mouse_flag = 0;
        this.node.on("touchend", function(event) {
          this.play_anim();
        }, this);
      },
      play_anim: function play_anim() {
        if (this.mouse_flag < 1) {
          var rot = cc.rotateTo(.01, 10);
          this.chuizi.runAction(rot);
          this.chuizi.getComponent(cc.Animation).play();
          this.scheduleOnce(function() {
            this.node.getComponent(cc.Animation).play();
            this.node.getComponent(cc.AudioSource).play();
            this.node.pauseSystemEvents();
            cc.game.emit("bottles");
          }, .2);
          this.mouse_flag++;
        } else this.mouse_flag = 0;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  bottles_games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79b77ZRnmtL4Zv+QmIu/Kot", "bottles_games");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mouse_flag: 0
      },
      play: function play() {
        this.node.getComponent(cc.Animation);
        (this.mouse_flag = 0) ? this.mouse_flag++ : this.mouse_flag = 0;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  bug_anim: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3215lvu2JKXJt/FFYHYbvs", "bug_anim");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var bug_anim = function(_super) {
      __extends(bug_anim, _super);
      function bug_anim() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animState = null;
        return _this;
      }
      bug_anim.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
      };
      bug_anim.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
      };
      bug_anim.prototype.onEnable = function() {
        this.reset();
      };
      bug_anim.prototype.onClick = function() {
        if (this.animState && this.animState.isPlaying) return;
        var anim = this.node.getParent().getComponent(cc.Animation);
        anim && (this.animState = anim.play());
      };
      bug_anim.prototype.reset = function() {
        var anim = this.node.getParent().getComponent(cc.Animation);
        var defaultClip = anim.defaultClip;
        this.animState = anim.play(defaultClip.name, 0);
        anim.sample(defaultClip.name);
        this.animState.stop();
        this.animState = null;
      };
      bug_anim.prototype.isDone = function() {
        return this.animState && !this.animState.isPlaying;
      };
      bug_anim = __decorate([ ccclass ], bug_anim);
      return bug_anim;
    }(cc.Component);
    exports.default = bug_anim;
    cc._RF.pop();
  }, {} ],
  bug_collision: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdb7fheUVRLUL7Qw9Z8bVI0", "bug_collision");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var bug_collision = function(_super) {
      __extends(bug_collision, _super);
      function bug_collision() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      bug_collision.prototype.onCollisionExit = function(other, self) {
        this.node.getParent().getParent().getParent().emit("bug.collision");
        this.node.getParent().destroy();
      };
      bug_collision = __decorate([ ccclass ], bug_collision);
      return bug_collision;
    }(cc.Component);
    exports.default = bug_collision;
    cc._RF.pop();
  }, {} ],
  bug: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7440eddfLFFWY9v05V07gba", "bug");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NextNumber = 1;
    var MaxNumber = 0;
    var bug = function(_super) {
      __extends(bug, _super);
      function bug() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.t1 = null;
        _this.graphics = null;
        _this.tu = null;
        _this.num = 0;
        return _this;
      }
      bug.prototype.onLoad = function() {
        this.node.on("onShow", this.onShow, this);
      };
      bug.prototype.onEnable = function() {
        NextNumber = 1;
      };
      bug.prototype.onShow = function(num) {
        MaxNumber = Math.max(MaxNumber, num);
        this.num = num;
        this.t1.string = "" + num;
      };
      bug.prototype.onclick = function() {
        if (NextNumber !== this.num) return;
        NextNumber++;
        NextNumber > MaxNumber && (NextNumber = 1);
        var btn = this.node.getComponent(cc.Button);
        btn && (btn.interactable = false);
        var anim = this.tu.getComponent(cc.Animation);
        anim.play("a" + (1 + Math.floor(8 * Math.random())));
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "\u663e\u793a\u6570\u5b57"
      }) ], bug.prototype, "t1", void 0);
      __decorate([ property(cc.Node) ], bug.prototype, "graphics", void 0);
      __decorate([ property(cc.Node) ], bug.prototype, "tu", void 0);
      bug = __decorate([ ccclass ], bug);
      return bug;
    }(cc.Component);
    exports.default = bug;
    cc._RF.pop();
  }, {} ],
  butter_910: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03a7edBYZJFQ71g08/BdlMB", "butter_910");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        flower1: cc.Prefab,
        initCount: 0,
        f1: cc.Node,
        random_times: 0
      },
      onLoad: function onLoad() {
        this.init_1();
        this.random_times = Math.floor(11 * Math.random() + 20);
        for (var i = 0; i < this.random_times; i++) this.make_flower1();
      },
      start: function start() {},
      init_1: function init_1() {
        this.flower1Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.flower1Pool.put(cc.instantiate(this.flower1));
      },
      make_flower1: function make_flower1() {
        var random = Math.floor(7 * Math.random() + 5);
        var enemy = null;
        if (this.flower1Pool.size() > 0) enemy = this.flower1Pool.get(); else {
          this.flower1Pool.put(cc.instantiate(this.flower1));
          enemy = this.flower1Pool.get();
        }
        enemy.parent = this.node;
        enemy.scale = random / 10;
        var du = Math.floor(361 * Math.random() + 0);
        var action0 = cc.rotateTo(0, du);
        enemy.runAction(action0);
        enemy.x = Math.floor(721 * Math.random() - 360);
        enemy.y = Math.floor(401 * Math.random() - 200);
      },
      flower1_killed: function flower1_killed(enemy) {
        var du = Math.floor(361 * Math.random() + 630);
        var action1 = cc.sequence(cc.rotateTo(0, du), cc.moveBy(8, du * Math.sin(2 * du * Math.PI / 360), du * Math.cos(2 * du * Math.PI / 360)));
        enemy.runAction(action1);
        enemy.getComponent(cc.Animation).play();
      }
    });
    cc._RF.pop();
  }, {} ],
  butterfly: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "043276n6O5BZ5poRnkXI4El", "butterfly");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Games_Butterfly_Move_1 = require("./Games_Butterfly_Move");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var butterfly = function(_super) {
      __extends(butterfly, _super);
      function butterfly() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.maxLength = 1500;
        return _this;
      }
      butterfly.prototype.onclick = function() {
        var anim = this.node.getComponent(cc.Animation);
        anim.play();
        var rotation = -this.node.angle;
        var maxLength = Games_Butterfly_Move_1.default.MaxLength;
        var hudu = 2 * Math.PI / 360 * rotation;
        var x = Math.sin(hudu) * maxLength;
        var y = Math.cos(hudu) * maxLength;
        this.node.runAction(cc.moveBy(4, cc.v2(x, y)));
      };
      butterfly = __decorate([ ccclass ], butterfly);
      return butterfly;
    }(cc.Component);
    exports.default = butterfly;
    cc._RF.pop();
  }, {
    "./Games_Butterfly_Move": "Games_Butterfly_Move"
  } ],
  button_PianoGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8249738pwNGqoNqfyONMHuM", "button_PianoGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: false,
      properties: {
        safeTime: {
          default: .7,
          tooltip: "\u6309\u94ae\u4fdd\u62a4\u65f6\u95f4\uff0c\u6307\u5b9a\u95f4\u9694\u5185\u53ea\u80fd\u70b9\u51fb\u4e00\u6b21."
        }
      },
      onLoad: function onLoad() {
        this.node._oldHitTest = this.node._hitTest.bind(this.node);
        this.node._hitTest = this.polygonHitTest.bind(this.node);
      },
      start: function start() {
        var _this = this;
        var button = this.getComponent(cc.Button);
        if (!button) return;
        this.clickEvents = button.clickEvents;
        this.node.on("click", function() {
          button.clickEvents = [];
          _this.scheduleOnce(function(dt) {
            button.clickEvents = _this.clickEvents;
          }, _this.safeTime);
        }, this);
      },
      polygonHitTest: function polygonHitTest(point, listener) {
        var polygonCollider = this.getComponent(cc.PolygonCollider);
        if (polygonCollider) {
          point = this.convertToNodeSpace(point);
          point.x -= this.getContentSize().width / 2;
          point.y -= this.getContentSize().height / 2;
          return cc.Intersection.pointInPolygon(point, polygonCollider.points);
        }
        return this._oldHitTest(point, listener);
      }
    });
    cc._RF.pop();
  }, {} ],
  child123_open: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b21aa4jpUxA2psauGe7AkKT", "child123_open");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      topart1: function topart1() {
        cc.director.loadScene("1");
      },
      topart2: function topart2() {
        cc.director.loadScene("womiu");
      },
      topart3: function topart3() {
        cc.director.loadScene("3");
      },
      topart4: function topart4() {
        cc.director.loadScene("bongos");
      },
      topart5: function topart5() {
        cc.director.loadScene("fireworks");
      },
      topart6: function topart6() {
        cc.director.loadScene("tvs");
      },
      topart7: function topart7() {
        cc.director.loadScene("dolls");
      },
      topart8: function topart8() {
        cc.director.loadScene("bottles");
      },
      topart9: function topart9() {
        cc.director.loadScene("pencils");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  child_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8087Hb+ORMUq8WnXVBsMbJ", "child_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        father: cc.Node,
        wucha: cc.Vec2
      },
      start: function start() {},
      update: function update(dt) {
        this.node.x = this.father.x + this.wucha.x;
        this.node.y = this.father.y + this.wucha.y;
      }
    });
    cc._RF.pop();
  }, {} ],
  "chuizi 8-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7e06XCIkRFJZAbwT0D6+Ba", "chuizi 8-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        mouse_flag: 0
      },
      play: function play() {
        this.node.getComponent(cc.Animation);
        (this.mouse_flag = 0) ? this.mouse_flag++ : this.mouse_flag = 0;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  circle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fe1aLbDzpHEqEtOS/GKSQg", "circle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var circle = function(_super) {
      __extends(circle, _super);
      function circle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      circle.prototype.onCollisionEnter = function(other, self) {
        this.node.getParent().getParent().emit("collision.circle");
      };
      circle = __decorate([ ccclass ], circle);
      return circle;
    }(cc.Component);
    exports.default = circle;
    cc._RF.pop();
  }, {} ],
  clock_home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf1133WBJ5PIKsiN5KUr+iM", "clock_home");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Clock_home = function(_super) {
      __extends(Clock_home, _super);
      function Clock_home() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_hour = null;
        _this.node_minutes = null;
        return _this;
      }
      Clock_home.prototype.update = function(dt) {
        var date = new Date();
        var miutes = date.getMinutes() + date.getSeconds() / 60;
        var hours = date.getHours() + miutes / 60;
        this.node_minutes.angle = 6 * -miutes;
        this.node_hour.angle = -hours % 12 * 30;
        date = null;
      };
      __decorate([ property(cc.Node) ], Clock_home.prototype, "node_hour", void 0);
      __decorate([ property(cc.Node) ], Clock_home.prototype, "node_minutes", void 0);
      Clock_home = __decorate([ ccclass ], Clock_home);
      return Clock_home;
    }(cc.Component);
    exports.default = Clock_home;
    cc._RF.pop();
  }, {} ],
  close_button: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47fb4WdNTZFUbhUxNa9mDmR", "close_button");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeEye = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var that = this;
        var c = 0;
        this.closeEye.active = false;
        var inter = setInterval(function() {
          c++;
          if (!that || !that.closeEye) {
            clearInterval(inter);
            return;
          }
          if (c % 10 == (10 * Math.random() | 0)) {
            that.closeEye.active = true;
            setTimeout(function() {
              that.closeEye && (that.closeEye.active = false);
            }, 700);
          }
        }, 800);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "closeEye", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  close_eys1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66ed3nWPNVF+Z1Oph2T3Id0", "close_eys1");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeEye = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var that = this;
        var c = 0;
        this.closeEye.active = false;
        var inter = setInterval(function() {
          c++;
          if (!that || !that.closeEye) {
            clearInterval(inter);
            return;
          }
          if (c % 10 == (10 * Math.random() | 0)) {
            that.closeEye.active = true;
            setTimeout(function() {
              that.closeEye && (that.closeEye.active = false);
            }, 150);
          }
        }, 400);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "closeEye", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  close_eys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8bd7svWgBBXYmZ5+NAGt3x", "close_eys");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.closeEye = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var that = this;
        var c = 0;
        this.closeEye.active = false;
        var inter = setInterval(function() {
          c++;
          if (!that || !that.closeEye) {
            clearInterval(inter);
            return;
          }
          if (c % 10 == (10 * Math.random() | 0)) {
            that.closeEye.active = true;
            setTimeout(function() {
              that.closeEye && (that.closeEye.active = false);
            }, 150);
          }
        }, 400);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "closeEye", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  cloth_ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e11f8nuTC5NT6nzjeKYIh2n", "cloth_ball");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spicons: {
          default: [],
          type: cc.SpriteFrame
        },
        clothes: cc.Sprite,
        spicons_flag: 0
      },
      onLoad: function onLoad() {
        this.spicons_flag = 0;
        this.node.spriteFrame = this.spicons[0];
        this.node.on("touchstart", function(event) {
          this.exchange_bk();
        }, this);
      },
      exchange_bk: function exchange_bk() {
        this.spicons_flag < 3 ? this.spicons_flag++ : this.spicons_flag = 0;
        this.clothes.spriteFrame = this.spicons[this.spicons_flag];
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  clover: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae9d0nJ9Z9L+6cMaokfizJj", "clover");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var clover = function(_super) {
      __extends(clover, _super);
      function clover() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      clover.prototype.onCollisionEnter = function(other, self) {
        var _this = this;
        this.node.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function(_) {
          return _this.node.destroy();
        })));
      };
      clover = __decorate([ ccclass ], clover);
      return clover;
    }(cc.Component);
    exports.default = clover;
    cc._RF.pop();
  }, {} ],
  "coloring_games1-9": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2106ccK4ytB37XuJnDsMu3C", "coloring_games1-9");
    "use strict";
    var self;
    var color;
    var crayonSelect;
    var crayonLoc;
    var thingSelect;
    var thingSelectTs;
    var RADOM_COLOR_ARR = [ "#ff9595", "#ff00ff", "#990099", "#6600cc", "#0066ff", "#00ccff", "#009900", "#00ff00", "#99ff00", "#ffff00", "#ff9900", "#d60000" ];
    var thingLocs = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        things: {
          default: null,
          type: cc.Node
        },
        size: cc.view.getFrameSize(),
        xs: [ cc.Integer ],
        ys: [ cc.Integer ],
        backBtn: cc.Node
      },
      getCrayonSelect: function getCrayonSelect(event, colorsStr) {
        var node = event.target;
        console.log(this, node, colorsStr);
        if (crayonSelect && node.name == crayonSelect.name) {
          self.clearCrayonSelect();
          return;
        }
        console.log("crayonLoc", crayonLoc);
        if (crayonSelect && crayonLoc) {
          crayonSelect.x = crayonLoc.x;
          crayonSelect.y = crayonLoc.y;
          crayonSelect.angle = 0;
        }
        crayonSelect = node;
        crayonLoc = {
          x: node.x,
          y: node.y
        };
        crayonSelect.x = 800;
        crayonSelect.y = 80;
        crayonSelect.angle = 50;
        color = this.transColor(colorsStr);
        console.log(color);
      },
      clearCrayonSelect: function clearCrayonSelect() {
        crayonSelect.x = crayonLoc.x;
        crayonSelect.y = crayonLoc.y;
        crayonSelect.angle = 0;
        crayonLoc = null;
        crayonSelect = null;
      },
      transColor: function transColor(colorsStr) {
        console.log("colorsStr", colorsStr);
        if (!colorsStr) return;
        if (colorsStr.indexOf("#") > -1) {
          colorsStr = colorsStr.replace("#", "");
          var r = parseInt(colorsStr.substr(0, 2), 16);
          var g = parseInt(colorsStr.substr(2, 2), 16);
          var b = parseInt(colorsStr.substr(4, 2), 16);
          return new cc.Color(r, g, b);
        }
        var colors = colorsStr.split(",");
        var _r = Number(colors[0]);
        var _g = Number(colors[1]);
        var _b = Number(colors[2]);
        return new cc.Color(_r, _g, _b);
      },
      touch: function touch(event) {
        var point = event.getLocation();
        console.log(point);
        console.log("touched", thingSelect);
        if (thingSelect && thingSelectTs && thingSelectTs < Date.now() - 100) {
          var loc = thingSelect.convertToNodeSpaceAR(point);
          var poly = thingSelect.getComponent(cc.PolygonCollider);
          console.log("poly", poly);
          if (poly) {
            console.log(loc, poly.world.points);
            var isHit = cc.Intersection.pointInPolygon(loc, poly.world.points);
            console.log("isHit", isHit);
            if (!isHit) {
              thingSelect.scaleX = thingSelect._scaleX;
              thingSelect.scaleY = thingSelect._scaleY;
              thingSelect.x = thingSelect._x;
              thingSelect.y = thingSelect._y;
              thingSelect.angle = thingSelect._angle;
              thingSelect.zIndex = 0;
              thingSelect = null;
            }
          }
        }
      },
      getLoc: function getLoc() {
        var x, y;
        var c = 0;
        var isDup;
        do {
          c++;
          isDup = false;
          x = 960 * (.4 * Math.random() + .3) | 0;
          y = 640 * (.4 * Math.random() + .3) | 0;
          for (var i = 0; i < thingLocs.length; i++) {
            console.log(x, y, thingLocs[i].x, thingLocs[i].y);
            thingLocs[i].x < x + 50 && thingLocs[i].x > x - 50 && thingLocs[i].y < y + 50 && thingLocs[i].y > y - 50 && (isDup = true);
            console.log(isDup);
          }
        } while (isDup && c < 20);
        thingLocs.push({
          x: x,
          y: y
        });
        return {
          x: x,
          y: y
        };
      },
      start: function start() {
        self = null;
        color = null;
        crayonSelect = null;
        crayonLoc = null;
        thingSelect = null;
        thingSelectTs = 0;
        self = this;
        cc.log("width:" + self.size.width);
        cc.log("height:" + self.size.height);
        if (this.backBtn) {
          cc.director.preloadScene("Main", function() {
            cc.log("Next scene Main preloaded");
          });
          this.backBtn.on("touchstart", function() {
            console.log("touch back");
            cc.director.loadScene("Main");
          });
        }
        self.node.on("touchstart", self.touch, this);
        var zindex = 0;
        var things = self.things.children;
        for (var i = 0; i < things.length; i++) {
          var thing = things[i];
          var patchs = thing.children;
          thing.scaleX = .2;
          thing.scaleY = .2;
          var x = void 0, y = void 0;
          if (void 0 != self.xs[i] && void 0 != self.ys[i]) {
            x = self.xs[i];
            y = self.ys[i];
          } else {
            var loc = self.getLoc();
            x = loc.x;
            y = loc.y;
          }
          thing.x = x;
          thing.y = y;
          thing.angle = -[ 360 * Math.random() | 0 ];
          var _loop = function _loop() {
            var patch = patchs[j];
            patch.name.indexOf("color") > -1 && (patch.color = self.transColor(RADOM_COLOR_ARR[Math.random() * RADOM_COLOR_ARR.length | 0]));
            if ("shadow" === patch.name) return "continue";
            if ("line" === patch.name) {
              patch.on("touchstart", function(event) {
                console.log("line click");
                if (thingSelect) return;
                var parent = patch.parent;
                thingSelect = parent;
                thingSelectTs = Date.now();
                window.thingSelect = thingSelect;
                parent.scaleX < 1 && setTimeout(function() {
                  parent._scaleX = parent.scaleX;
                  parent._scaleY = parent.scaleY;
                  parent.scaleX = 1;
                  parent.scaleY = 1;
                  parent._x = parent.x;
                  parent._y = parent.y;
                  parent.x = 480;
                  parent.y = 320;
                  parent.zIndex = ++zindex;
                  parent._angle = parent.angle;
                  parent.angle = 0;
                }, 200);
              });
              patch._touchListener.setSwallowTouches(false);
            } else {
              patch.on("touchstart", function(event) {
                var point = event.getLocation();
                var loc = patch.convertToNodeSpaceAR(point);
                if (patch.parent.scaleX < 1) return;
                loc.x = 0 | loc.x;
                loc.y = 0 | loc.y;
                var poly = patch.getComponent(cc.PolygonCollider);
                if (poly) {
                  var isHit = cc.Intersection.pointInPolygon(loc, poly.world.points);
                  color && isHit && (patch.color = color);
                }
              });
              patch._touchListener.setSwallowTouches(false);
            }
          };
          for (var j = 0; j < patchs.length; j++) {
            var _ret = _loop();
            if ("continue" === _ret) continue;
          }
        }
      },
      hitTest: function hitTest(point, patch) {
        var locationInNode = patch.convertToNodeSpaceAR(point);
        var size = patch.getContentSize();
        var sprite = patch.getComponent(cc.Sprite);
        console.log("patch", patch);
        console.log("sprite", sprite);
        console.log("size", size);
        console.log("locationInNode", locationInNode);
        var texture = sprite.spriteFrame.getTexture();
        console.log("texture", texture);
        if (sprite) {
          var data = null;
          var imgs = texture.readPixels(data, locationInNode.x - 2, size.height - locationInNode.y - 2, 5, 5);
          console.log("data", data);
          console.log("imgs", imgs);
        }
        return false;
      },
      onLucencyTouch: function onLucencyTouch(img, x, y) {
        var cvs = document.createElement("canvas");
        var ctx = cvs.getContext("2d");
        cvs.width = 1;
        cvs.height = 1;
        ctx.drawImage(img, x, y, 1, 1, 0, 0, 1, 1);
        var imgdata = ctx.getImageData(0, 0, 1, 1);
        return imgdata.data[3];
      }
    });
    cc._RF.pop();
  }, {} ],
  contrl_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74b8ebK2f5CMInxzuGyO3Sx", "contrl_sound");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isMouthOpen = false;
        _this.audioSource = null;
        _this.mouth = null;
        _this.closeEye = null;
        _this.sounds = [];
        _this.heads = [ null ];
        _this.bodys = [ null ];
        _this.legs = [ null ];
        _this.foots = [ null ];
        return _this;
      }
      NewClass.prototype.headChange = function(head) {
        head.getComponent(cc.Sprite).spriteFrame = this.heads[this.heads.length * Math.random() | 0];
        head.angle = -[ 10 * Math.random() | -5 ];
      };
      NewClass.prototype.bodyChange = function(body) {
        body.getComponent(cc.Sprite).spriteFrame = this.bodys[this.bodys.length * Math.random() | 0];
      };
      NewClass.prototype.legChange = function(leg) {
        leg.getComponent(cc.Sprite).spriteFrame = this.legs[this.legs.length * Math.random() | 0];
      };
      NewClass.prototype.footChange = function(foot) {
        foot.getComponent(cc.Sprite).spriteFrame = this.foots[this.foots.length * Math.random() | 0];
      };
      NewClass.prototype.start = function() {
        var that = this;
        var openMouth = that.mouth.getChildByName("openMouth");
        var closeMouth = that.mouth.getChildByName("closeMouth");
        var head = that.node.getChildByName("head");
        that.headChange(head);
        head.on(cc.Node.EventType.TOUCH_START, function() {
          that.headChange(head);
        });
        var body = that.node.getChildByName("body");
        that.bodyChange(body);
        body.on(cc.Node.EventType.TOUCH_START, function() {
          that.bodyChange(body);
        });
        var leg = that.node.getChildByName("leg");
        that.legChange(leg);
        leg.on(cc.Node.EventType.TOUCH_START, function() {
          that.legChange(leg);
        });
        var foot = that.node.getChildByName("foot");
        that.footChange(foot);
        var c = 0;
        var inter = setInterval(function() {
          c++;
          if (!that || !that.closeEye) {
            clearInterval(inter);
            return;
          }
          if (c % 10 == (10 * Math.random() | 0)) {
            that.closeEye.active = true;
            setTimeout(function() {
              that.closeEye && (that.closeEye.active = false);
            }, 200);
          }
        }, 500);
        that.mouth.on(cc.Node.EventType.TOUCH_START, function() {
          that.isMouthOpen = !that.isMouthOpen;
          that.checkSound();
          if (that.isMouthOpen) {
            openMouth.active = true;
            closeMouth.active = false;
          } else {
            openMouth.active = false;
            closeMouth.active = true;
          }
        });
      };
      NewClass.prototype.checkSound = function() {
        this.audioSource.clip = this.sounds[this.node.soundIdx || 0];
        this.isMouthOpen ? this.audioSource.play() : this.audioSource.stop();
      };
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "audioSource", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "mouth", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "closeEye", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], NewClass.prototype, "sounds", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "heads", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "bodys", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "legs", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "foots", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  control0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7dac99SP+1B0IuY5oGjBuIr", "control0");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.th = this;
        this.dw = false;
        this.up = false;
        this.hit = false;
        this.target = cc.find("Canvas/sprite 42");
      },
      dwf: function dwf(e) {
        var local = this.node.convertToNodeSpaceAR(e.getLocation());
        var targetpoint = new cc.Vec2(local.x, local.y);
        var polygon = [ {
          x: -165,
          y: -225
        }, {
          x: 174,
          y: -227
        }, {
          x: 2,
          y: 130
        } ];
        if (cc.Intersection.pointInPolygon(targetpoint, polygon)) {
          this.th.dw = true;
          this.th.up = false;
        }
      },
      upf: function upf(e) {
        this.th.rot = this.th.target.angle;
        this.th.up = true;
        this.th.dw = false;
        this.th.a = 1;
        this.th.timesmorz = .92;
        this.th.maxang = this.th.rot;
        this.th.n_osc = 1.7;
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.dwf, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.upf, this);
      },
      update: function update(dt) {
        if (this.dw) {
          this.target.angle++;
          this.target.angle <= -180 && (this.target.angle += 360);
          console.log(this.target.angle);
        } else if (this.up) {
          this.target.angle = Math.sin(this.n_osc * this.a) * Math.pow(this.timesmorz, this.a) * this.maxang;
          this.a += .1;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  control1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "122abcSHwZHBpvwXP1HSR/w", "control1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.th = this;
        this.dw = false;
        this.up = false;
        this.target = cc.find("Canvas/sprite 21");
      },
      dwf: function dwf(e) {
        var local = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        var targetpoint = new cc.Vec2(local.x, local.y);
        var rect = this.node.getBoundingBox();
        if (rect.contains(targetpoint)) {
          this.th.dw = true;
          this.th.up = false;
        }
      },
      upf: function upf(e) {
        this.th.up = true;
        this.th.dw = false;
        this.th.a = 1;
        this.th.timesmorz = .92;
        this.th.maxang = this.target.angle;
        this.th.n_osc = 2;
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.dwf, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.upf, this);
      },
      update: function update(dt) {
        if (this.dw) {
          this.up = false;
          cc.find("Canvas/hitarea2").getComponent("control2").up = false;
          this.target.angle++;
        } else if (this.up) {
          this.target.angle = Math.sin(this.n_osc * this.a) * Math.pow(this.timesmorz, this.a) * this.maxang;
          this.a += .1;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  control2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9350744L0hOhJEVygvbbnaM", "control2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.th = this;
        this.dw = false;
        this.up = false;
        this.target = cc.find("Canvas/sprite 21");
      },
      dwf: function dwf(e) {
        var local = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        var targetpoint = new cc.Vec2(local.x, local.y);
        var rect = this.node.getBoundingBox();
        if (rect.contains(targetpoint)) {
          this.th.dw = true;
          this.th.up = false;
        }
      },
      upf: function upf(e) {
        this.th.up = true;
        this.th.dw = false;
        this.th.a = 1;
        this.th.timesmorz = .92;
        this.th.maxang = this.target.angle;
        this.th.n_osc = 2;
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.dwf, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.upf, this);
      },
      update: function update(dt) {
        if (this.dw) {
          this.up = false;
          cc.find("Canvas/hitarea1").getComponent("control1").up = false;
          this.target.angle--;
        } else if (this.up) {
          this.target.angle = Math.sin(this.n_osc * this.a) * Math.pow(this.timesmorz, this.a) * this.maxang;
          this.a += .1;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  costume_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "275ccYe+LtFta8G8IG6BocS", "costume_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music: {
          type: cc.AudioClip,
          default: []
        },
        head: cc.Sprite,
        body: cc.Sprite,
        foot: cc.Sprite,
        eye: cc.Node,
        headSpr: [ cc.SpriteFrame ],
        bodySpr: [ cc.SpriteFrame ],
        footSpr: [ cc.SpriteFrame ],
        headnum: 0,
        bodynum: 0,
        footnum: 0,
        musicnum: 0
      },
      onLoad: function onLoad() {},
      start: function start() {
        var self = this;
        this.headnum = Math.floor(Math.random() * this.headSpr.length);
        this.ChangHead();
        this.bodynum = Math.floor(Math.random() * this.bodySpr.length);
        this.ChangeBody();
        this.footnum = Math.floor(Math.random() * this.footSpr.length);
        this.ChangFoot();
      },
      ChangHead: function ChangHead() {
        this.PlayMS();
        this.head.spriteFrame = this.headSpr[this.headnum];
        if (0 == this.headnum || 1 == this.headnum || 4 == this.headnum || 5 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-6.7, 70.3);
        } else if (2 == this.headnum) {
          this.head.node.setPosition(1, 61.5);
          this.eye.parent.setPosition(-.4, 64.5);
        } else if (3 == this.headnum) {
          this.head.node.setPosition(17.9, 30.2);
          this.eye.parent.setPosition(-22.2, 72.4);
        } else if (6 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-25.2, 56);
        } else if (7 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-1.1, 52.4);
        } else if (8 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-10.8, 55.4);
        } else if (8 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-10.8, 55.4);
        } else if (9 == this.headnum) {
          this.head.node.setPosition(0, 60);
          this.eye.parent.setPosition(-1.7, 66.3);
        }
        this.headnum += 1;
        this.headnum > 9 && (this.headnum = 0);
      },
      ChangeBody: function ChangeBody() {
        this.PlayMS();
        this.body.spriteFrame = this.bodySpr[this.bodynum];
        this.bodynum += 1;
        this.bodynum > 10 && (this.bodynum = 0);
      },
      ChangFoot: function ChangFoot() {
        this.PlayMS();
        this.foot.spriteFrame = this.footSpr[this.footnum];
        this.footnum += 1;
        this.footnum > 10 && (this.footnum = 0);
      },
      PlayMS: function PlayMS() {
        cc.audioEngine.play(this.music[this.musicnum], false, 1);
        this.musicnum += 1;
        this.musicnum %= 3;
      },
      onDestroy: function onDestroy() {
        clearInterval(this.timer);
      }
    });
    cc._RF.pop();
  }, {} ],
  cube: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa5c8GlKHdFG7AYuH3/EJyi", "cube");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cube = function(_super) {
      __extends(cube, _super);
      function cube() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cubs = [];
        _this.sound = null;
        _this.index = -1;
        return _this;
      }
      cube.prototype.start = function() {
        this.index = Math.floor(Math.random() * this.cubs.length);
        this.node.getComponent(cc.Sprite).spriteFrame = this.cubs[this.index];
      };
      cube.prototype.onclick = function() {
        this.index >= this.cubs.length ? this.index = 0 : this.index++;
        this.node.getComponent(cc.Sprite).spriteFrame = this.cubs[this.index];
        cc.audioEngine.play(this.sound, false, 1);
      };
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "\u8be5\u4f4d\u7f6e\u7684\u56fe\u96c6"
      }) ], cube.prototype, "cubs", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u5207\u6362\u62fc\u56fe\u7684\u58f0\u97f3"
      }) ], cube.prototype, "sound", void 0);
      cube = __decorate([ ccclass ], cube);
      return cube;
    }(cc.Component);
    exports.default = cube;
    cc._RF.pop();
  }, {} ],
  "director 1-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57e4c/6YGdJM53yVUm0YJui", "director 1-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        man_move: cc.Node,
        gai_up: cc.Node,
        gai_down: cc.Node,
        man_up: cc.AudioSource,
        man_down: cc.AudioSource,
        mouse_flag: 0
      },
      onLoad: function onLoad() {
        this.mouse_flag = 0;
        this.node.on("touchstart", function(event) {
          this.exchange_bk();
          this.play_move();
          this.play_wav();
        }, this);
      },
      play_move: function play_move() {
        if (this.mouse_flag < 1) {
          var move = cc.moveTo(.3, -1, -70).easing(cc.easeIn(7));
          this.man_move.runAction(move);
          var rotate = cc.repeatForever(cc.sequence(cc.rotateTo(.13, -6), cc.rotateTo(.13, 6)));
          this.scheduleOnce(function() {
            this.man_move.runAction(rotate);
          }, .5);
          this.man_up.play();
          this.gai_up.active = true;
          this.gai_down.active = false;
          this.gai_up.getComponent(cc.Animation).play();
          this.mouse_flag++;
        } else {
          this.mouse_flag = 0;
          this.man_move.stopAllActions();
          var movedown = cc.sequence(cc.rotateTo(.05, 0), cc.moveTo(.5, -1, -400));
          this.man_move.runAction(movedown);
          this.scheduleOnce(function() {
            this.man_down.play();
          }, .7);
          this.gai_up.active = false;
          this.gai_down.active = true;
          this.gai_down.getComponent(cc.Animation).play();
        }
      },
      exchange_bk: function exchange_bk() {},
      play_wav: function play_wav() {},
      reset: function reset() {
        cc.director.loadScene("1");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "director 2-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca568uQbVZKC4chLJdeQLQA", "director 2-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        snail_1: cc.Node,
        snail_2: cc.Node,
        music: cc.AudioSource,
        replay_button: cc.Node
      },
      start: function start() {},
      cin: function cin() {
        this.replay_button.active = false;
        this.scheduleOnce(function() {
          this.music.play();
        }, .7);
        this.snail_1.getComponent("run 2-1").speed = -70;
        this.snail_2.getComponent("run 2-1").speed = -70;
        this.snail_1.getComponent("run 2-1").touch_flag = 1;
        this.snail_2.getComponent("run 2-1").touch_flag = 1;
      },
      replay: function replay() {
        this.snail_1.getComponent("run 2-1").replay();
        this.snail_2.getComponent("run 2-1").replay();
      }
    });
    cc._RF.pop();
  }, {} ],
  "director 3-1-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40c69i1ef9ODIHpxQ6BzHGx", "director 3-1-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        wooden: cc.Node
      },
      enabled_collision: function enabled_collision() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      },
      onLoad: function onLoad() {
        this.enabled_collision();
        this.node.on("touchend", function(e) {
          this.enabled_collision();
          var world_pos = e.getLocation();
          var home_pos = this.node.convertToNodeSpaceAR(world_pos);
          this.wooden.x = home_pos.x;
          this.wooden.y = home_pos.y;
        }, this);
      },
      reset: function reset() {
        cc.director.loadScene("3");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "director 5-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2514adWyKBBhoyZPuYlGPtP", "director 5-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        fire_list: [ cc.Node ],
        boom_list: [ cc.Vec2 ],
        label_list: [ cc.Node ],
        fire: cc.Node,
        fire1: cc.Node,
        fire2: cc.Node,
        flag: 0,
        num: 0,
        music: cc.AudioSource,
        music_1: cc.AudioSource
      },
      onLoad: function onLoad() {
        this.flag = 0;
        this._fire_flag = [];
      },
      start: function start() {},
      cin: function cin(evt, num) {
        if (!this._fire_flag[num]) {
          this._fire_flag[num] = 1;
          this.fire_list[num].getComponent(cc.Animation).play();
          var flag = ++this.flag;
          this.music.play();
          this.scheduleOnce(function() {
            this.music_1.play();
            this.play_fire(num);
            this.fire_list[num].active = false;
            this.label_list[num].active = true;
            this.label_list[num].getComponent(cc.Label).string = flag;
          }, .6);
        }
      },
      play_fire: function play_fire(i) {
        this.fire.x = this.boom_list[i].x;
        this.fire.y = this.boom_list[i].y;
        this.fire1.x = this.boom_list[i].x;
        this.fire1.y = this.boom_list[i].y;
        this.fire2.x = this.boom_list[i].x;
        this.fire2.y = this.boom_list[i].y;
        var anim = this.fire.getComponent(cc.Animation);
        var anim1 = this.fire1.getComponent(cc.Animation);
        var anim2 = this.fire2.getComponent(cc.Animation);
        anim.playAdditive("fire");
        anim1.playAdditive("fire2");
        anim2.playAdditive("fire3");
        this.scheduleOnce(function() {
          this.fire.x = -1e3;
          this.fire.y = 0;
          this.fire1.x = -1e3;
          this.fire1.y = 0;
          this.fire2.x = -1e3;
          this.fire2.y = 0;
        }, .5);
      },
      reset: function reset() {
        this._fire_flag = [];
        cc.director.loadScene("fireworks");
      }
    });
    cc._RF.pop();
  }, {} ],
  "director 6-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8a82I+WT9ABb+0xubHXlCK", "director 6-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        tv_list: [ cc.Node ],
        num: 0,
        button: cc.Node
      },
      onLoad: function onLoad() {
        this.num = 1;
        this.button.active = false;
      },
      reset: function reset() {
        cc.director.loadScene("tvs");
      },
      start: function start() {},
      update: function update(dt) {
        7 == this.num && (this.button.active = true);
      }
    });
    cc._RF.pop();
  }, {} ],
  "director 8-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e792d1J3cBJ/b4DwVDw0fnQ", "director 8-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        wooden: cc.Node,
        sp_count: cc.Sprite,
        spframe: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        this.node.on("touchend", function(e) {
          var world_pos = e.getLocation();
          var home_pos = this.node.convertToNodeSpaceAR(world_pos);
          this.wooden.x = home_pos.x;
          this.wooden.y = home_pos.y;
          this.pingzi_anim();
        }, this);
        this.bottleCount = 8;
        cc.game.on("bottles", this.clickBottle, this);
      },
      clickBottle: function clickBottle() {
        this.sp_count.spriteFrame = this.spframe[--this.bottleCount];
      },
      pingzi_anim: function pingzi_anim() {
        this.wooden.getComponent(cc.Animation).play();
      },
      reset: function reset() {
        cc.director.loadScene("bottles");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "director 9-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd63654r9xOfY8+XDt3Igsr", "director 9-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        select_num: 0,
        pen_1: cc.Node,
        pen_2: cc.Node,
        pen_3: cc.Node,
        pen_4: cc.Node,
        pen_5: cc.Node,
        pen_6: cc.Node,
        pen_7: cc.Node,
        pen_8: cc.Node,
        pen_9: cc.Node,
        first_position_1: cc.Vec2,
        first_position_2: cc.Vec2,
        first_position_3: cc.Vec2,
        first_position_4: cc.Vec2,
        first_position_5: cc.Vec2,
        first_position_6: cc.Vec2,
        first_position_7: cc.Vec2,
        first_position_8: cc.Vec2,
        first_position_9: cc.Vec2
      },
      onLoad: function onLoad() {
        this.first_position_1.x = this.pen_1.x;
        this.first_position_2.x = this.pen_2.x;
        this.first_position_3.x = this.pen_3.x;
        this.first_position_4.x = this.pen_4.x;
        this.first_position_5.x = this.pen_5.x;
        this.first_position_6.x = this.pen_6.x;
        this.first_position_7.x = this.pen_7.x;
        this.first_position_8.x = this.pen_8.x;
        this.first_position_9.x = this.pen_9.x;
        this.first_position_1.y = this.pen_1.y;
        this.first_position_2.y = this.pen_2.y;
        this.first_position_3.y = this.pen_3.y;
        this.first_position_4.y = this.pen_4.y;
        this.first_position_5.y = this.pen_5.y;
        this.first_position_6.y = this.pen_6.y;
        this.first_position_7.y = this.pen_7.y;
        this.first_position_8.y = this.pen_8.y;
        this.first_position_9.y = this.pen_9.y;
      },
      start: function start() {},
      move_1: function move_1() {
        this.pen_1.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 1;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_2: function move_2() {
        this.pen_2.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 2;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_3: function move_3() {
        this.pen_3.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 3;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_4: function move_4() {
        this.pen_4.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 4;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_5: function move_5() {
        this.pen_5.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 5;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_6: function move_6() {
        this.pen_6.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 6;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_7: function move_7() {
        this.pen_7.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 7;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_8: function move_8() {
        this.pen_8.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 8;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_9.x = this.first_position_9.x;
        this.pen_9.y = this.first_position_9.y;
      },
      move_9: function move_9() {
        this.pen_9.runAction(cc.moveTo(.5, 425, 120));
        this.select_num = 9;
        this.pen_1.x = this.first_position_1.x;
        this.pen_1.y = this.first_position_1.y;
        this.pen_2.x = this.first_position_2.x;
        this.pen_2.y = this.first_position_2.y;
        this.pen_3.x = this.first_position_3.x;
        this.pen_3.y = this.first_position_3.y;
        this.pen_4.x = this.first_position_4.x;
        this.pen_4.y = this.first_position_4.y;
        this.pen_5.x = this.first_position_5.x;
        this.pen_5.y = this.first_position_5.y;
        this.pen_6.x = this.first_position_6.x;
        this.pen_6.y = this.first_position_6.y;
        this.pen_7.x = this.first_position_7.x;
        this.pen_7.y = this.first_position_7.y;
        this.pen_8.x = this.first_position_8.x;
        this.pen_8.y = this.first_position_8.y;
      },
      show_pen: function show_pen() {
        if (1 == this.select_num) {
          this.pen_1.active = true;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (2 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = true;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (3 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = true;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (4 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = true;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (5 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = true;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (6 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = true;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (7 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = true;
          this.pen_8.active = false;
          this.pen_9.active = false;
        } else if (8 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = true;
          this.pen_9.active = false;
        } else if (9 == this.select_num) {
          this.pen_1.active = false;
          this.pen_2.active = false;
          this.pen_3.active = false;
          this.pen_4.active = false;
          this.pen_5.active = false;
          this.pen_6.active = false;
          this.pen_7.active = false;
          this.pen_8.active = false;
          this.pen_9.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  director_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03122KKTs1CorXB+bIxXTEE", "director_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        initCount: 0,
        man: cc.Node,
        flower1: cc.Prefab,
        flower_list: [ cc.Node ],
        parentNode: cc.Node,
        cake_list: cc.Node,
        cake: 0,
        location: cc.Vec2,
        canvas: cc.Node
      },
      onLoad: function onLoad() {
        this.init_1();
      },
      init_1: function init_1() {
        this.flower1Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.flower1Pool.put(cc.instantiate(this.flower1));
      },
      make_flower1: function make_flower1(i) {
        var enemy = null;
        if (this.flower1Pool.size() > 0) enemy = this.flower1Pool.get(); else {
          this.flower1Pool.put(cc.instantiate(this.flower1));
          enemy = this.flower1Pool.get();
        }
        enemy.parent = this.man;
        enemy.x = this.cake_list.x;
        enemy.y = this.cake_list.y;
      },
      init_3: function init_3(i) {
        var enemy = cc.instantiate(this.cake_list);
        enemy.parent = this.man;
        enemy.x = -300;
        enemy.y = -229;
        this.flower_list[i] = enemy;
      },
      main_init: function main_init() {
        this.num = Math.floor(4 * Math.random() + 7);
        for (var i = 0; i < this.num; i++) {
          var random = Math.floor(3 * Math.random());
          0 == random ? this.init_3(i) : 1 == random ? this.init_3(i) : 2 == random && this.init_3(i);
        }
      },
      flower1_killed: function flower1_killed(enemy) {
        this.flower1Pool.put(enemy);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  director_929: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f711f8oMi1P/KOub7+q8d0t", "director_929");
    cc.Class({
      extends: cc.Component,
      properties: {
        min_y: 0,
        move_flag: 0,
        music: cc.AudioSource,
        anim: {
          type: cc.Animation,
          default: null
        },
        eye: cc.Sprite,
        spicons: [ cc.SpriteFrame ]
      },
      onLoad: function() {
        this.eye.spriteFrame = this.spicons[1];
        this.node.on("touchmove", function(event) {
          if (1 == this.move_flag) return;
          if (this.node.y <= this.min_y) {
            this.move_flag = 1;
            this.music.play();
            this.node.y = this.min_y;
            var action = cc.moveTo(4, 0, 0);
            this.node.runAction(action);
            this.scheduleOnce(function() {
              this.move_flag = 0;
            }, 4);
          } else this.node.y += event.getDelta().y;
        }, this);
        this.node.on("touchend", function(event) {
          if (1 == this.move_flag) return;
          this.move_flag = 1;
          cc.log("touchend");
          this.music.play();
          var action = cc.moveTo(2, 0, 0);
          this.node.runAction(action);
          this.scheduleOnce(function() {
            this.move_flag = 0;
          }, 2);
        }, this);
        this.node.on("touchcancel", function(event) {
          if (1 == this.move_flag) return;
          cc.log("touchcancel\t");
          this.move_flag = 1;
          this.music.play();
          var action = cc.moveTo(2, 0, 0);
          this.node.runAction(action);
          this.scheduleOnce(function() {
            this.move_flag = 0;
          }, 2);
        }, this);
      },
      start: function() {},
      update: function(dt) {
        if (1 == this.move_flag) this.eye.spriteFrame = this.spicons[1]; else if (0 == this.move_flag) {
          this.eye.spriteFrame = this.spicons[0];
          this.anim.getComponent(cc.Animation).play();
          this.music.stop();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  director_PianoGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc53cDRJXhLwIjgbJHJbu5w", "director_PianoGames");
    "use strict";
    var MAX_COUNT = 16;
    cc.Class({
      extends: cc.Component,
      properties: {
        AudioSource: [ cc.AudioSource ],
        head_p: 0,
        get_audio: [ cc.Integer ],
        initCount: 0,
        per_1: cc.Prefab,
        per_2: cc.Prefab,
        per_3: cc.Prefab,
        per_4: cc.Prefab,
        per_5: cc.Prefab,
        per_6: cc.Prefab,
        first_x: 0,
        distance: 0,
        clear_flag: 0
      },
      onLoad: function onLoad() {
        this.head_p = 0;
        this.init1();
        this.init2();
        this.init3();
        this.init4();
        this.init5();
        this.init6();
        this._all_element_sound = [];
      },
      play_1: function play_1() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[0].play();
        this.get_audio[this.head_p] = 1;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire1(this.first_x + this.head_p * this.distance);
      },
      play_2: function play_2() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[1].play();
        this.get_audio[this.head_p] = 2;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire2(this.first_x + this.head_p * this.distance);
      },
      play_3: function play_3() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[2].play();
        this.get_audio[this.head_p] = 3;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire3(this.first_x + this.head_p * this.distance);
      },
      play_4: function play_4() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[3].play();
        this.get_audio[this.head_p] = 4;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire4(this.first_x + this.head_p * this.distance);
      },
      play_5: function play_5() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[4].play();
        this.get_audio[this.head_p] = 5;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire5(this.first_x + this.head_p * this.distance);
      },
      play_6: function play_6() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[5].play();
        this.get_audio[this.head_p] = 6;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire6(this.first_x + this.head_p * this.distance);
      },
      play_7: function play_7() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[6].play();
        this.get_audio[this.head_p] = 7;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire7(this.first_x + this.head_p * this.distance);
      },
      play_8: function play_8() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[7].play();
        this.get_audio[this.head_p] = 8;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire8(this.first_x + this.head_p * this.distance);
      },
      play_9: function play_9() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[8].play();
        this.get_audio[this.head_p] = 9;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire9(this.first_x + this.head_p * this.distance);
      },
      play_10: function play_10() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[9].play();
        this.get_audio[this.head_p] = 10;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire10(this.first_x + this.head_p * this.distance);
      },
      play_11: function play_11() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[10].play();
        this.get_audio[this.head_p] = 11;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire11(this.first_x + this.head_p * this.distance);
      },
      play_12: function play_12() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[11].play();
        this.get_audio[this.head_p] = 12;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire12(this.first_x + this.head_p * this.distance);
      },
      play_13: function play_13() {
        1 == this.clear_flag && (this.clear_flag = 0);
        this.AudioSource[12].play();
        this.get_audio[this.head_p] = 13;
        this.head_p++;
        if (this.head_p > MAX_COUNT) return;
        this.make_fire13(this.first_x + this.head_p * this.distance);
      },
      play1: function play1() {
        this.AudioSource[0].play();
        this.get_audio[this.head_p] = 1;
      },
      play2: function play2() {
        this.AudioSource[1].play();
        this.get_audio[this.head_p] = 2;
      },
      play3: function play3() {
        this.AudioSource[2].play();
        this.get_audio[this.head_p] = 3;
      },
      play4: function play4() {
        this.AudioSource[3].play();
        this.get_audio[this.head_p] = 4;
      },
      play5: function play5() {
        this.AudioSource[4].play();
        this.get_audio[this.head_p] = 5;
      },
      play6: function play6() {
        this.AudioSource[5].play();
        this.get_audio[this.head_p] = 6;
      },
      play7: function play7() {
        this.AudioSource[6].play();
        this.get_audio[this.head_p] = 7;
      },
      play8: function play8() {
        this.AudioSource[7].play();
        this.get_audio[this.head_p] = 8;
      },
      play9: function play9() {
        this.AudioSource[8].play();
        this.get_audio[this.head_p] = 9;
      },
      play10: function play10() {
        this.AudioSource[9].play();
        this.get_audio[this.head_p] = 10;
      },
      play11: function play11() {
        this.AudioSource[10].play();
        this.get_audio[this.head_p] = 11;
      },
      play12: function play12() {
        this.AudioSource[11].play();
        this.get_audio[this.head_p] = 12;
      },
      play13: function play13() {
        this.AudioSource[12].play();
        this.get_audio[this.head_p] = 13;
      },
      get: function get() {
        var i = 0;
        if (0 == this.head_p) return;
        this.callback = function() {
          this._all_element_sound[i].runAction(cc.sequence(cc.tintTo(.2, 255, 235, 4), cc.tintTo(.2, 0, 0, 0)));
          if (1 == this.get_audio[i]) {
            this.play1();
            i++;
          } else if (2 == this.get_audio[i]) {
            this.play2();
            i++;
          } else if (3 == this.get_audio[i]) {
            this.play3();
            i++;
          } else if (4 == this.get_audio[i]) {
            this.play4();
            i++;
          } else if (5 == this.get_audio[i]) {
            this.play5();
            i++;
          } else if (6 == this.get_audio[i]) {
            this.play6();
            i++;
          } else if (7 == this.get_audio[i]) {
            this.play7();
            i++;
          } else if (8 == this.get_audio[i]) {
            this.play8();
            i++;
          } else if (9 == this.get_audio[i]) {
            this.play9();
            i++;
          } else if (10 == this.get_audio[i]) {
            this.play10();
            i++;
          } else if (11 == this.get_audio[i]) {
            this.play11();
            i++;
          } else if (12 == this.get_audio[i]) {
            this.play12();
            i++;
          } else if (13 == this.get_audio[i]) {
            this.play13();
            i++;
          }
          cc.log("i" + i + "head_p" + this.head_p);
          (i >= this.head_p || i >= MAX_COUNT) && this.unschedule(this.callback);
        };
        this.schedule(this.callback, .5);
      },
      clear: function clear() {
        this.head_p = 0;
        this.clear_flag = 1;
        this._all_element_sound = [];
      },
      init1: function init1() {
        this.fire1Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire1Pool.put(cc.instantiate(this.per_1));
      },
      init2: function init2() {
        this.fire2Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire2Pool.put(cc.instantiate(this.per_2));
      },
      init3: function init3() {
        this.fire3Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire3Pool.put(cc.instantiate(this.per_3));
      },
      init4: function init4() {
        this.fire4Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire4Pool.put(cc.instantiate(this.per_4));
      },
      init5: function init5() {
        this.fire5Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire5Pool.put(cc.instantiate(this.per_5));
      },
      init6: function init6() {
        this.fire6Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.fire6Pool.put(cc.instantiate(this.per_6));
      },
      make_fire_common: function make_fire_common(enemy, x) {
        enemy.parent = this.node;
        enemy.x = x;
        this._all_element_sound.push(enemy);
      },
      make_fire1: function make_fire1(x) {
        var enemy = null;
        if (this.fire1Pool.size() > 0) enemy = this.fire1Pool.get(); else {
          this.fire1Pool.put(cc.instantiate(this.per_1));
          enemy = this.fire1Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 181;
      },
      make_fire2: function make_fire2(x) {
        var enemy = null;
        if (this.fire2Pool.size() > 0) enemy = this.fire2Pool.get(); else {
          this.fire2Pool.put(cc.instantiate(this.per_2));
          enemy = this.fire2Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 181;
      },
      make_fire3: function make_fire3(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 191;
      },
      make_fire4: function make_fire4(x) {
        var enemy = null;
        if (this.fire4Pool.size() > 0) enemy = this.fire4Pool.get(); else {
          this.fire4Pool.put(cc.instantiate(this.per_4));
          enemy = this.fire4Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 200;
      },
      make_fire5: function make_fire5(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 200;
      },
      make_fire6: function make_fire6(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 209;
      },
      make_fire7: function make_fire7(x) {
        var enemy = null;
        if (this.fire5Pool.size() > 0) enemy = this.fire5Pool.get(); else {
          this.fire5Pool.put(cc.instantiate(this.per_5));
          enemy = this.fire5Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 207;
      },
      make_fire8: function make_fire8(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 216;
      },
      make_fire9: function make_fire9(x) {
        var enemy = null;
        if (this.fire4Pool.size() > 0) enemy = this.fire4Pool.get(); else {
          this.fire4Pool.put(cc.instantiate(this.per_4));
          enemy = this.fire4Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 225;
      },
      make_fire10: function make_fire10(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 225;
      },
      make_fire11: function make_fire11(x) {
        var enemy = null;
        if (this.fire4Pool.size() > 0) enemy = this.fire4Pool.get(); else {
          this.fire4Pool.put(cc.instantiate(this.per_4));
          enemy = this.fire4Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 234;
      },
      make_fire12: function make_fire12(x) {
        var enemy = null;
        if (this.fire3Pool.size() > 0) enemy = this.fire3Pool.get(); else {
          this.fire3Pool.put(cc.instantiate(this.per_3));
          enemy = this.fire3Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 234;
      },
      make_fire13: function make_fire13(x) {
        var enemy = null;
        if (this.fire6Pool.size() > 0) enemy = this.fire6Pool.get(); else {
          this.fire6Pool.put(cc.instantiate(this.per_6));
          enemy = this.fire6Pool.get();
        }
        this.make_fire_common(enemy, x);
        enemy.y = 190;
      },
      fire1_killed: function fire1_killed(enemy) {
        this.fire1Pool.put(enemy);
      },
      fire2_killed: function fire2_killed(enemy) {
        this.fire2Pool.put(enemy);
      },
      fire3_killed: function fire3_killed(enemy) {
        this.fire3Pool.put(enemy);
      },
      fire4_killed: function fire4_killed(enemy) {
        this.fire4Pool.put(enemy);
      }
    });
    cc._RF.pop();
  }, {} ],
  director_SpinGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71d12jsXUhCHI61oJDBMAlA", "director_SpinGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        main: [ cc.Node ],
        main_index: 0,
        white_bk: cc.Node,
        play_flag: 0,
        rotate_speed: 0
      },
      onLoad: function onLoad() {
        this.rotate_speed = 1;
      },
      show_0: function show_0() {
        for (var i = 0; i < this.main.length; i++) this.main[i].active = false;
        this.main[0].active = true;
        this.main_index = 0;
      },
      show_1: function show_1() {
        for (var i = 0; i < this.main.length; i++) this.main[i].active = false;
        this.main[1].active = true;
        this.main_index = 1;
      },
      show_2: function show_2() {
        for (var i = 0; i < this.main.length; i++) this.main[i].active = false;
        this.main[2].active = true;
        this.main_index = 2;
      },
      show_3: function show_3() {
        for (var i = 0; i < this.main.length; i++) this.main[i].active = false;
        this.main[3].active = true;
        this.main_index = 3;
      },
      start: function start() {},
      update: function update(dt) {
        if (1 == this.play_flag) {
          this.main[this.main_index].angle += -this.rotate_speed;
          -this.main[this.main_index].angle >= 360 && (this.main[this.main_index].angle = 0);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  director_bottles: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11e0dXBRw9DaqDRWiNlBrHC", "director_bottles");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        wooden: cc.Node,
        sp_count: cc.Sprite,
        spframe: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        this.node.on("touchend", function(e) {
          var world_pos = e.getLocation();
          var home_pos = this.node.convertToNodeSpaceAR(world_pos);
          this.wooden.x = home_pos.x;
          this.wooden.y = home_pos.y;
          this.pingzi_anim();
        }, this);
        this.bottleCount = 8;
        cc.game.on("bottles", this.clickBottle, this);
      },
      onDestroy: function onDestroy() {
        cc.game.off("bottles", this.clickBottle, this);
      },
      clickBottle: function clickBottle() {
        this.sp_count.spriteFrame = this.spframe[--this.bottleCount];
      },
      pingzi_anim: function pingzi_anim() {
        this.wooden.getComponent(cc.Animation).play();
      },
      reset: function reset() {
        cc.director.loadScene("bottles");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  director_duck: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26558pNYiBAXYQzhWqKk2z6", "director_duck");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        head: cc.Node,
        duck_list: [ cc.Node ],
        flag_list: [ cc.Integer ]
      },
      start: function start() {},
      juge_go: function juge_go() {
        for (var i = 0; i < this.flag_list.length; i++) cc.log(this.flag_list[i]);
        var num = 0;
        for (var _i = 0; _i < this.flag_list.length; _i++) 1 == this.flag_list[_i] && num++;
        if (4 == num) {
          this.node.getComponent(cc.AudioSource).play();
          for (var _i2 = 0; _i2 < this.flag_list.length; _i2++) {
            var action = cc.moveBy(5.5, -600, 0);
            this.head.runAction(action);
            this.scheduleOnce(function() {
              for (var _i3 = 0; _i3 < this.flag_list.length; _i3++) {
                this.duck_list[_i3].getComponent("duck").mouse_flag = 0;
                this.duck_list[_i3].getComponent("duck").mouse.active = false;
                this.flag_list[_i3] = 0;
              }
              this.head.x = 480;
              var action1 = cc.moveBy(2, -200, 0);
              this.head.runAction(action1);
            }, 6);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  director_qingting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "729f9E++N9Aqqn7Uu+1LvPa", "director_qingting");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        node_list: [ cc.Node ]
      },
      judge_equal: function judge_equal() {
        if (this.node_list[0].angle == this.node_list[1].angle && this.node_list[0].angle == this.node_list[2].angle && this.node_list[0].angle == this.node_list[3].angle) {
          this.node.getComponent(cc.AudioSource).play();
          this.node_list[0].getComponent(cc.Animation).play();
          this.node_list[1].getComponent(cc.Animation).play();
          this.node_list[2].getComponent(cc.Animation).play();
          this.node_list[3].getComponent(cc.Animation).play();
          this.move_action();
        }
      },
      move_action: function move_action() {
        if (0 == -this.node_list[0].angle) {
          this.scheduleOnce(function() {
            this.all_reset();
          }, 2);
          var up0 = cc.moveBy(2, 0, 1e3);
          var up1 = cc.moveBy(2, 0, 1e3);
          var up2 = cc.moveBy(2, 0, 1e3);
          var up3 = cc.moveBy(2, 0, 1e3);
          this.node_list[0].runAction(up0);
          this.node_list[1].runAction(up1);
          this.node_list[2].runAction(up2);
          this.node_list[3].runAction(up3);
        } else if (90 == -this.node_list[0].angle) {
          this.scheduleOnce(function() {
            this.all_reset();
          }, 2);
          var right0 = cc.moveBy(2, 1e3, 0);
          var right1 = cc.moveBy(2, 1e3, 0);
          var right2 = cc.moveBy(2, 1e3, 0);
          var right3 = cc.moveBy(2, 1e3, 0);
          this.node_list[0].runAction(right0);
          this.node_list[1].runAction(right1);
          this.node_list[2].runAction(right2);
          this.node_list[3].runAction(right3);
        } else if (180 == -this.node_list[0].angle) {
          this.scheduleOnce(function() {
            this.all_reset();
          }, 2);
          var down0 = cc.moveBy(2, 0, -1e3);
          var down1 = cc.moveBy(2, 0, -1e3);
          var down2 = cc.moveBy(2, 0, -1e3);
          var down3 = cc.moveBy(2, 0, -1e3);
          this.node_list[0].runAction(down0);
          this.node_list[1].runAction(down1);
          this.node_list[2].runAction(down2);
          this.node_list[3].runAction(down3);
        } else if (270 == -this.node_list[0].angle) {
          this.scheduleOnce(function() {
            this.all_reset();
          }, 2);
          var left0 = cc.moveBy(2, -1e3, 0);
          var left1 = cc.moveBy(2, -1e3, 0);
          var left2 = cc.moveBy(2, -1e3, 0);
          var left3 = cc.moveBy(2, -1e3, 0);
          this.node_list[0].runAction(left0);
          this.node_list[1].runAction(left1);
          this.node_list[2].runAction(left2);
          this.node_list[3].runAction(left3);
        }
      },
      all_reset: function all_reset() {
        this.node_list[0].getComponent(cc.Animation).stop();
        this.node_list[1].getComponent(cc.Animation).stop();
        this.node_list[2].getComponent(cc.Animation).stop();
        this.node_list[3].getComponent(cc.Animation).stop();
        this.node_list[0].getComponent("qinting").reset_position();
        this.node_list[1].getComponent("qinting").reset_position();
        this.node_list[2].getComponent("qinting").reset_position();
        this.node_list[3].getComponent("qinting").reset_position();
        this.node_list[0].getComponent("qinting").random_angle();
        this.node_list[1].getComponent("qinting").random_angle();
        this.node_list[2].getComponent("qinting").random_angle();
        this.node_list[3].getComponent("qinting").random_angle();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  director_recycling: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca65aLy5OZNa4MvxNcu+bzH", "director_recycling");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        head_list: [ cc.Node ],
        head_flag: 0,
        parent: cc.Node,
        trash_list: [ cc.Node ]
      },
      onLoad: function onLoad() {
        this.random_head();
        this.clone();
      },
      start: function start() {},
      random_head: function random_head() {
        var random = Math.floor(3 * Math.random());
        this.head_flag = random;
        this.head_list[random].active = true;
      },
      add_head_index: function add_head_index() {
        this.head_list[this.head_flag].active = false;
        2 == this.head_flag && (this.head_flag = -1);
        this.head_flag++;
        this.head_list[this.head_flag].active = true;
      },
      clone: function clone() {
        var num = Math.floor(6 * Math.random() + 5);
        for (var i = 0; i < num; i++) {
          var flag = Math.floor(3 * Math.random());
          if (0 == flag) {
            var enemy = cc.instantiate(this.trash_list[0]);
            enemy.parent = this.parent;
            enemy.angle = -Math.floor(361 * Math.random() + 0);
            enemy.x += Math.floor(101 * Math.random() - 50);
            enemy.y += Math.floor(101 * Math.random() - 50);
            cc.log(enemy.x + " " + enemy.y);
          } else if (1 == flag) {
            var _enemy = cc.instantiate(this.trash_list[1]);
            _enemy.parent = this.parent;
            _enemy.angle = -Math.floor(361 * Math.random() + 0);
            _enemy.x += Math.floor(101 * Math.random() - 50);
            _enemy.y += Math.floor(101 * Math.random() - 50);
          } else {
            var _enemy2 = cc.instantiate(this.trash_list[2]);
            _enemy2.parent = this.parent;
            _enemy2.angle = -Math.floor(361 * Math.random() + 0);
            _enemy2.x += Math.floor(101 * Math.random() - 50);
            _enemy2.y += Math.floor(101 * Math.random() - 50);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  dolls: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dc65DJpaZMNJVj1vjeIOzE", "dolls");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var dolls = function(_super) {
      __extends(dolls, _super);
      function dolls() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_dolls = null;
        _this._init_pos = [];
        _this._cur_index = 0;
        _this._dir = 1;
        _this._isPlaying = false;
        return _this;
      }
      dolls.prototype.onLoad = function() {
        var _this = this;
        this.node_dolls.children.forEach(function(n, i) {
          n.zIndex = _this.node_dolls.childrenCount - i;
          _this._init_pos[i] = n.position.clone();
          n.on(cc.Node.EventType.TOUCH_START, function() {
            _this._clickBox(i);
          }, _this);
        });
      };
      dolls.prototype.start = function() {
        this.resetGame();
      };
      dolls.prototype._clickBox = function(index) {
        var _this = this;
        if (this._isPlaying) return;
        if (index === this._cur_index) {
          this._isPlaying = true;
          0 === index && (this._dir = 1);
          index === this.node_dolls.childrenCount - 1 && (this._dir = -1);
          this._cur_index += this._dir;
          var curNode_1 = this.node_dolls.getChildByName("doll" + (index + 1));
          var nextNode_1 = this.node_dolls.getChildByName("doll" + (this._cur_index + 1));
          var curPos_1 = this._init_pos[index];
          var nextPos_1 = this._init_pos[this._cur_index];
          cc.log("=======>_clickBox");
          cc.log(index, this._cur_index, curNode_1.name, nextNode_1.name);
          if (this._dir > 0) {
            nextNode_1.position = curPos_1;
            nextNode_1.getChildByName("num").active = false;
            nextNode_1.opacity = 255;
            curNode_1.getChildByName("head").runAction(cc.sequence(cc.moveBy(.5, 0, 250), cc.callFunc(function() {
              nextNode_1.runAction(cc.bezierTo(.5, [ curPos_1, cc.v2((nextPos_1.x + curPos_1.x) / 2, curPos_1.y + 300 * nextNode_1.scale), nextPos_1 ]));
            }), cc.delayTime(.5), cc.moveBy(.5, 0, -250), cc.callFunc(function() {
              nextNode_1.getChildByName("num").active = true;
              _this._isPlaying = false;
            })));
          } else {
            curNode_1.getChildByName("num").active = false;
            nextNode_1.getChildByName("head").runAction(cc.sequence(cc.moveBy(.5, 0, 250), cc.callFunc(function() {
              curNode_1.runAction(cc.bezierTo(.5, [ curPos_1, cc.v2((nextPos_1.x + curPos_1.x) / 2, curPos_1.y + 300 * curNode_1.scale), nextPos_1 ]));
            }), cc.delayTime(.5), cc.moveBy(.5, 0, -250), cc.callFunc(function() {
              curNode_1.opacity = 0;
              _this._isPlaying = false;
            })));
          }
        }
      };
      dolls.prototype.resetGame = function() {
        var _this = this;
        this._cur_index = 0;
        this._dir = 1;
        this._isPlaying = false;
        this.node_dolls.children.forEach(function(nn, i) {
          var n = _this.node_dolls.getChildByName("doll" + (i + 1));
          n.stopAllActions();
          var head = n.getChildByName("head");
          head.stopAllActions();
          head.y = 0;
          if (0 === i) ; else {
            n.position = _this._init_pos[i - 1];
            n.opacity = 0;
          }
        });
      };
      __decorate([ property(cc.Node) ], dolls.prototype, "node_dolls", void 0);
      dolls = __decorate([ ccclass ], dolls);
      return dolls;
    }(cc.Component);
    exports.default = dolls;
    cc._RF.pop();
  }, {} ],
  dolphin_box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bf12hZIBNDnqisqil4HQL2", "dolphin_box");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dolphin_box = function(_super) {
      __extends(Dolphin_box, _super);
      function Dolphin_box() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animation_box = null;
        _this.animation_all = [];
        _this.node_box_content = null;
        _this.audioClip_bgm = null;
        _this._isBoxOpen = false;
        return _this;
      }
      Dolphin_box.prototype.onLoad = function() {
        this.node_box_content.active = false;
      };
      Dolphin_box.prototype.clickAnimNode = function(event, customEventData) {
        var customEventDataS = customEventData.split(",");
        var anim_p = this.animation_all[customEventDataS[0]];
        if (anim_p && customEventDataS[1]) {
          var animState = anim_p.getAnimationState(customEventDataS[1]);
          animState.isPaused ? anim_p.resume() : anim_p.pause();
        }
      };
      Dolphin_box.prototype.clickBox = function() {
        this._isBoxOpen ? this.closeBox() : this.openBox();
      };
      Dolphin_box.prototype.openBox = function() {
        this._isBoxOpen = true;
        this.animation_box.stop();
        var animState = this.animation_box.getAnimationState("dolphin_box");
        animState.wrapMode = cc.WrapMode.Normal;
        this.animation_box.play();
        this.node_box_content.active = true;
        cc.audioEngine.playMusic(this.audioClip_bgm, true);
        this.animation_all.forEach(function(v) {
          return v.play();
        });
      };
      Dolphin_box.prototype.closeBox = function() {
        this._isBoxOpen = false;
        this.animation_box.stop();
        var animState = this.animation_box.getAnimationState("dolphin_box");
        animState.wrapMode = cc.WrapMode.Reverse;
        this.animation_box.play();
        this.node_box_content.active = false;
        cc.audioEngine.stopMusic();
        this.animation_all.forEach(function(v) {
          return v.stop();
        });
      };
      __decorate([ property(cc.Animation) ], Dolphin_box.prototype, "animation_box", void 0);
      __decorate([ property([ cc.Animation ]) ], Dolphin_box.prototype, "animation_all", void 0);
      __decorate([ property(cc.Node) ], Dolphin_box.prototype, "node_box_content", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Dolphin_box.prototype, "audioClip_bgm", void 0);
      Dolphin_box = __decorate([ ccclass ], Dolphin_box);
      return Dolphin_box;
    }(cc.Component);
    exports.default = Dolphin_box;
    cc._RF.pop();
  }, {} ],
  dolphins_Mgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "984cdgHc7hAbKStTQNvKed9", "dolphins_Mgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 0;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -1280);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  dolphins_PZ: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "947edmGJORMDqAAOwVFVelR", "dolphins_PZ");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        type: 0,
        music: {
          type: cc.AudioClip,
          default: null
        },
        ismusic: false
      },
      onLoad: function onLoad() {},
      start: function start() {},
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (0 == this.type || 2 == this.type || 4 == this.type) {
          this.node.runAction(cc.rotateTo(.1, -40));
          if (false == this.ismusic) {
            cc.audioEngine.play(this.music, false, 1);
            this.ismusic = true;
          }
          setTimeout(function() {
            if (this.node) {
              this.ismusic = false;
              this.node.runAction(cc.rotateTo(.1, 0));
            }
          }.bind(this), 300);
        } else if (1 == this.type || 3 == this.type || 5 == this.type) {
          this.node.runAction(cc.rotateTo(.1, 40));
          cc.audioEngine.play(this.music, false, 1);
          setTimeout(function() {
            this.node && this.node.runAction(cc.rotateTo(.1, 0));
          }.bind(this), 300);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  drag_bungee: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2fb5I/uhBO1r6oqS1dAQvc", "drag_bungee");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.speed = 30;
        this.viscosity = 1.03;
        this.pozy = 200;
        this.pozx = 0;
        this.lcoun = 0;
        this.yvelocity = 0;
        this.xvelocity = 0;
        this.startdrag = true;
        this.ani = cc.find("Canvas/man/hands").getComponent(cc.Animation);
        this.ani2 = cc.find("Canvas/man/legs").getComponent(cc.Animation);
        cc.find("Canvas/man/hairs/shape " + parseInt(13 * Math.random() + 18)).active = true;
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.move, this);
        }.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
          var zt = this.ani.play("handsclip");
          var zt2 = this.ani2.play("legsclip");
          zt.repeatCount = 10;
          zt2.repeatCount = 10;
          this.startdrag = false;
          this.node.off(cc.Node.EventType.TOUCH_MOVE, this.move, this);
        }.bind(this), this);
      },
      move: function move(e) {
        this.startdrag = true;
        var t = this.node.convertToNodeSpaceAR(e.getLocation());
        this.node.x += t.x;
        this.node.y += t.y;
      },
      update: function update(dt) {
        if (false == this.startdrag) {
          this.difference2 = this.pozy - this.node.y;
          this.yvelocity = (this.yvelocity + this.difference2 / this.speed) / this.viscosity;
          this.node.y += this.yvelocity;
          this.difference1 = this.pozx - this.node.x;
          this.xvelocity = (this.xvelocity + this.difference1 / this.speed) / this.viscosity;
          this.node.x += this.xvelocity;
          this.difference2 = this.pozy - this.node.y;
          this.yvelocity = (this.yvelocity + this.difference2 / this.speed) / this.viscosity;
          this.node.y += this.yvelocity;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  drawline2_bungee: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "859feac7/tGPKCFCg5n8n3I", "drawline2_bungee");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.ctx = this.getComponent(cc.Graphics);
        this.target = cc.find("Canvas/man");
      },
      update: function update(dt) {
        this.ctx.clear();
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(183, 256);
        this.ctx.lineTo(this.target.x + 10, this.target.y - 50);
        this.ctx.stroke();
      }
    });
    cc._RF.pop();
  }, {} ],
  drawline_bungee: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91a7cgWHKNOR5+aEz1nbTHQ", "drawline_bungee");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.game.setFrameRate(36);
        this.ctx = this.getComponent(cc.Graphics);
        this.target = cc.find("Canvas/man");
      },
      update: function update(dt) {
        this.ctx.clear();
        this.ctx.lineWidth = 3;
        this.ctx.moveTo(-157, 256);
        this.ctx.lineTo(this.target.x - 10, this.target.y - 50);
        this.ctx.stroke();
      }
    });
    cc._RF.pop();
  }, {} ],
  "drum  4-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0c93cZUH5PgJgma5vLl4wL", "drum  4-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        hero: cc.Node,
        play_num: 0,
        music: cc.AudioSource,
        hero1: cc.Node,
        hero2: cc.Node,
        hero3: cc.Node,
        hero4: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchstart", function(event) {
          this.hero.getComponent("hero 4-1").other_node = this.node;
          this.node.x > this.hero.x ? this.hero.getComponent("hero 4-1").speed_direction = 1 : this.node.x < this.hero.x && (this.hero.getComponent("hero 4-1").speed_direction = -1);
        }, this);
      },
      play_1_times: function play_1_times() {
        this.schedule(function() {
          this.music.play();
        }, .5, 0, 1);
        this.hero.getComponent("hero 4-1").play_1();
        this.hero1.pauseSystemEvents();
        this.hero2.resumeSystemEvents();
        this.hero3.resumeSystemEvents();
        this.hero4.resumeSystemEvents();
      },
      play_2_times: function play_2_times() {
        cc.log("play");
        this.schedule(function() {
          cc.log("play");
          this.music.play();
        }, .5, 1, 1);
        this.hero.getComponent("hero 4-1").play_2();
        this.hero2.pauseSystemEvents();
        this.hero1.resumeSystemEvents();
        this.hero3.resumeSystemEvents();
        this.hero4.resumeSystemEvents();
      },
      play_3_times: function play_3_times() {
        this.schedule(function() {
          this.music.play();
        }, .5, 2, 1);
        this.hero.getComponent("hero 4-1").play_3();
        this.hero3.pauseSystemEvents();
        this.hero1.resumeSystemEvents();
        this.hero2.resumeSystemEvents();
        this.hero4.resumeSystemEvents();
      },
      play_4_times: function play_4_times() {
        this.schedule(function() {
          this.music.play();
        }, .5, 3, 1);
        this.hero.getComponent("hero 4-1").play_4();
        this.hero4.pauseSystemEvents();
        this.hero1.resumeSystemEvents();
        this.hero2.resumeSystemEvents();
        this.hero3.resumeSystemEvents();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  duck: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abdb76exHNDqo9VnUuHAqCW", "duck");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        mouse: cc.Node,
        mouse_flag: 0,
        music: cc.AudioSource,
        flag: 0
      },
      onLoad: function onLoad() {
        this.mouse_flag = 0;
      },
      juge: function juge() {
        this.music.play();
        var seq = cc.sequence(cc.rotateTo(.4, -90), cc.rotateTo(.4, 0));
        this.node.runAction(seq);
        var random = Math.floor(2 * Math.random());
        this.scheduleOnce(function() {
          if (1 == random) {
            this.mouse.active = true;
            this.director.getComponent("director_duck").flag_list[this.flag] = 1;
            this.director.getComponent("director_duck").juge_go();
          }
        }, .7);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  end_123games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de342wLD3lAL41A2qOlZo9c", "end_123games");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      end_123games: function end_123games() {
        cc.director.loadScene("kidshome");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  exchang2_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e82ceRb08FBJ5DnTnkHDIVi", "exchang2_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        touch: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          event.stopPropagation();
          var world_pos = event.getLocation();
          var home_pos = this.touch.convertToNodeSpaceAR(world_pos);
          this.node.angle = 180 / Math.PI * Math.atan2(home_pos.y, home_pos.x) - 180;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  exchang3_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e796C2Dq1C97mryFSEFZIP", "exchang3_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        touch: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          event.stopPropagation();
          var world_pos = event.getLocation();
          var home_pos = this.touch.convertToNodeSpaceAR(world_pos);
          this.node.angle = 180 / Math.PI * Math.atan2(home_pos.y, home_pos.x) - 90;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  exchang4_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3905x0LRVNeKjXJelyvtSR", "exchang4_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        touch: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          event.stopPropagation();
          var world_pos = event.getLocation();
          var home_pos = this.touch.convertToNodeSpaceAR(world_pos);
          this.node.angle = 180 / Math.PI * Math.atan2(home_pos.y, home_pos.x) + 90;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  exchang_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fcc8PTO29FFqYiU6g3rv8u", "exchang_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        touch: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          var world_pos = event.getLocation();
          var home_pos = this.touch.convertToNodeSpaceAR(world_pos);
          this.node.angle = 180 / Math.PI * Math.atan2(home_pos.y, home_pos.x) - 270;
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  eye_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94eceBp4jdI6o9FhE/5Cbz9", "eye_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        eye: cc.Sprite,
        eye_list: [ cc.SpriteFrame ],
        random_time: 0
      },
      onLoad: function onLoad() {
        this.eye.spriteFrame = this.eye_list[0];
        this.random_time = Math.floor(5 * Math.random() + 1);
        cc.log(this.random_time);
        this.schedule(function() {
          var flag = Math.floor(3 * Math.random() + 1);
          cc.log(flag);
          if (3 == flag) return;
          this.exchange_eyeShow();
        }, this.random_time);
      },
      start: function start() {},
      exchange_eyeShow: function exchange_eyeShow() {
        this.eye.spriteFrame = this.eye_list[1];
        this.scheduleOnce(function() {
          this.eye.spriteFrame = this.eye_list[0];
        }, .1);
      }
    });
    cc._RF.pop();
  }, {} ],
  eye_ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8ceczvjoFM5aY2tA6XdBti", "eye_ball");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        eye: cc.Sprite,
        eye_list: [ cc.SpriteFrame ],
        random_time: 0
      },
      onLoad: function onLoad() {
        this.eye.spriteFrame = this.eye_list[0];
        this.random_time = Math.floor(4 * Math.random() + 2);
        cc.log(this.random_time);
        this.schedule(function() {
          var flag = Math.floor(3 * Math.random() + 1);
          cc.log(flag);
          if (3 == flag) return;
          this.exchange_eyeShow();
        }, this.random_time);
      },
      start: function start() {},
      exchange_eyeShow: function exchange_eyeShow() {
        this.eye.spriteFrame = this.eye_list[1];
        this.scheduleOnce(function() {
          this.eye.spriteFrame = this.eye_list[2];
        }, .1);
        this.scheduleOnce(function() {
          this.eye.spriteFrame = this.eye_list[1];
        }, .1);
        this.scheduleOnce(function() {
          this.eye.spriteFrame = this.eye_list[0];
        }, .1);
      }
    });
    cc._RF.pop();
  }, {} ],
  eyes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "852dbxEb0VEmY8d7yJtHWiV", "eyes");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.game.setFrameRate(60);
        this.speed = 1.7;
        this.viscosity = 1.7;
        this.mv = false;
        this.xvelocity = 0;
        this.yvelocity = 0;
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, function(e) {
          this.mv = true;
          var local = e.currentTarget.convertToNodeSpaceAR(e.getLocation());
          this.touchx = local.x;
          this.touchy = local.y;
        }.bind(this));
      },
      update: function update(dt) {
        if (true == this.mv) {
          var difference = this.touchx - this.node.x;
          this.xvelocity = (this.xvelocity + difference / this.speed) / this.viscosity;
          this.node.x = this.node.x + this.xvelocity;
          var difference2 = this.touchy - this.node.y;
          this.yvelocity = (this.yvelocity + difference2 / this.speed) / this.viscosity;
          this.node.y = this.node.y + this.yvelocity;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  fish_blocks_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "430fc1Fk/JHZrVjmpHnromM", "fish_blocks_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        fish1: cc.Sprite,
        fish2: cc.Sprite,
        Spr1: [ cc.SpriteFrame ],
        Spr2: [ cc.SpriteFrame ],
        num1: 0,
        num2: 0
      },
      start: function start() {},
      fish1Bnt: function fish1Bnt() {
        this.num1 += 1;
        this.num1 >= 6 && (this.num1 = 0);
        this.fish1.spriteFrame = this.Spr1[this.num1];
      },
      fish2Bnt: function fish2Bnt() {
        this.num2 += 1;
        this.num2 >= 6 && (this.num2 = 0);
        0 == this.num2 ? this.fish2.node.y = 3.3 : 1 == this.num2 ? this.fish2.node.y = 7.2 : 2 == this.num2 ? this.fish2.node.y = 22.4 : 3 == this.num2 ? this.fish2.node.y = 10 : 4 == this.num2 ? this.fish2.node.y = 3.2 : 5 == this.num2 && (this.fish2.node.y = 9.3);
        this.fish2.spriteFrame = this.Spr2[this.num2];
      }
    });
    cc._RF.pop();
  }, {} ],
  fish_games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5d83ojSjxAR4tVfo9Iyrb7", "fish_games");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music: cc.AudioSource
      },
      onLoad: function onLoad() {},
      onCollisionEnter: function onCollisionEnter(other, self) {
        if ("911" == other.node.group) {
          this.music.play();
          other.node.getComponent("NewScript_fish").speed += 20;
          cc.log(other.node.getComponent("NewScript_fish").speed);
          var random = Math.floor(801 * Math.random());
          other.node.x = -500 - random;
          this.node.stopAllActions();
          var actionBy = cc.moveBy(.4, 100, -200);
          var action1 = cc.rotateTo(.01, -40);
          var seq = cc.sequence(cc.rotateBy(.5, -330), cc.spawn(actionBy, cc.rotateTo(.4, 40)), cc.rotateTo(.01, -40));
          this.node.runAction(seq);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  fishing_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c882K/xdBNmJZo1Sv4TGca", "fishing_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        fish_controler: cc.Node,
        fish_wire: cc.Node,
        fishhook: cc.Node,
        fish: cc.Node,
        fishSpr: [ cc.SpriteFrame ],
        is_fishing: false,
        is_down: true
      },
      onLoad: function onLoad() {
        this.fish.active = false;
      },
      start: function start() {},
      BeginFish: function BeginFish() {
        if (this.is_down) {
          this.fish_wire.runAction(cc.scaleTo(1, 1, 20));
          this.fishhook.runAction(cc.moveTo(1, -17, -261));
          this.fish_controler.runAction(cc.rotateBy(1, 720));
        } else {
          this.isFish();
          this.fish_wire.runAction(cc.scaleTo(2, 1, 1));
          this.fishhook.runAction(cc.moveTo(2, -17, 118));
          this.fish_controler.runAction(cc.rotateBy(2, -720));
        }
        this.is_down = !this.is_down;
      },
      isFish: function isFish() {
        var num = Math.floor(3 * Math.random());
        console.log(num);
        if (1 != num) {
          var sprnum = Math.floor(Math.random() * this.fishSpr.length);
          this.fish.active = true;
          this.fish.getComponent(cc.Sprite).spriteFrame = this.fishSpr[sprnum];
          0 == sprnum ? this.fish.x = -4.4 : 1 == sprnum || 3 == sprnum || 9 == sprnum ? this.fish.x = 0 : 2 == sprnum ? this.fish.x = -15.4 : 4 == sprnum || 8 == sprnum ? this.fish.x = 10 : 5 == sprnum ? this.fish.x = -10.3 : 6 == sprnum ? this.fish.x = 35.4 : 7 == sprnum && (this.fish.x = -12.9);
        } else this.fish.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  flower_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c42eBDqs5OQYKP7LphjYGs", "flower_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        audio: {
          default: null,
          type: cc.AudioClip
        },
        slider: cc.Slider,
        flower: cc.Node,
        max_rotate_time: 0,
        max_v: 0,
        now_v: 0
      },
      onLoad: function onLoad() {
        this.current = cc.audioEngine.play(this.audio, true, 0);
      },
      set_volume: function set_volume() {
        cc.audioEngine.setVolume(this.current, this.slider.progress);
      },
      set_v: function set_v() {
        var v = this.max_v * this.slider.progress;
        if (Math.abs(this.now_v - v) < .1) return;
        var action = cc.speed(cc.repeatForever(cc.rotateBy(1, 180)), v);
        this.flower.runAction(action);
        this.now_v = v;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ground_sound_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1b68E21XhO2apgCxU1Pb80", "ground_sound_1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music_ground_sound: {
          type: cc.AudioClip,
          default: null
        }
      },
      onLoad: function onLoad() {
        cc.audioEngine.play(this.music_ground_sound, false, .2);
      }
    });
    cc._RF.pop();
  }, {} ],
  ground_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e074NHXnBE2IqRU0RotZah", "ground_sound");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bug_Games = function(_super) {
      __extends(Bug_Games, _super);
      function Bug_Games() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundInterval = 5;
        _this.sounds = [];
        return _this;
      }
      Bug_Games.prototype.onEnable = function() {
        var _this = this;
        this.schedule(function(_) {
          var sound = _this.sounds[Math.floor(Math.random() * _this.sounds.length)];
          cc.audioEngine.play(sound, false, 1);
        }, this.soundInterval);
      };
      __decorate([ property({
        tooltip: "\u9e1f\u53eb\u58f0\u95f4\u9694\uff08\u79d2s\uff09"
      }) ], Bug_Games.prototype, "soundInterval", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u591a\u79cd\u9e1f\u53eb\u58f0"
      }) ], Bug_Games.prototype, "sounds", void 0);
      Bug_Games = __decorate([ ccclass ], Bug_Games);
      return Bug_Games;
    }(cc.Component);
    exports.default = Bug_Games;
    cc._RF.pop();
  }, {} ],
  ground_wav_red1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36be3GrVGxKIIQgd/gJf5Kd", "ground_wav_red1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music_ground_sound: {
          type: cc.AudioClip,
          default: null
        },
        anims: {
          type: cc.Animation,
          default: []
        },
        playaudio: {
          type: cc.AudioClip,
          default: null
        },
        index: 0
      },
      onLoad: function onLoad() {
        cc.audioEngine.play(this.music_ground_sound, false, .6);
      },
      onEnable: function onEnable() {
        var _this = this;
        var anim = this.anims[this.index];
        anim && anim.play();
        this.schedule(function(_) {
          _this.index++;
          _this.index >= _this.anims.length && (_this.index = 0);
          var anim = _this.anims[_this.index];
          anim && anim.play();
        }, 2);
      },
      onClickStart: function onClickStart() {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(this.playaudio, false, .3);
        cc.director.loadScene("kidshome");
      }
    });
    cc._RF.pop();
  }, {} ],
  ground_wav_red: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6dc23K2t31OP6L3Qsfu9mSI", "ground_wav_red");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bug_Games = function(_super) {
      __extends(Bug_Games, _super);
      function Bug_Games() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.soundInterval = 5;
        _this.sounds = [];
        return _this;
      }
      Bug_Games.prototype.onEnable = function() {
        var _this = this;
        this.schedule(function(_) {
          var sound = _this.sounds[Math.floor(Math.random() * _this.sounds.length)];
          cc.audioEngine.play(sound, false, 1);
        }, this.soundInterval);
      };
      __decorate([ property({
        tooltip: "\u9e1f\u53eb\u58f0\u95f4\u9694\uff08\u79d2s\uff09"
      }) ], Bug_Games.prototype, "soundInterval", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u591a\u79cd\u9e1f\u53eb\u58f0"
      }) ], Bug_Games.prototype, "sounds", void 0);
      Bug_Games = __decorate([ ccclass ], Bug_Games);
      return Bug_Games;
    }(cc.Component);
    exports.default = Bug_Games;
    cc._RF.pop();
  }, {} ],
  hand_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f911cGPefJKYJRtp7w2bseM", "hand_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        touch: cc.Node,
        handPrefab: cc.Prefab,
        handSpr: [ cc.SpriteFrame ],
        timer: 0,
        isHand: null
      },
      start: function start() {
        this.touch.on(cc.Node.EventType.TOUCH_START, function(event) {
          var pos = event.getLocation();
          pos = this.touch.convertToNodeSpaceAR(pos);
          this.creatHand(pos);
        }.bind(this));
        this.touch.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var pos = event.getLocation();
          pos = this.touch.convertToNodeSpaceAR(pos);
          this.isHand = pos;
        }.bind(this));
        this.touch.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          this.isHand = null;
        }.bind(this));
        this.touch.on(cc.Node.EventType.TOUCH_END, function() {
          this.isHand = null;
        }.bind(this));
      },
      update: function update(dt) {
        this.timer += dt;
        if (this.timer > .1) {
          null != this.isHand && this.creatHand(this.isHand);
          this.timer = 0;
        }
      },
      creatHand: function creatHand(pos) {
        var h = cc.instantiate(this.handPrefab);
        var sprnum = Math.floor(6 * Math.random());
        h.getComponent(cc.Sprite).spriteFrame = this.handSpr[sprnum];
        this.touch.addChild(h);
        h.setPosition(pos);
        h.scale = 1.5;
        var num = Math.floor(2 * Math.random());
        if (0 == num) {
          var rotationNum = 360 * Math.random();
          h.runAction(cc.rotateBy(.2, rotationNum));
        } else {
          var _rotationNum = 360 * Math.random();
          h.runAction(cc.rotateBy(.2, -_rotationNum));
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  "hero 4-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28bd5SH+4JCwrSqnRX15T8P", "hero 4-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 0,
        max_x: 0,
        speed_direction: 0,
        other_node: cc.Node,
        left_animation: cc.Animation,
        right_animation: cc.Animation
      },
      onLoad: function onLoad() {},
      start: function start() {},
      play_1: function play_1() {
        this.scheduleOnce(function() {
          this.left_animation.play();
        }, .75);
      },
      play_2: function play_2() {
        this.scheduleOnce(function() {
          this.left_animation.play();
          this.scheduleOnce(function() {
            this.right_animation.play();
          }, .25);
        }, .75);
      },
      play_3: function play_3() {
        this.scheduleOnce(function() {
          this.left_animation.play();
          this.scheduleOnce(function() {
            this.right_animation.play();
            this.scheduleOnce(function() {
              this.left_animation.play();
            }, .4);
          }, .4);
        }, .75);
      },
      play_4: function play_4() {
        this.scheduleOnce(function() {
          this.left_animation.play();
          this.scheduleOnce(function() {
            this.right_animation.play();
            this.scheduleOnce(function() {
              this.left_animation.play();
              this.scheduleOnce(function() {
                this.right_animation.play();
              }, .4);
            }, .4);
          }, .4);
        }, .75);
      },
      update: function update(dt) {
        1 == this.speed_direction ? this.node.x >= 2 * this.other_node.x ? this.node.x = 2 * this.other_node.x : this.node.x += this.speed * this.speed_direction * dt : -1 == this.speed_direction && (this.node.x <= 2 * this.other_node.x ? this.node.x = 2 * this.other_node.x : this.node.x += this.speed * this.speed_direction * dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  home123_open: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afecc3jsUpHfqptUlw55rOg", "home123_open");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      back_home123: function back_home123() {
        cc.director.loadScene("Games_123");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  hotupdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae01dCWsPZB0J35NbuzxIKJ", "hotupdate");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var hotupdate = function(_super) {
      __extends(hotupdate, _super);
      function hotupdate() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.manifestUrl = "project.manifest";
        _this.node_update = null;
        _this.lbl_process = null;
        _this.lbl_tips = null;
        _this.img_process = null;
        _this._updating = false;
        _this._canRetry = false;
        _this._storagePath = "";
        return _this;
      }
      hotupdate.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            cc.sys.isNative && this.checkUpdate();
            return [ 2 ];
          });
        });
      };
      hotupdate.prototype.checkCb = function(event) {
        var _this = this;
        cc.log("Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          this.node_update.active = true;
          this.scheduleOnce(function(_) {
            return _this.hotUpdate();
          }, .3);
          break;

         default:
          return;
        }
        this._am.setEventCallback(null);
        this._checkListener = null;
        this._updating = false;
      };
      hotupdate.prototype.updateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          this.img_process.fillRange = event.getPercentByFile();
          this.lbl_process.string = Math.round(100 * this.img_process.fillRange) + "%";
          var msg = event.getMessage();
          msg;
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          this.lbl_tips.string = "\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002" + event.getMessage();
          this._updating = false;
          this._canRetry = true;
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          this.lbl_tips.string = "\u8d44\u6e90\u66f4\u65b0\u9519\u8bef\uff1a" + event.getAssetId() + ", " + event.getMessage();
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          this.lbl_tips.string = event.getMessage();
        }
        if (failed) {
          this._am.setEventCallback(null);
          this._updateListener = null;
          this._updating = false;
        }
        if (needRestart) {
          this._am.setEventCallback(null);
          this._updateListener = null;
          var searchPaths_1 = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          console.log("manifest", JSON.stringify(searchPaths_1), JSON.stringify(newPaths));
          newPaths.forEach(function(v) {
            var i = searchPaths_1.findIndex(function(val) {
              return val == v;
            });
            i >= 0 && searchPaths_1.splice(i, 1);
            Array.prototype.unshift.call(searchPaths_1, v);
          });
          cc.sys.localStorage.setItem("HotUpdateSearchPaths" + this.get_version(), JSON.stringify(searchPaths_1));
          jsb.fileUtils.setSearchPaths(searchPaths_1);
          cc.audioEngine.stopAll();
          cc.game.restart();
        }
      };
      hotupdate.prototype.retry = function() {
        if (!this._updating && this._canRetry) {
          this._canRetry = false;
          this.lbl_tips.string = "\u91cd\u65b0\u4e0b\u8f7d\u5931\u8d25\u7684\u8d44\u6e90...";
          this._am.downloadFailedAssets();
        }
      };
      hotupdate.prototype.checkUpdate = function() {
        if (this._updating) return;
        this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl);
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) return;
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
      };
      hotupdate.prototype.hotUpdate = function() {
        if (this._am && !this._updating) {
          this._am.setEventCallback(this.updateCb.bind(this));
          this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl);
          this._failCount = 0;
          this._am.update();
          this._updating = true;
        }
      };
      hotupdate.prototype.onLoad = function() {
        if (!cc.sys.isNative) return;
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        cc.log("Storage path for remote asset : " + this._storagePath);
        this.versionCompareHandle = function(versionA, versionB) {
          cc.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) continue;
            return a - b;
          }
          return vB.length > vA.length ? -1 : 0;
        };
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
      };
      hotupdate.prototype.onDestroy = function() {
        if (this._updateListener) {
          this._am.setEventCallback(null);
          this._updateListener = null;
        }
      };
      hotupdate.prototype.get_version = function() {
        if (cc.sys.isNative) {
          if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod("AppController", "get_version");
          if (cc.sys.os == cc.sys.OS_ANDROID) return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "get_version", "()Ljava/lang/String;");
        }
        return "";
      };
      __decorate([ property({
        type: cc.Node
      }) ], hotupdate.prototype, "node_update", void 0);
      __decorate([ property({
        type: cc.Label
      }) ], hotupdate.prototype, "lbl_process", void 0);
      __decorate([ property({
        type: cc.Label
      }) ], hotupdate.prototype, "lbl_tips", void 0);
      __decorate([ property({
        type: cc.Sprite
      }) ], hotupdate.prototype, "img_process", void 0);
      hotupdate = __decorate([ ccclass ], hotupdate);
      return hotupdate;
    }(cc.Component);
    exports.default = hotupdate;
    cc._RF.pop();
  }, {} ],
  hualun_SpinGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67126EwYNlFtpEGd8kwALeA", "hualun_SpinGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        min_y: 0,
        max_y: 0,
        director: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          if (this.node.y >= this.max_y) this.node.y = this.max_y - 1; else if (this.node.y <= this.min_y) this.node.y = this.min_y + 1; else {
            this.node.y += event.getDelta().y;
            this.director.getComponent("director_SpinGames").rotate_speed = 1 + 1 * Math.abs(this.node.y - -100) / 200;
          }
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  insects_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "979caMBCYRLZqud0A6zrUbQ", "insects_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        showAnim: cc.Sprite,
        spr: [ cc.SpriteFrame ],
        animPrefab: [ cc.Prefab ],
        AnimType: 0
      },
      start: function start() {
        this.RandomAnim();
      },
      RandomAnim: function RandomAnim() {
        this.AnimType = Math.floor(8 * Math.random());
        this.showAnim.spriteFrame = this.spr[this.AnimType];
        2 == this.AnimType || 4 == this.AnimType ? this.showAnim.node.scale = .5 : this.showAnim.node.scale = 1;
        this.showAnim.node.active = true;
      },
      bnt: function bnt(event, num) {
        if (this.AnimType == parseInt(num)) {
          this.showAnim.node.active = false;
          var a = cc.instantiate(this.animPrefab[this.AnimType]);
          if (2 == this.AnimType || 4 == this.AnimType) {
            a.scale = .5;
            a.runAction(cc.scaleTo(.2, 1));
          }
          this.node.addChild(a);
          a.setPosition(0, 105);
          setTimeout(function() {
            this.RandomAnim();
          }.bind(this), 1e3);
          setTimeout(function() {
            if (a) {
              console.log("\u6d88\u9664");
              a.destroy();
            }
          }.bind(this), 2e3);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  kaliedascopeFang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "219aaX2OYJH07RnKRP3wAVm", "kaliedascopeFang");
    "use strict";
    var kaliedascopeOne = require("kaliedascopeOne");
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0,
        One: [ kaliedascopeOne ]
      },
      start: function start() {},
      update: function update(dt) {
        0 == this.id || 2 == this.id ? this.node.angle += -cc.ZL.speed * dt : this.node.angle -= -cc.ZL.speed * dt;
      },
      ChangeColor: function ChangeColor(color) {
        for (var i = 0; i < 4; i++) this.One[i].ChangeColor(color);
      },
      ChangeScale: function ChangeScale(num) {
        for (var i = 0; i < 4; i++) this.One[i].ChangeScale(num);
      },
      changPosition: function changPosition(num) {
        for (var i = 0; i < 4; i++) this.One[i].changPosition(num);
      },
      ChangeSpr: function ChangeSpr(spr) {
        for (var i = 0; i < 4; i++) this.One[i].ChangeSpr(spr);
      }
    });
    cc._RF.pop();
  }, {
    kaliedascopeOne: "kaliedascopeOne"
  } ],
  kaliedascopeMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2f20NpWbZHv4JKkJjKzoOg", "kaliedascopeMgr");
    "use strict";
    var kaliedascopeFang = require("kaliedascopeFang");
    cc.Class({
      extends: cc.Component,
      properties: {
        font: [ kaliedascopeFang ],
        spr: [ cc.SpriteFrame ],
        speed: 180
      },
      onLoad: function onLoad() {
        cc.ZL = this;
      },
      start: function start() {},
      update: function update(dt) {},
      ChangeColor: function ChangeColor(event, num) {
        var color = null;
        switch (num) {
         case "0":
          color = cc.color(255, 255, 255, 255);
          break;

         case "1":
          color = cc.color(255, 0, 0, 255);
          break;

         case "2":
          color = cc.color(235, 0, 255, 255);
          break;

         case "3":
          color = cc.color(0, 0, 255, 255);
          break;

         case "4":
          color = cc.color(255, 255, 0, 255);
        }
        for (var i = 0; i < 4; i++) this.font[i].ChangeColor(color);
      },
      ChangeScale: function ChangeScale(event, num) {
        for (var i = 0; i < 4; i++) this.font[i].ChangeScale(parseFloat(1.5 * event._N$progress));
      },
      changPosition: function changPosition(event, num) {
        for (var i = 0; i < 4; i++) this.font[i].changPosition(50 * event._N$progress);
      },
      ChangeSpr: function ChangeSpr(event, num) {
        for (var i = 0; i < 4; i++) this.font[i].ChangeSpr(this.spr[parseInt(num)]);
      }
    });
    cc._RF.pop();
  }, {
    kaliedascopeFang: "kaliedascopeFang"
  } ],
  kaliedascopeOne: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50c22Jj6e5MUoiL0+0CeIMO", "kaliedascopeOne");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0
      },
      start: function start() {},
      ChangeColor: function ChangeColor(color) {
        this.node.color = color;
      },
      ChangeScale: function ChangeScale(num) {
        this.node.scale = num;
      },
      changPosition: function changPosition(num) {
        0 == this.id ? this.node.x = num : 1 == this.id ? this.node.x = -num : 2 == this.id ? this.node.y = num : this.node.y = -num;
      },
      ChangeSpr: function ChangeSpr(spr) {
        this.node.getComponent(cc.Sprite).spriteFrame = spr;
      }
    });
    cc._RF.pop();
  }, {} ],
  kidshome_backhome: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1710eNog7BHjJlym/eh/HmO", "kidshome_backhome");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music: {
          type: cc.AudioClip,
          default: null
        }
      },
      home_back: function home_back() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("kidshome");
        cc.audioEngine.stopAllEffects();
      },
      home_back1: function home_back1() {
        cc.director.loadScene("kidshome");
      },
      home_back_puzzlegames: function home_back_puzzlegames() {
        cc.director.loadScene("puzzle_games");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  kidshome_child: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1c589nYfhCdr33cvKwWvkn", "kidshome_child");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        music_Games_123: {
          type: cc.AudioClip,
          default: null
        },
        music_Star_Games: {
          type: cc.AudioClip,
          default: null
        },
        music_child_Wooden: {
          type: cc.AudioClip,
          default: null
        },
        music_paint_game: {
          type: cc.AudioClip,
          default: null
        },
        music_Box_Games: {
          type: cc.AudioClip,
          default: null
        },
        music_CompareGames: {
          type: cc.AudioClip,
          default: null
        },
        music_JigsawGames: {
          type: cc.AudioClip,
          default: null
        },
        music_ColoringGames: {
          type: cc.AudioClip,
          default: null
        },
        music_SpinGames: {
          type: cc.AudioClip,
          default: null
        },
        music_Bug_Games: {
          type: cc.AudioClip,
          default: null
        },
        music_Sound_Games: {
          type: cc.AudioClip,
          default: null
        },
        music_ShadowGames: {
          type: cc.AudioClip,
          default: null
        },
        music_LittleGames_three: {
          type: cc.AudioClip,
          default: null
        },
        music_Song_Games: {
          type: cc.AudioClip,
          default: null
        },
        music_ShapesGames: {
          type: cc.AudioClip,
          default: null
        },
        music_PianoGames: {
          type: cc.AudioClip,
          default: null
        },
        music_Christmas: {
          type: cc.AudioClip,
          default: null
        },
        music_yezi: {
          type: cc.AudioClip,
          default: null
        },
        xieyi: {
          type: cc.Node,
          default: null
        },
        kefuPrefab: {
          type: cc.Prefab,
          default: null
        }
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = false;
        var isFirst = cc.sys.localStorage.getItem("isFirst");
        isFirst || (this.xieyi.active = true);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.back:
          cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showExitUI", "()V");
        }
      },
      kidshome_child_Games_123: function kidshome_child_Games_123() {
        cc.audioEngine.play(this.music_Games_123, false, 1);
        cc.director.loadScene("Games_123");
      },
      kidshome_child_ShapesGames: function kidshome_child_ShapesGames() {
        cc.audioEngine.play(this.music_ShapesGames, false, 1);
        cc.director.loadScene("ShapesGames");
      },
      kidshome_child_JigsawGames: function kidshome_child_JigsawGames() {
        cc.audioEngine.play(this.music_JigsawGames, false, 1);
        cc.director.loadScene("JigsawGames");
      },
      kidshome_child_Song_Games: function kidshome_child_Song_Games() {
        cc.audioEngine.play(this.music_Song_Games, false, 1);
        cc.director.loadScene("Song _Games");
      },
      kidshome_child_PianoGames: function kidshome_child_PianoGames() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("PianoGames");
      },
      kidshome_child_Wooden: function kidshome_child_Wooden() {
        cc.audioEngine.play(this.music_child_Wooden, false, 1);
        cc.director.loadScene("Wooden");
      },
      kidshome_child_Bottles_Games: function kidshome_child_Bottles_Games() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("Bottles_Games");
      },
      kidshome_child_CompareGames: function kidshome_child_CompareGames() {
        cc.audioEngine.play(this.music_CompareGames, false, 1);
        cc.director.loadScene("CompareGames");
      },
      kidshome_child_paint_game: function kidshome_child_paint_game() {
        cc.audioEngine.play(this.music_paint_game, false, 1);
        cc.director.loadScene("paint_game");
      },
      kidshome_child_ColoringGames: function kidshome_child_ColoringGames() {
        cc.audioEngine.play(this.music_ColoringGames, false, 1);
        cc.director.loadScene("ColoringGames");
      },
      kidshome_child_LittleGames_three: function kidshome_child_LittleGames_three() {
        cc.audioEngine.play(this.music_LittleGames_three, false, 1);
        cc.director.loadScene("LittleGames_three");
      },
      kidshome_child_SpinGames: function kidshome_child_SpinGames() {
        cc.audioEngine.play(this.music_SpinGames, false, 1);
        cc.director.loadScene("SpinGames");
      },
      kidshome_child_Box_Games: function kidshome_child_Box_Games() {
        cc.audioEngine.play(this.music_Box_Games, false, 1);
        cc.director.loadScene("Box_Games");
      },
      kidshome_child_ShadowGames: function kidshome_child_ShadowGames() {
        cc.audioEngine.play(this.music_ShadowGames, false, 1);
        cc.director.loadScene("ShadowGames");
      },
      kidshome_child_Star_Games: function kidshome_child_Star_Games() {
        cc.audioEngine.play(this.music_Star_Games, false, 1);
        cc.director.loadScene("Star_Games");
      },
      kidshome_child_Sound_Games: function kidshome_child_Sound_Games() {
        cc.audioEngine.play(this.music_Sound_Games, false, 1);
        cc.director.loadScene("Sound_Games");
      },
      kidshome_child_Bug_Games: function kidshome_child_Bug_Games() {
        cc.audioEngine.play(this.music_yezi, false, 1);
        cc.director.loadScene("Bug_Games");
      },
      kidshome_child_mushrooms: function kidshome_child_mushrooms() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("mushrooms");
      },
      kidshome_child_recycling: function kidshome_child_recycling() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("recycling");
      },
      kidshome_child_rocket: function kidshome_child_rocket() {
        cc.audioEngine.play(this.music, false, 1);
        cc.director.loadScene("rocket");
      },
      kidshome_Piano_Games: function kidshome_Piano_Games() {
        cc.audioEngine.play(this.music_PianoGames, false, 1);
        cc.director.loadScene("PianoGames");
      },
      kidshome_Christmas_Games: function kidshome_Christmas_Games() {
        cc.audioEngine.play(this.music_Christmas, false, 1);
        cc.director.loadScene("Christmas_Games");
      },
      kidshome_puzzle_Games: function kidshome_puzzle_Games() {
        cc.audioEngine.play(this.music_Bug_Games, false, 1);
        cc.director.loadScene("puzzle_games");
      },
      onClickXieYi: function onClickXieYi() {
        this.xieyi.active = true;
      },
      onClickKefu: function onClickKefu() {
        if (this.node.getChildByName("kefu_info")) return;
        var node = cc.instantiate(this.kefuPrefab);
        node.parent = this.node;
        node.setPosition(0, 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  main_sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aeea2zbXBFma2OmZfmo4WL", "main_sound");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.man = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        for (var i = 0; i < 1; i++) this.addMan(110 * (i - 3), 120, 0);
        for (var i = 0; i < 7; i++) this.addMan(90 * (i - 3), 60, 1 + i);
        for (var i = 0; i < 7; i++) this.addMan(100 * (i - 3), -50, 8 + i);
        for (var i = 0; i < 7; i++) this.addMan(110 * (i - 3), -180, 15 + i);
      };
      NewClass.prototype.addMan = function(x, y, soundIdx) {
        var man = cc.instantiate(this.man);
        man.x = x;
        man.y = y;
        man.soundIdx = soundIdx;
        this.node.addChild(man);
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "man", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  "man 1-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe6da3xqOxDtpPui4g0v2qD", "man 1-1");
    "use strict";
    var SpriteEx = cc.Class({
      extends: cc.Sprite,
      properties: {
        spriteFrames: [ cc.SpriteFrame ],
        _index: 0,
        flag: 0,
        index: {
          type: cc.Integer,
          set: function set(value) {
            if (value < 0) return;
            this._index = value % this.spriteFrames.length;
            this.spriteFrame = this.spriteFrames[this._index];
          },
          get: function get() {
            return this._index;
          }
        }
      },
      next: function next() {
        if (0 == this.flag) {
          this.index++;
          this.flag = 1;
        } else {
          this.index = this.index;
          this.flag = 0;
        }
      }
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "spriteFrame", "visible", false);
    cc.Class.Attr.setClassAttr(SpriteEx, "_atlas", "visible", false);
    cc.Class.Attr.setClassAttr(SpriteEx, "fillType", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillCenter", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillStart", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillEnd", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "fillRange", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "srcBlendFactor", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc.Class.Attr.setClassAttr(SpriteEx, "dstBlendFactor", "visible", function() {
      return this._type === cc.Sprite.Type.FILLED;
    });
    cc._RF.pop();
  }, {} ],
  man_ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f462aFfSxZAh5C52wRtiaTE", "man_ball");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        player: {
          default: null,
          type: cc.Node
        },
        balloon0: cc.Prefab,
        balloon1: cc.Prefab,
        balloon2: cc.Prefab,
        balloon3: cc.Prefab,
        balloon4: cc.Prefab,
        balloon5: cc.Prefab,
        balloon6: cc.Prefab,
        initCount: 0,
        f1: cc.Node,
        random_times: 0,
        AudioSource: [ cc.AudioSource ],
        shoel: cc.Node,
        shoer: cc.Node,
        cloth: [ cc.Node ]
      },
      onLoad: function onLoad() {
        this.init_1();
        this.init_2();
        this.init_3();
        this.init_4();
        this.init_5();
        this.init_6();
        this.init_7();
        this.random_times = Math.floor(2 * Math.random() + 14);
        this.cloth[3].active = false;
        var moveUp = cc.sequence(cc.delayTime(.1), cc.moveTo(1.5, 0, 0).easing(cc.easeInOut(3)));
        this.player.runAction(moveUp);
      },
      start: function start() {
        for (var i = 0; i < 2; i++) {
          this.make_balloon0();
          this.make_balloon1();
          this.make_balloon2();
          this.make_balloon3();
          this.make_balloon4();
          this.make_balloon5();
          this.make_balloon6();
        }
      },
      init_1: function init_1() {
        this.balloon0Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon0Pool.put(cc.instantiate(this.balloon0));
      },
      init_2: function init_2() {
        this.balloon1Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon1Pool.put(cc.instantiate(this.balloon1));
      },
      init_3: function init_3() {
        this.balloon2Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon2Pool.put(cc.instantiate(this.balloon2));
      },
      init_4: function init_4() {
        this.balloon3Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon3Pool.put(cc.instantiate(this.balloon3));
      },
      init_5: function init_5() {
        this.balloon4Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon4Pool.put(cc.instantiate(this.balloon4));
      },
      init_6: function init_6() {
        this.balloon5Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon5Pool.put(cc.instantiate(this.balloon5));
      },
      init_7: function init_7() {
        this.balloon6Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.balloon6Pool.put(cc.instantiate(this.balloon6));
      },
      make_balloon0: function make_balloon0() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon0Pool.size() > 0) enemy = this.balloon0Pool.get(); else {
          this.balloon0Pool.put(cc.instantiate(this.balloon0));
          enemy = this.balloon0Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon1: function make_balloon1() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon1Pool.size() > 0) enemy = this.balloon1Pool.get(); else {
          this.balloon1Pool.put(cc.instantiate(this.balloon1));
          enemy = this.balloon1Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon2: function make_balloon2() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon2Pool.size() > 0) enemy = this.balloon2Pool.get(); else {
          this.balloon2Pool.put(cc.instantiate(this.balloon2));
          enemy = this.balloon2Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon3: function make_balloon3() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon3Pool.size() > 0) enemy = this.balloon3Pool.get(); else {
          this.balloon3Pool.put(cc.instantiate(this.balloon3));
          enemy = this.balloon3Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon4: function make_balloon4() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon4Pool.size() > 0) enemy = this.balloon4Pool.get(); else {
          this.balloon4Pool.put(cc.instantiate(this.balloon4));
          enemy = this.balloon4Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon5: function make_balloon5() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon5Pool.size() > 0) enemy = this.balloon5Pool.get(); else {
          this.balloon5Pool.put(cc.instantiate(this.balloon5));
          enemy = this.balloon5Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      make_balloon6: function make_balloon6() {
        var random = Math.floor(4 * Math.random() + 7);
        var enemy = null;
        if (this.balloon6Pool.size() > 0) enemy = this.balloon6Pool.get(); else {
          this.balloon6Pool.put(cc.instantiate(this.balloon6));
          enemy = this.balloon6Pool.get();
        }
        enemy.parent = this.f1;
        enemy.scale = random / 10;
        enemy.x = -19;
        enemy.y = 50;
        var du = Math.floor(41 * Math.random() - 20);
        enemy.angle = -du;
      },
      balloon0_killed: function balloon0_killed(enemy) {
        enemy.scale = 1;
        this.balloon0Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon1_killed: function balloon1_killed(enemy) {
        enemy.scale = 1;
        this.balloon1Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon2_killed: function balloon2_killed(enemy) {
        enemy.scale = 1;
        this.balloon2Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon3_killed: function balloon3_killed(enemy) {
        enemy.scale = 1;
        this.balloon3Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon4_killed: function balloon4_killed(enemy) {
        enemy.scale = 1;
        this.balloon4Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon5_killed: function balloon5_killed(enemy) {
        enemy.scale = 1;
        this.balloon5Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      balloon6_killed: function balloon6_killed(enemy) {
        enemy.scale = 1;
        this.balloon6Pool.put(enemy);
        this.AudioSource[0].play();
        var moveDown = cc.moveBy(1, 0, -17);
        this.player.runAction(moveDown);
      },
      update: function update(dt) {
        if (this.player.y <= -230) {
          this.shoel.angle = -1;
          this.shoer.angle = -1;
          this.cloth[0].active = false;
          this.cloth[1].active = false;
          this.cloth[2].active = false;
          this.cloth[3].active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  matching_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3746dhZhb5Mg62zPvaFzRGr", "matching_1");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layoutMatching = null;
        _this.layout = null;
        _this.item = null;
        _this.spriteFrames = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.director.getCollisionManager().enabled = true;
        this.item.parent = null;
        for (var i = 0; i < this.spriteFrames.length; i++) {
          var node = cc.instantiate(this.item);
          node.parent = this.layoutMatching;
          node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[i];
          node.scale = 0;
          node.runAction(cc.sequence(cc.delayTime(.1 * i), cc.scaleTo(.2, 1, 1)));
          node.name = "box-" + i;
        }
        var children = this.layoutMatching.children;
        var heights = [ 0, 160, 240, 300, 400 ];
        var index = Math.floor(Math.random() * heights.length);
        for (var k = 0; k < children.length; k++) {
          index >= heights.length && (index = 0);
          var node = cc.instantiate(children[k]);
          node.parent = this.layout;
          node.position = cc.v2(Math.floor(20 * Math.random()), heights[index] - Math.floor(20 * Math.random()));
          node.getComponent("touchmove")._onEvent();
          node.scale = 0;
          node.runAction(cc.sequence(cc.delayTime(1 + .2 * k), cc.scaleTo(.6, 1, 1).easing(cc.easeOut(2))));
          index++;
        }
      };
      NewClass.prototype.onDestroy = function() {
        cc.director.getCollisionManager().enabled = false;
        this.item.destroy();
      };
      NewClass.prototype.onClickBack = function() {
        cc.director.loadScene("CompareGames");
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "layoutMatching", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "layout", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "item", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "spriteFrames", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  move_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6b98ShkmNHbJVmGcteKa5c", "move_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        initCount: 0,
        bee: cc.Prefab,
        ball1: cc.Prefab,
        ball2: cc.Prefab,
        ball3: cc.Prefab,
        ball4: cc.Prefab,
        ball5: cc.Prefab,
        max_left: 0,
        max_right: 0,
        music: cc.AudioSource,
        music1: cc.AudioSource,
        music2: cc.AudioSource,
        make_flag: 0,
        cal_num: 0,
        first_location: cc.Vec2
      },
      onLoad: function onLoad() {
        this.first_location.x = this.node.x;
        this.first_location.y = this.node.y;
        cc.director.getPhysicsManager().enabled = true;
        this.init_ball();
        this.init_ball1();
        this.init_ball2();
        this.init_ball3();
        this.init_ball4();
        this.init_ball5();
        this.schedule(function() {}, .1);
        this.node.on("touchmove", function(event) {
          this.make_flag = 1;
          this.node.x += event.getDelta().x;
          this.node.y += event.getDelta().y;
          this.node.x <= this.max_left ? this.node.x = this.max_left : this.node.x >= this.max_right && (this.node.x = this.max_right);
        }, this);
        this.node.on("touchend", function(event) {
          if (Math.abs(this.node.x - this.first_location.x) + Math.abs(this.node.y - this.first_location.y) <= 200) {
            this.make_flag = 0;
            this.node.x = this.first_location.x;
            this.node.y = this.first_location.y;
            this.node.stopAllActions();
          }
        }, this);
      },
      init_ball: function init_ball() {
        this.beePool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.beePool.put(cc.instantiate(this.bee));
      },
      init_ball1: function init_ball1() {
        this.ball1Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.ball1Pool.put(cc.instantiate(this.ball1));
      },
      init_ball2: function init_ball2() {
        this.ball2Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.ball2Pool.put(cc.instantiate(this.ball2));
      },
      init_ball3: function init_ball3() {
        this.ball3Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.ball3Pool.put(cc.instantiate(this.ball3));
      },
      init_ball4: function init_ball4() {
        this.ball4Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.ball4Pool.put(cc.instantiate(this.ball4));
      },
      init_ball5: function init_ball5() {
        this.ball5Pool = new cc.NodePool();
        for (var i = 0; i < this.initCount; ++i) this.ball5Pool.put(cc.instantiate(this.ball5));
      },
      make_ball: function make_ball(enemy_x, enemy_y) {
        var enemy = null;
        if (this.beePool.size() > 0) enemy = this.beePool.get(); else {
          this.beePool.put(cc.instantiate(this.bee));
          enemy = this.beePool.get();
        }
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      make_ball1: function make_ball1(enemy_x, enemy_y) {
        var enemy = null;
        if (this.ball1Pool.size() > 0) enemy = this.ball1Pool.get(); else {
          this.ball1Pool.put(cc.instantiate(this.ball1));
          enemy = this.ball1Pool.get();
        }
        var scale_num = Math.floor(5 * Math.random() + 8);
        enemy.scale = scale_num / 10;
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      make_ball2: function make_ball2(enemy_x, enemy_y) {
        var enemy = null;
        if (this.ball2Pool.size() > 0) enemy = this.ball2Pool.get(); else {
          this.ball2Pool.put(cc.instantiate(this.ball2));
          enemy = this.ball2Pool.get();
        }
        var scale_num = Math.floor(5 * Math.random() + 8);
        enemy.scale = scale_num / 10;
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      make_ball3: function make_ball3(enemy_x, enemy_y) {
        var enemy = null;
        if (this.ball3Pool.size() > 0) enemy = this.ball3Pool.get(); else {
          this.ball3Pool.put(cc.instantiate(this.ball3));
          enemy = this.ball3Pool.get();
        }
        var scale_num = Math.floor(5 * Math.random() + 8);
        enemy.scale = scale_num / 10;
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      make_ball4: function make_ball4(enemy_x, enemy_y) {
        var enemy = null;
        if (this.ball4Pool.size() > 0) enemy = this.ball4Pool.get(); else {
          this.ball4Pool.put(cc.instantiate(this.ball4));
          enemy = this.ball4Pool.get();
        }
        var scale_num = Math.floor(5 * Math.random() + 8);
        enemy.scale = scale_num / 10;
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      make_ball5: function make_ball5(enemy_x, enemy_y) {
        var enemy = null;
        if (this.ball5Pool.size() > 0) enemy = this.ball5Pool.get(); else {
          this.ball5Pool.put(cc.instantiate(this.ball5));
          enemy = this.ball5Pool.get();
        }
        var scale_num = Math.floor(5 * Math.random() + 8);
        enemy.scale = scale_num / 10;
        enemy.parent = this.node;
        enemy.x = enemy_x;
        enemy.y = enemy_y;
      },
      start: function start() {},
      update: function update(dt) {
        var zhen = Math.floor(37 * Math.random() + 4);
        if (1 == this.make_flag) {
          this.cal_num++;
          if (this.cal_num >= zhen) {
            var random = Math.floor(7 * Math.random() - 0);
            if (0 == random) {
              this.make_ball(0, 170);
              this.music1.play();
            } else if (1 == random) {
              this.make_ball1(0, 170);
              this.music1.play();
            } else if (2 == random) {
              this.make_ball2(0, 170);
              this.music2.play();
            } else if (3 == random) {
              this.make_ball3(0, 170);
              this.music1.play();
            } else if (4 == random) {
              this.make_ball4(0, 170);
              this.music1.play();
            } else if (5 == random) {
              this.make_ball5(0, 170);
              this.music.play();
            }
            this.cal_num = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  move_Wooden: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dcb5A1HPlPhJA4VpmNx7dp", "move_Wooden");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        father: cc.Node,
        max_left: 0,
        max_right: 0
      },
      onLoad: function onLoad() {
        this.node.on("touchmove", function(event) {
          this.father.x += event.getDelta().x;
          this.father.x <= this.max_left ? this.father.x = this.max_left : this.father.x >= this.max_right && (this.father.x = this.max_right);
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  mushrooms_item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5be1GPa2NKqqC2aJjLz/Zq", "mushrooms_item");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var mushrooms_item = function(_super) {
      __extends(mushrooms_item, _super);
      function mushrooms_item() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spf = [];
        _this.index = -1;
        return _this;
      }
      mushrooms_item.prototype.onLoad = function() {
        this.swapSpriteFame();
      };
      mushrooms_item.prototype.swapSpriteFame = function() {
        var arr = [];
        for (var index = 0; index < this.spf.length; index++) index !== this.index && arr.push(index);
        arr.sort(function() {
          return Math.random() - .5;
        });
        this.index = arr[0];
        this.getComponent(cc.Sprite).spriteFrame = this.spf[this.index];
      };
      __decorate([ property([ cc.SpriteFrame ]) ], mushrooms_item.prototype, "spf", void 0);
      mushrooms_item = __decorate([ ccclass ], mushrooms_item);
      return mushrooms_item;
    }(cc.Component);
    exports.default = mushrooms_item;
    cc._RF.pop();
  }, {} ],
  mushrooms: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f3fca5kWFPcZt1IlnnyHMC", "mushrooms");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var mushrooms_item_1 = require("./mushrooms_item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var mushrooms = function(_super) {
      __extends(mushrooms, _super);
      function mushrooms() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.node_all_mushroom = null;
        _this.audioClip_show = [];
        return _this;
      }
      mushrooms.prototype.start = function() {
        this.resetGame();
        this.node_all_mushroom.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
      };
      mushrooms.prototype._touchStart = function(touchEvent) {
        var _this = this;
        var location = touchEvent.getLocation();
        [].concat(this.node_all_mushroom.children).reverse().some(function(c1) {
          var c = c1.children[0];
          var poly = c.getComponent(cc.PolygonCollider);
          if (poly && cc.Intersection.pointInPolygon(c.convertToNodeSpaceAR(location), poly.points)) {
            cc.audioEngine.playEffect(_this.audioClip_show[Math.floor(_this.audioClip_show.length * Math.random())], false);
            c.getComponent(mushrooms_item_1.default).swapSpriteFame();
            return true;
          }
        });
      };
      mushrooms.prototype.resetGame = function() {
        this.node_all_mushroom.children.forEach(function(c1) {
          var c = c1.children[0];
          c.getComponent(mushrooms_item_1.default).swapSpriteFame();
        });
      };
      __decorate([ property(cc.Node) ], mushrooms.prototype, "node_all_mushroom", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], mushrooms.prototype, "audioClip_show", void 0);
      mushrooms = __decorate([ ccclass ], mushrooms);
      return mushrooms;
    }(cc.Component);
    exports.default = mushrooms;
    cc._RF.pop();
  }, {
    "./mushrooms_item": "mushrooms_item"
  } ],
  newton_game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "14fbdNpFN1Ff6XDVVBF+C5h", "newton_game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var newton_game = function(_super) {
      __extends(newton_game, _super);
      function newton_game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dings = [];
        _this.qius = [];
        _this.newtons = [];
        _this.sound = null;
        _this.directions = [ 0, 0, 0, 0, 0 ];
        return _this;
      }
      newton_game.prototype.onEnable = function() {
        this.qius[0].on(cc.Node.EventType.TOUCH_START, this.stopAllActions, this);
        this.qius[0].on(cc.Node.EventType.TOUCH_MOVE, this.onOneTouchMove, this);
        this.qius[0].on(cc.Node.EventType.TOUCH_END, this.onOneTouchEnd, this);
        this.qius[0].on(cc.Node.EventType.TOUCH_CANCEL, this.onOneTouchEnd, this);
        this.qius[1].on(cc.Node.EventType.TOUCH_START, this.stopAllActions, this);
        this.qius[1].on(cc.Node.EventType.TOUCH_MOVE, this.onTwoTouchMove, this);
        this.qius[1].on(cc.Node.EventType.TOUCH_END, this.onTwoTouchEnd, this);
        this.qius[1].on(cc.Node.EventType.TOUCH_CANCEL, this.onTwoTouchEnd, this);
        this.qius[2].on(cc.Node.EventType.TOUCH_START, this.stopAllActions, this);
        this.qius[2].on(cc.Node.EventType.TOUCH_MOVE, this.onThreeTouchMove, this);
        this.qius[2].on(cc.Node.EventType.TOUCH_END, this.onThreeTouchEnd, this);
        this.qius[2].on(cc.Node.EventType.TOUCH_CANCEL, this.onThreeTouchEnd, this);
        this.qius[3].on(cc.Node.EventType.TOUCH_START, this.stopAllActions, this);
        this.qius[3].on(cc.Node.EventType.TOUCH_MOVE, this.onFourTouchMove, this);
        this.qius[3].on(cc.Node.EventType.TOUCH_END, this.onFourTouchEnd, this);
        this.qius[3].on(cc.Node.EventType.TOUCH_CANCEL, this.onFourTouchEnd, this);
        this.qius[4].on(cc.Node.EventType.TOUCH_START, this.stopAllActions, this);
        this.qius[4].on(cc.Node.EventType.TOUCH_MOVE, this.onFiveTouchMove, this);
        this.qius[4].on(cc.Node.EventType.TOUCH_END, this.onFiveTouchEnd, this);
        this.qius[4].on(cc.Node.EventType.TOUCH_CANCEL, this.onFiveTouchEnd, this);
      };
      newton_game.prototype.onDisable = function() {
        this.qius[0].targetOff(this);
        this.qius[1].targetOff(this);
        this.qius[2].targetOff(this);
        this.qius[3].targetOff(this);
        this.qius[4].targetOff(this);
      };
      newton_game.prototype.stopAllActions = function() {
        var _this = this;
        [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.newtons[_].stopAllActions();
        });
        this.directions = [ 0, 0, 0, 0, 0 ];
      };
      newton_game.prototype.recover = function(node) {
        node.angle = 0;
      };
      newton_game.prototype.onOneTouchMove = function(t) {
        var _this = this;
        var n_pos = t.getLocation();
        n_pos = this.dings[0].convertToNodeSpaceAR(n_pos);
        if (n_pos.y >= 0) return;
        var tmp = 180 * Math.atan(n_pos.x / n_pos.y) / Math.PI;
        if (tmp > 0) {
          this.newtons[0].angle = -tmp;
          -1 != this.directions[0] && [ 1, 2, 3, 4 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[0] = -1;
        } else tmp < 0 && [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.newtons[_].angle = -tmp;
        });
      };
      newton_game.prototype.onOneTouchEnd = function() {
        var _this = this;
        var rotation = -this.newtons[0].angle;
        rotation > 0 ? this.anim1(0, rotation) : rotation < 0 && [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.anim2(_, rotation);
        });
      };
      newton_game.prototype.onTwoTouchMove = function(t) {
        var _this = this;
        var n_pos = t.getLocation();
        n_pos = this.dings[1].convertToNodeSpaceAR(n_pos);
        if (n_pos.y >= 0) return;
        var tmp = 180 * Math.atan(n_pos.x / n_pos.y) / Math.PI;
        if (tmp > 0) {
          [ 0, 1 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          -1 != this.directions[1] && [ 2, 3, 4 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[1] = -1;
        } else if (tmp < 0) {
          [ 1, 2, 3, 4 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          1 != this.directions[1] && [ 0 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[1] = 1;
        }
      };
      newton_game.prototype.onTwoTouchEnd = function() {
        var _this = this;
        var rotation = -this.newtons[1].angle;
        if (rotation > 0) [ 0, 1 ].forEach(function(_) {
          return _this.anim1(_, rotation);
        }); else if (rotation < 0) {
          [ 1, 2, 3 ].forEach(function(_) {
            return _this.anim2(_, rotation);
          });
          this.anim1(4, rotation);
        }
      };
      newton_game.prototype.onThreeTouchMove = function(t) {
        var _this = this;
        var n_pos = t.getLocation();
        n_pos = this.dings[2].convertToNodeSpaceAR(n_pos);
        if (n_pos.y >= 0) return;
        var tmp = 180 * Math.atan(n_pos.x / n_pos.y) / Math.PI;
        if (tmp > 0) {
          [ 0, 1, 2 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          -1 != this.directions[2] && [ 3, 4 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[2] = -1;
        } else if (tmp < 0) {
          [ 2, 3, 4 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          1 != this.directions[2] && [ 0, 1 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[2] = 1;
        }
      };
      newton_game.prototype.onThreeTouchEnd = function() {
        var _this = this;
        var rotation = -this.newtons[2].angle;
        if (rotation > 0) {
          [ 0, 1 ].forEach(function(_) {
            return _this.anim1(_, rotation);
          });
          this.anim2(2, rotation);
        } else if (rotation < 0) {
          this.anim2(2, rotation);
          [ 3, 4 ].forEach(function(_) {
            return _this.anim1(_, rotation);
          });
        }
      };
      newton_game.prototype.onFourTouchMove = function(t) {
        var _this = this;
        var n_pos = t.getLocation();
        n_pos = this.dings[3].convertToNodeSpaceAR(n_pos);
        if (n_pos.y >= 0) return;
        var tmp = 180 * Math.atan(n_pos.x / n_pos.y) / Math.PI;
        if (tmp > 0) {
          [ 0, 1, 2, 3 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          -1 != this.directions[3] && [ 4 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[3] = -1;
        } else if (tmp < 0) {
          [ 3, 4 ].forEach(function(_) {
            return _this.newtons[_].angle = -tmp;
          });
          1 != this.directions[3] && [ 0, 1, 2 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[3] = 1;
        }
      };
      newton_game.prototype.onFourTouchEnd = function() {
        var _this = this;
        var rotation = -this.newtons[3].angle;
        if (rotation > 0) {
          this.anim1(0, rotation);
          [ 1, 2, 3 ].forEach(function(_) {
            return _this.anim2(_, rotation);
          });
        } else rotation < 0 && [ 3, 4 ].forEach(function(_) {
          return _this.anim1(_, rotation);
        });
      };
      newton_game.prototype.onFiveTouchMove = function(t) {
        var _this = this;
        var n_pos = t.getLocation();
        n_pos = this.dings[4].convertToNodeSpaceAR(n_pos);
        if (n_pos.y >= 0) return;
        var tmp = 180 * Math.atan(n_pos.x / n_pos.y) / Math.PI;
        if (tmp > 0) [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.newtons[_].angle = -tmp;
        }); else if (tmp < 0) {
          this.newtons[4].angle = -tmp;
          -1 != this.directions[4] && [ 0, 1, 2, 3 ].forEach(function(_) {
            return _this.recover(_this.newtons[_]);
          });
          this.directions[4] = -1;
        }
      };
      newton_game.prototype.onFiveTouchEnd = function() {
        var _this = this;
        var rotation = -this.newtons[4].angle;
        rotation > 0 ? [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.anim2(_, rotation);
        }) : rotation < 0 && this.anim1(4, rotation);
      };
      newton_game.prototype.anim1 = function(index, rotation) {
        var _this = this;
        this.newtons[index].runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.5, 0).easing(cc.easeCircleActionIn()), cc.spawn(cc.callFunc(function(_) {
          cc.audioEngine.play(_this.sound, false, 1);
          _this.newtons[4 - index].runAction(cc.sequence(cc.rotateTo(.5, -rotation).easing(cc.easeCircleActionOut()), cc.rotateTo(.5, 0).easing(cc.easeCircleActionIn()), cc.callFunc(function(_) {
            return cc.audioEngine.play(_this.sound, false, 1);
          })));
        }), cc.delayTime(1)), cc.rotateTo(.5, rotation).easing(cc.easeCircleActionOut()))));
      };
      newton_game.prototype.anim2 = function(index, rotation) {
        this.newtons[index].runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.5, 0).easing(cc.easeCircleActionIn()), cc.rotateTo(.5, -rotation).easing(cc.easeCircleActionOut()), cc.rotateTo(.5, 0).easing(cc.easeCircleActionIn()), cc.rotateTo(.5, rotation).easing(cc.easeCircleActionOut()))));
      };
      newton_game.prototype.hide = function() {
        var _this = this;
        this.stopAllActions();
        [ 0, 1, 2, 3, 4 ].forEach(function(_) {
          return _this.recover(_this.newtons[_]);
        });
      };
      __decorate([ property([ cc.Node ]) ], newton_game.prototype, "dings", void 0);
      __decorate([ property([ cc.Node ]) ], newton_game.prototype, "qius", void 0);
      __decorate([ property([ cc.Node ]) ], newton_game.prototype, "newtons", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], newton_game.prototype, "sound", void 0);
      newton_game = __decorate([ ccclass ], newton_game);
      return newton_game;
    }(cc.Component);
    exports.default = newton_game;
    cc._RF.pop();
  }, {} ],
  noses: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d9e6My6LpHdbEnLdHWazSq", "noses");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nose: {
          default: [],
          type: cc.SpriteFrame
        },
        clip: {
          default: [],
          type: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.speed = 2;
        this.viscosity = 1.5;
        this.mv = false;
        this.xvelocity = 0;
        this.yvelocity = 0;
        this.o0 = false;
        this.o1 = false;
        this.o2 = false;
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, function(e) {
          this.mv = true;
          var local = e.currentTarget.convertToNodeSpaceAR(e.getLocation());
          this.touchx = local.x;
          this.touchy = local.y;
          if (this.touchx < -108 && !this.o0) {
            this.o0 = true;
            this.o1 = false;
            this.o2 = false;
            this.getComponent(cc.Sprite).spriteFrame = this.nose[0];
            this.getComponent(cc.AudioSource).clip = this.clip[0];
            this.getComponent(cc.AudioSource).play();
          }
          if (this.touchx >= -108 && this.touchx < 133 && !this.o1) {
            this.o1 = true;
            this.o0 = false;
            this.o2 = false;
            this.getComponent(cc.Sprite).spriteFrame = this.nose[1];
            this.getComponent(cc.AudioSource).clip = this.clip[1];
            this.getComponent(cc.AudioSource).play();
          }
          if (this.touchx >= 133 && !this.o2) {
            this.o2 = true;
            this.o0 = false;
            this.o1 = false;
            this.getComponent(cc.Sprite).spriteFrame = this.nose[2];
            this.getComponent(cc.AudioSource).clip = this.clip[2];
            this.getComponent(cc.AudioSource).play();
          }
        }.bind(this));
      },
      update: function update(dt) {
        if (this.mv) {
          var difference = this.touchx - this.node.x;
          this.xvelocity = (this.xvelocity + difference / this.speed) / this.viscosity;
          this.node.x = this.node.x + this.xvelocity;
          var difference2 = this.touchy - this.node.y - 60;
          this.yvelocity = (this.yvelocity + difference2 / this.speed) / this.viscosity;
          this.node.y = this.node.y + this.yvelocity;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  notebug: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2c3a03hPpE2bFJidXwcj8Z", "notebug");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var notebug = function(_super) {
      __extends(notebug, _super);
      function notebug() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bug = null;
        _this.bugs = [];
        _this.sounds = [];
        _this.rotateTime = .6;
        _this.index = 0;
        return _this;
      }
      notebug.prototype.onLoad = function() {
        this.bug.spriteFrame = this.bugs[this.index];
      };
      notebug.prototype.onClick = function() {
        var _this = this;
        var btn = this.node.getComponent(cc.Button);
        btn && (btn.interactable = false);
        cc.audioEngine.play(this.sounds[this.index], false, 1);
        this.node.runAction(cc.sequence(cc.rotateBy(this.rotateTime, 360), cc.callFunc(function(_) {
          _this.index++;
          _this.index >= _this.bugs.length && (_this.index = 0);
          _this.bug.spriteFrame = _this.bugs[_this.index];
          btn && (btn.interactable = true);
        })));
      };
      __decorate([ property(cc.Sprite) ], notebug.prototype, "bug", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        tooltip: "\u591a\u79cd\u989c\u8272\u7684\u866b\u5b50"
      }) ], notebug.prototype, "bugs", void 0);
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u591a\u79cd\u866b\u5b50\u7684\u58f0\u97f3"
      }) ], notebug.prototype, "sounds", void 0);
      __decorate([ property({
        tooltip: "\u866b\u5b50\u65cb\u8f6c\u65f6\u95f4"
      }) ], notebug.prototype, "rotateTime", void 0);
      notebug = __decorate([ ccclass ], notebug);
      return notebug;
    }(cc.Component);
    exports.default = notebug;
    cc._RF.pop();
  }, {} ],
  "paint_paintgame1-5": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc705jV6z1EvZFy3VzbHHaq", "paint_paintgame1-5");
    "use strict";
    var self;
    var color;
    var colors = {};
    var lastPatchTs = 0;
    var lastZindx = 0;
    var hitpatch = null;
    var lastColor = null;
    var lastTar = null;
    cc.Class({
      extends: cc.Component,
      properties: {
        brush: {
          default: null,
          type: cc.Node
        },
        brushHead: {
          default: null,
          type: cc.Node
        },
        blue: {
          default: null,
          type: cc.Node
        },
        red: {
          default: null,
          type: cc.Node
        },
        yellow: {
          default: null,
          type: cc.Node
        },
        black: {
          default: null,
          type: cc.Node
        },
        white: {
          default: null,
          type: cc.Node
        },
        clean: {
          default: null,
          type: cc.Node
        },
        things: {
          default: null,
          type: cc.Node
        },
        size: cc.view.getFrameSize(),
        backBtn: cc.Node
      },
      getColor: function getColor(colors) {
        var len = Object.keys(colors).length;
        if (!colors || !len) return;
        var r = 0;
        var g = 0;
        var b = 0;
        for (var _color in colors) switch (_color) {
         case "blue":
          r += 0;
          g += 174;
          b += 239;
          break;

         case "red":
          r += 255;
          g += 0;
          b += 0;
          break;

         case "yellow":
          r += 254;
          g += 255;
          b += 0;
          break;

         case "black":
          r += 1;
          g += 0;
          b += 0;
          break;

         case "white":
          r += 254;
          g += 255;
          b += 255;
        }
        return new cc.Color(r / len | 0, g / len | 0, b / len | 0);
      },
      touch: function touch(event) {
        var loc = event.getLocation();
        var x = loc.x, y = loc.y;
        console.log("x, y", x, y);
        if (self.blue.getBoundingBoxToWorld().contains(event.getLocation())) {
          delete colors.white;
          delete colors.black;
          colors.blue = true;
        }
        if (self.red.getBoundingBoxToWorld().contains(event.getLocation())) {
          delete colors.white;
          delete colors.black;
          colors.red = true;
        }
        if (self.yellow.getBoundingBoxToWorld().contains(event.getLocation())) {
          delete colors.white;
          delete colors.black;
          colors.yellow = true;
        }
        if (self.black.getBoundingBoxToWorld().contains(event.getLocation())) {
          colors = {};
          colors.black = true;
        }
        if (self.white.getBoundingBoxToWorld().contains(event.getLocation())) {
          colors = {};
          colors.white = true;
        }
        self.clean.getBoundingBoxToWorld().contains(event.getLocation()) && (colors = {});
        color = self.getColor(colors);
        if (color) {
          self.brushHead.active = true;
          self.brushHead.color = color;
        } else self.brushHead.active = false;
      },
      start: function start() {
        self = null;
        color = null;
        colors = {};
        lastPatchTs = 0;
        lastZindx = 0;
        hitpatch = null;
        lastColor = null;
        lastTar = null;
        self = this;
        self.brushHead.active = false;
        cc.log("width:" + self.size.width);
        cc.log("height:" + self.size.height);
        self.node.on("touchstart", self.touch, this);
        var zindex = 0;
        if (this.backBtn) {
          cc.director.preloadScene("Main", function() {
            cc.log("Next scene Main preloaded");
          });
          this.backBtn.on("touchstart", function() {
            console.log("touch back");
            cc.director.loadScene("Main");
          });
        }
        var things = self.things.children;
        for (var i = 0; i < things.length; i++) {
          var thing = things[i];
          var patchs = thing.children;
          var _loop = function _loop() {
            var patch = patchs[j];
            if ("line" === patch.name) {
              patch.on("touchstart", function(event) {
                var parent = patch.parent;
                color || self.changeSize(parent, ++zindex);
              });
              patch._touchListener.setSwallowTouches(false);
            } else {
              patch.on("touchstart", function(event) {
                var parent = patch.parent;
                var point = event.getLocation();
                var loc = patch.convertToNodeSpaceAR(point);
                loc.x = 0 | loc.x;
                loc.y = 0 | loc.y;
                var poly = patch.getComponent(cc.PolygonCollider);
                if (poly) {
                  var isHit = cc.Intersection.pointInPolygon(loc, poly.world.points);
                  color && isHit && self.changePathColor(patch, color, parent.zIndex);
                }
              });
              patch._touchListener.setSwallowTouches(false);
            }
          };
          for (var j = 0; j < patchs.length; j++) _loop();
        }
      },
      changeSize: function changeSize(tar, zindex) {
        void 0 === zindex && (zindex = 0);
        zindex = tar.zIndex || zindex;
        lastPatchTs || setTimeout(function() {
          console.log(lastTar, lastTar.zIndex);
          if (lastTar.scaleX < 1) {
            lastTar.scaleX = 1.3;
            lastTar.scaleY = 1.3;
            lastTar._x = lastTar.x;
            lastTar._y = lastTar.y;
            lastTar.x = 0;
            lastTar.y = 0;
            lastTar.zIndex = lastZindx;
          } else {
            lastTar.scaleX = .5;
            lastTar.scaleY = .5;
            lastTar.x = lastTar._x;
            lastTar.y = lastTar._y;
            lastTar.zIndex = 0;
          }
          lastTar = null;
          lastZindx = 0;
          lastPatchTs = 0;
        }, 20);
        lastPatchTs = Date.now();
        console.log(lastPatchTs);
        if (zindex >= lastZindx) {
          lastZindx = zindex;
          lastTar = tar;
        }
      },
      changePathColor: function changePathColor(patch, color, zindex) {
        void 0 === zindex && (zindex = 0);
        console.log(patch, color, zindex);
        lastPatchTs || setTimeout(function() {
          console.log(hitpatch, lastColor, lastZindx);
          if (hitpatch) {
            hitpatch.color = lastColor;
            hitpatch = null;
            lastColor = null;
            lastPatchTs = 0;
            lastZindx = 0;
          }
        }, 20);
        lastPatchTs = Date.now();
        console.log(lastPatchTs);
        if (zindex >= lastZindx) {
          lastZindx = zindex;
          hitpatch = patch;
          lastColor = color;
        }
      },
      hitTest: function hitTest(point, patch) {
        var locationInNode = patch.convertToNodeSpaceAR(point);
        var size = patch.getContentSize();
        var sprite = patch.getComponent(cc.Sprite);
        console.log("patch", patch);
        console.log("sprite", sprite);
        console.log("size", size);
        console.log("locationInNode", locationInNode);
        var texture = sprite.spriteFrame.getTexture();
        console.log("texture", texture);
        if (sprite) {
          var data = null;
          var imgs = texture.readPixels(data, locationInNode.x - 2, size.height - locationInNode.y - 2, 5, 5);
          console.log("data", data);
          console.log("imgs", imgs);
        }
        return false;
      },
      onLucencyTouch: function onLucencyTouch(img, x, y) {
        var cvs = document.createElement("canvas");
        var ctx = cvs.getContext("2d");
        cvs.width = 1;
        cvs.height = 1;
        ctx.drawImage(img, x, y, 1, 1, 0, 0, 1, 1);
        var imgdata = ctx.getImageData(0, 0, 1, 1);
        return imgdata.data[3];
      }
    });
    cc._RF.pop();
  }, {} ],
  panzi1_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d33a45Mi/1BgqGHZudj0n1o", "panzi1_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        father: cc.Node,
        father1: cc.Node,
        father2: cc.Node,
        director: cc.Node,
        distance: 0,
        old_location: cc.Vec2,
        flag: 0
      },
      onLoad: function onLoad() {
        var node0 = cc.find("Canvas/sprite 2-1");
        this.old_location.x = this.node.x;
        this.old_location.y = this.node.y;
        this.node.on("touchmove", function(event) {
          this.node.x += event.getDelta().x;
          this.node.y += event.getDelta().y;
        }, this);
        this.node.on("touchend", function(event) {
          node0.x = this.node.x;
          node0.y = this.node.y;
          this.judge();
        }, this);
      },
      start: function start() {},
      judge: function judge() {
        if (Math.abs(this.node.x - this.father.x) <= 43 && Math.abs(this.node.y - this.father.y) <= this.distance || Math.abs(this.node.x - this.father1.x) <= 43 && Math.abs(this.node.y - this.father1.y) <= this.distance || Math.abs(this.node.x - this.father2.x) <= 43 && Math.abs(this.node.y - this.father2.y) <= this.distance) {
          this.node.getComponent(cc.Animation).play();
          this.node.getComponent(cc.AudioSource).play();
          this.scheduleOnce(function() {
            var random = Math.floor(3 * Math.random() + 1);
            1 == random ? this.director.getComponent("director_417").make_flower1() : 2 == random ? this.director.getComponent("director_417").make_flower1() : 3 == random && this.director.getComponent("director_417").make_flower1();
            this.node.active = false;
          }, .5);
        } else {
          this.node.x = this.old_location.x;
          this.node.y = this.old_location.y;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  panzi_417: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4916cF8w81Lr4LEHSur7Hxk", "panzi_417");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        father: cc.Node,
        father1: cc.Node,
        father2: cc.Node,
        director: cc.Node,
        distance: 0,
        old_location: cc.Vec2,
        flag: 0
      },
      onLoad: function onLoad() {
        this.old_location.x = this.node.x;
        this.old_location.y = this.node.y;
        this.node.on("touchmove", function(event) {
          this.node.x += event.getDelta().x;
          this.node.y += event.getDelta().y;
        }, this);
        this.node.on("touchend", function(event) {
          this.judge();
        }, this);
      },
      start: function start() {},
      judge: function judge() {
        if (Math.abs(this.node.x - this.father.x) <= 43 && Math.abs(this.node.y - this.father.y) <= this.distance || Math.abs(this.node.x - this.father1.x) <= 43 && Math.abs(this.node.y - this.father1.y) <= this.distance || Math.abs(this.node.x - this.father2.x) <= 43 && Math.abs(this.node.y - this.father2.y) <= this.distance) {
          this.node.getComponent(cc.Animation).play();
          this.node.getComponent(cc.AudioSource).play();
          this.scheduleOnce(function() {
            var random = Math.floor(3 * Math.random() + 1);
            1 == random ? this.director.getComponent("director_417").make_flower1() : 2 == random ? this.director.getComponent("director_417").make_flower1() : 3 == random && this.director.getComponent("director_417").make_flower1();
            this.node.x = this.old_location.x;
            this.node.y = this.old_location.y;
          }, .5);
        } else {
          this.node.x = this.old_location.x;
          this.node.y = this.old_location.y;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  peng_bigwheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce6eeVMPIpNnpK8ElYktqgi", "peng_bigwheel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.touchingNumber = 0;
      },
      onCollisionEnter: function onCollisionEnter(other) {
        console.log("on collision enter");
        var en = this.node.getComponent(cc.AudioSource);
        en.play();
        var action3 = cc.scaleBy(.2, 1.25, 1.25);
        this.node.runAction(action3);
      },
      onCollisionStay: function onCollisionStay(other) {},
      onCollisionExit: function onCollisionExit() {
        var action2 = cc.scaleBy(.2, .8, .8);
        this.node.runAction(action2);
        console.log("on collision exit");
      }
    });
    cc._RF.pop();
  }, {} ],
  petal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f13eOweFZOkLMlvkaiEMzp", "petal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var petal = function(_super) {
      __extends(petal, _super);
      function petal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.data = 0;
        return _this;
      }
      petal.prototype.onCollisionEnter = function(other, self) {
        this.node.getParent().getParent().emit("collision.petal", this.data);
      };
      __decorate([ property ], petal.prototype, "data", void 0);
      petal = __decorate([ ccclass ], petal);
      return petal;
    }(cc.Component);
    exports.default = petal;
    cc._RF.pop();
  }, {} ],
  "pingzi 8-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "547498W2bNGA6vrXF9v0Zin", "pingzi 8-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        chuizi: cc.Node,
        mouse_flag: 0
      },
      onLoad: function onLoad() {
        this.mouse_flag = 0;
        this.node.on("touchend", function(event) {
          this.play_anim();
        }, this);
      },
      play_anim: function play_anim() {
        if (this.mouse_flag < 1) {
          var rot = cc.rotateTo(.01, 10);
          this.chuizi.runAction(rot);
          this.chuizi.getComponent(cc.Animation).play();
          this.scheduleOnce(function() {
            this.node.getComponent(cc.Animation).play();
            this.node.getComponent(cc.AudioSource).play();
            this.node.pauseSystemEvents();
            cc.game.emit("bottles");
          }, .2);
          this.mouse_flag++;
        } else this.mouse_flag = 0;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  player_SpinGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65f3aejOkhGhZ549v1/iluD", "player_SpinGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
      },
      exchange_rotate: function exchange_rotate() {
        0 == this.node.angle ? this.rotateTo90() : -90 == this.node.angle && this.rotateTo0();
      },
      rotateTo0: function rotateTo0() {
        this.node.runAction(cc.rotateTo(.5, 0));
        this.director.getComponent("director_SpinGames").play_flag = 1;
        cc.director.getCollisionManager().enabled = true;
      },
      rotateTo90: function rotateTo90() {
        this.node.runAction(cc.rotateTo(.5, 90));
        cc.director.getCollisionManager().enabled = false;
        this.director.getComponent("director_SpinGames").play_flag = 0;
        var action = cc.fadeTo(1, 255);
        this.director.getComponent("director_SpinGames").main[this.director.getComponent("director_SpinGames").main_index].runAction(action);
        this.director.getComponent("director_SpinGames").main[this.director.getComponent("director_SpinGames").main_index].runAction(cc.rotateTo(1, 0));
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  prefab_910: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf3b36dKcxDqIQxE6CMn9L7", "prefab_910");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        flag: 0
      },
      onLoad: function onLoad() {
        this.director = cc.find("Canvas/ground");
        this.node.on("touchstart", function(event) {
          0 == this.flag ? this.director.getComponent("butter_910").flower1_killed(this.node) : 1 == this.flag ? this.director.getComponent("butter_910").flower2_killed(this.node) : 2 == this.flag && this.director.getComponent("butter_910").flower3_killed(this.node);
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  puzzle_backhome: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44a8fU34slB866x5DIwUGfG", "puzzle_backhome");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      back_puzzle: function back_puzzle() {
        cc.director.loadScene("puzzle_games");
        cc.audioEngine.stopAllEffects();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  puzzle_child_open: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dea56BnYrFDNZawS49fOZe0", "puzzle_child_open");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      topart1: function topart1() {
        cc.director.loadScene("balloon");
      },
      topart2: function topart2() {
        cc.director.loadScene("bigwheel");
      },
      topart3: function topart3() {
        cc.director.loadScene("bubbleblowing");
      },
      topart4: function topart4() {
        cc.director.loadScene("bungee");
      },
      topart5: function topart5() {
        cc.director.loadScene("butterflies_910");
      },
      topart6: function topart6() {
        cc.director.loadScene("duck");
      },
      topart7: function topart7() {
        cc.director.loadScene("fish_games");
      },
      topart8: function topart8() {
        cc.director.loadScene("flower_417");
      },
      topart9: function topart9() {
        cc.director.loadScene("flower_418");
      },
      topart10: function topart10() {
        cc.director.loadScene("flower_419");
      },
      topart11: function topart11() {
        cc.director.loadScene("playpark910");
      },
      topart12: function topart12() {
        cc.director.loadScene("qingting");
      },
      topart13: function topart13() {
        cc.director.loadScene("xingxing929");
      },
      topart14: function topart14() {
        cc.director.loadScene("Christmas_Games");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  qinting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc0ccFWny9AOY/0D6K+167v", "qinting");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        first_position: cc.Vec2
      },
      onLoad: function onLoad() {
        this.first_position.x = this.node.x;
        this.first_position.y = this.node.y;
      },
      exchange_rotateBy: function exchange_rotateBy() {
        this.node.angle -= 90;
        -this.node.angle >= 360 && (this.node.angle += 360);
        this.director.getComponent("director_qingting").judge_equal();
      },
      reset_position: function reset_position() {
        this.node.x = this.first_position.x;
        this.node.y = this.first_position.y;
      },
      random_angle: function random_angle() {
        var random_num = Math.floor(4 * Math.random());
        0 == random_num ? this.node.angle = 0 : 1 == random_num ? this.node.angle = -90 : 2 == random_num ? this.node.angle = -180 : 3 == random_num && (this.node.angle = -270);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "run 2-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "412daOHv/ROV5iZbuIf398t", "run 2-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: 0,
        add_speed: 0,
        time: 0,
        first_location: cc.Vec2,
        max_x: 0,
        touch_flag: 0,
        replay_button: cc.Node
      },
      onLoad: function onLoad() {
        this.first_location.x = this.node.x;
        this.first_location.y = this.node.y;
      },
      start: function start() {},
      replay: function replay() {
        this.touch_flag = 0;
        this.speed = 0;
        this.node.x = this.first_location.x;
        this.node.y = this.first_location.y;
      },
      update: function update(dt) {
        this.node.x += (this.speed + this.add_speed) * dt;
        this.time += .01;
        if (this.time >= .4) {
          this.time = 0;
          1 == this.touch_flag && (this.add_speed = -Math.floor(51 * Math.random()));
        }
        if (this.node.x < this.max_x) {
          this.speed = 0;
          this.add_speed = 0;
          this.replay_button.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  shapes_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f605ohEpBEM79ePS/Pwela", "shapes_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Anim: [ cc.Animation ],
        num: null
      },
      start: function start() {},
      playAnim: function playAnim(event, num) {
        if (null == this.num) {
          this.Anim[parseInt(num)].play();
          this.num = num;
        } else if (this.num == num) {
          this.Anim[parseInt(num)].stop();
          this.num = null;
        } else {
          this.Anim[parseInt(this.num)].stop();
          this.Anim[parseInt(num)].play();
          this.num = num;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  snow_select: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "986ce6/TYBEQpN2suwumYSh", "snow_select");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        controled: [ cc.Node ]
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          null == cc.ZL.is_selected && (cc.ZL.is_selected = this.node);
        }.bind(this));
      },
      update: function update(dt) {
        this.node.y < 0 ? this.node.y = 0 : this.node.y > 200 && (this.node.y = 200);
        for (var i = 0; i < 6; i++) this.controled[i].y = this.node.y;
      }
    });
    cc._RF.pop();
  }, {} ],
  snowflake: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f0fcX01n5O9K2Tnjgg9ATo", "snowflake");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        is_selected: null
      },
      onLoad: function onLoad() {
        cc.ZL = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (null != this.is_selected) {
            var y = event.getDeltaY();
            this.is_selected.y >= 0 && this.is_selected.y <= 200 && (this.is_selected.y += y / 2);
          }
        }.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.is_selected = null;
        }.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          this.is_selected = null;
        }.bind(this));
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  star_SpinGames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b9fdHPuuZPz4FOFa870h58", "star_SpinGames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        first_location: cc.Vec2
      },
      onLoad: function onLoad() {
        this.node.on("touchstart", function(event) {
          this.node.getComponent(cc.AudioSource).play();
          this.first_location.x = this.node.x;
          this.first_location.y = this.node.y;
        }, this);
        this.node.on("touchmove", function(event) {
          this.node.x += event.getDelta().x;
          this.node.y += event.getDelta().y;
        }, this);
        this.node.on("touchend", function(event) {
          var num = Math.sqrt(Math.abs(this.node.x * this.node.x) + Math.abs(this.node.y * this.node.y));
          if (num >= 170 || num <= 110) {
            this.node.x = this.first_location.x;
            this.node.y = this.first_location.y;
          }
        }, this);
        this.node.on("touchcancel", function(event) {
          var num = Math.sqrt(Math.abs(this.node.x * this.node.x) + Math.abs(this.node.y * this.node.y));
          if (num >= 170 || num <= 110) {
            this.node.x = this.first_location.x;
            this.node.y = this.first_location.y;
          }
        }, this);
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.getComponent(cc.AudioSource).play();
        other.node.getChildByName("play2").active = true;
        this.scheduleOnce(function() {
          other.node.getChildByName("play2").active = false;
          other.node.getChildByName("play1").active = true;
        }, .1);
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  string_rocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf2afIH9l1GSr1mfctsiOMJ", "string_rocket");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        show_list: [ cc.Node ],
        p: 0,
        num: 0,
        music: cc.AudioSource,
        rock_music: cc.AudioSource,
        rocker: cc.Node,
        parent: cc.Node,
        star_list: [ cc.Node ],
        first_location: cc.Vec2,
        sun: cc.Node
      },
      onLoad: function onLoad() {
        this.p = 0;
        this.first_location.x = this.parent.x;
        this.first_location.y = this.parent.y;
      },
      start: function start() {},
      show_0: function show_0() {
        this.num = 0;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[0].active = true;
          this.p++;
        }
      },
      show_1: function show_1() {
        this.num = 1;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_2: function show_2() {
        this.num = 2;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_3: function show_3() {
        this.num = 3;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_4: function show_4() {
        this.num = 4;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_5: function show_5() {
        this.num = 5;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_6: function show_6() {
        this.num = 6;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_7: function show_7() {
        this.num = 7;
        if (this.num == this.p) {
          this.music.play();
          this.show_list[this.p - 1].active = false;
          this.show_list[this.p].active = true;
          this.p++;
        }
      },
      show_max: function show_max() {
        this.num = 8;
        if (this.num == this.p) {
          this.show_list[this.p - 1].active = false;
          for (var i = 0; i < this.star_list.length; i++) this.star_list[i].active = false;
          this.rocker.active = true;
          var action = cc.moveBy(2, 0, 1e3).easing(cc.easeCubicActionIn());
          this.parent.runAction(action);
          this.rock_music.play();
          this.scheduleOnce(function() {
            this.sun.active = true;
          }, 2);
        }
      },
      init: function init() {
        for (var i = 0; i < this.star_list.length; i++) this.star_list[i].active = true;
        for (var _i = 0; _i < this.star_list.length; _i++) this.show_list[_i].active = false;
        this.rocker.active = false;
        this.parent.x = this.first_location.x;
        this.parent.y = this.first_location.y;
        this.p = 0;
        this.sun.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  theatre_game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59a78sH8k9BdYF8r4O7D3S8", "theatre_game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var theatre_game = function(_super) {
      __extends(theatre_game, _super);
      function theatre_game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.curtain = null;
        _this.bgs = [];
        _this.left = null;
        _this.right = null;
        _this.leftImg = null;
        _this.rightImg = null;
        _this.images = [];
        _this.audios = [];
        _this.index = 0;
        return _this;
      }
      theatre_game.prototype.onLoad = function() {};
      theatre_game.prototype.start = function() {
        this.index = Math.round(Math.random() * (this.bgs.length - 1));
        this.bg.spriteFrame = this.bgs[this.index];
      };
      theatre_game.prototype.onEnable = function() {
        this.left.on(cc.Node.EventType.TOUCH_MOVE, this.onLeftTouchMove, this);
        this.right.on(cc.Node.EventType.TOUCH_MOVE, this.onRightTouchMove, this);
        this.left.on(cc.Node.EventType.TOUCH_END, this.onLeftTouchEnd, this);
        this.right.on(cc.Node.EventType.TOUCH_END, this.onRightTouchEnd, this);
      };
      theatre_game.prototype.onDisable = function() {
        this.left.targetOff(this);
        this.right.targetOff(this);
      };
      theatre_game.prototype.onDestroy = function() {};
      theatre_game.prototype.onLeftTouchMove = function(t) {
        var delta = t.getDelta();
        var tmp = this.left.x;
        tmp += delta.x;
        tmp < -221 && (tmp = -221);
        tmp > -68 && (tmp = -68);
        this.left.x = tmp;
      };
      theatre_game.prototype.onRightTouchMove = function(t) {
        var delta = t.getDelta();
        var tmp = this.right.x;
        tmp += delta.x;
        tmp < 68 && (tmp = 68);
        tmp > 221 && (tmp = 221);
        this.right.x = tmp;
      };
      theatre_game.prototype.onLeftTouchEnd = function() {
        this.leftImg.spriteFrame = this.images[Math.round(Math.random() * (this.images.length - 1))];
        this.callAudio();
      };
      theatre_game.prototype.onRightTouchEnd = function() {
        this.rightImg.spriteFrame = this.images[Math.round(Math.random() * (this.images.length - 1))];
        this.callAudio();
      };
      theatre_game.prototype.callAudio = function() {
        cc.audioEngine.play(this.audios[Math.round(Math.random() * (this.audios.length - 1))], false, 1);
      };
      theatre_game.prototype.onClickCurtain = function() {
        -5 === Math.round(this.curtain.node.y) ? this.curtain.node.runAction(cc.moveTo(1, cc.v2(0, -166))) : -166 === Math.round(this.curtain.node.y) && this.curtain.node.runAction(cc.moveTo(1, cc.v2(0, -5)));
      };
      theatre_game.prototype.onClickScene = function() {
        this.index++;
        this.index >= this.bgs.length && (this.index = 0);
        this.bg.spriteFrame = this.bgs[this.index];
      };
      __decorate([ property(cc.Sprite) ], theatre_game.prototype, "bg", void 0);
      __decorate([ property(cc.Sprite) ], theatre_game.prototype, "curtain", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], theatre_game.prototype, "bgs", void 0);
      __decorate([ property(cc.Node) ], theatre_game.prototype, "left", void 0);
      __decorate([ property(cc.Node) ], theatre_game.prototype, "right", void 0);
      __decorate([ property(cc.Sprite) ], theatre_game.prototype, "leftImg", void 0);
      __decorate([ property(cc.Sprite) ], theatre_game.prototype, "rightImg", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], theatre_game.prototype, "images", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], theatre_game.prototype, "audios", void 0);
      theatre_game = __decorate([ ccclass ], theatre_game);
      return theatre_game;
    }(cc.Component);
    exports.default = theatre_game;
    cc._RF.pop();
  }, {} ],
  "touch 9-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29adfA8vU9IZojYbiaEKTb2", "touch 9-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        one: cc.Node,
        two: cc.Node,
        text3: cc.Node,
        text4: cc.Node,
        text5: cc.Node,
        text6: cc.Node,
        text7: cc.Node,
        text8: cc.Node,
        text9: cc.Node
      },
      onLoad: function onLoad() {
        this.node.on("touchstart", function(event) {
          if (1 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var enemy = cc.instantiate(this.one);
            enemy.parent = this.node;
            enemy.x = pos.x;
            enemy.y = pos.y;
          } else if (2 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy = cc.instantiate(this.two);
            _enemy.parent = this.node;
            _enemy.x = pos.x;
            _enemy.y = pos.y;
          } else if (3 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy2 = cc.instantiate(this.text3);
            _enemy2.parent = this.node;
            _enemy2.x = pos.x;
            _enemy2.y = pos.y;
          } else if (4 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy3 = cc.instantiate(this.text4);
            _enemy3.parent = this.node;
            _enemy3.x = pos.x;
            _enemy3.y = pos.y;
          } else if (5 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy4 = cc.instantiate(this.text5);
            _enemy4.parent = this.node;
            _enemy4.x = pos.x;
            _enemy4.y = pos.y;
          } else if (6 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy5 = cc.instantiate(this.text6);
            _enemy5.parent = this.node;
            _enemy5.x = pos.x;
            _enemy5.y = pos.y;
          } else if (7 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy6 = cc.instantiate(this.text7);
            _enemy6.parent = this.node;
            _enemy6.x = pos.x;
            _enemy6.y = pos.y;
          } else if (8 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy7 = cc.instantiate(this.text8);
            _enemy7.parent = this.node;
            _enemy7.x = pos.x;
            _enemy7.y = pos.y;
          } else if (9 == this.director.getComponent("director 9-1").select_num) {
            this.node.getComponent(cc.AudioSource).play();
            var world_pos = event.getLocation();
            var pos = this.node.convertToNodeSpaceAR(world_pos);
            var _enemy8 = cc.instantiate(this.text9);
            _enemy8.parent = this.node;
            _enemy8.x = pos.x;
            _enemy8.y = pos.y;
          }
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  touch_fish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde212fei9KVqJ3PytgCgNx", "touch_fish");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        fish: cc.Node,
        touch_flag: 0
      },
      onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.node.on("touchstart", function(event) {
          if (1 == this.touch_flag) return;
          this.touch_flag = 1;
          this.fish.x = event.getLocationX() - 480 - 150;
          this.fish.y = -167;
          var seq = cc.sequence(cc.rotateTo(.4, 0), cc.rotateTo(.4, 40), cc.rotateTo(.01, -40));
          var actionBy = cc.jumpBy(.8, cc.v2(500, 0), 200, 1);
          var spawn = cc.spawn(actionBy, seq);
          this.scheduleOnce(function() {
            this.touch_flag = 0;
          }, .85);
          this.fish.runAction(spawn);
          cc.log(this.fish.x);
        }, this);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  touchmove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ecdb+U+GlJlLofw802xKlt", "touchmove");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var _aNode = null;
    var _bNode = null;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.orgPos = null;
        _this.audios = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var boxCollider = this.node.getComponent(cc.BoxCollider);
        boxCollider.size.width = this.node.width / 2;
        boxCollider.size.height = this.node.height / 2;
      };
      NewClass.prototype.start = function() {
        this.orgPos = this.node.position;
      };
      NewClass.prototype.onDestroy = function() {
        this.node.targetOff(this);
      };
      NewClass.prototype._onEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchCancel.bind(this), this);
        window["boxZIndex"] = 1;
      };
      NewClass.prototype._removeEvent = function() {
        this.node.targetOff(this);
      };
      NewClass.prototype._touchStart = function(event) {
        window["boxZIndex"]++;
        this.node.zIndex = window["boxZIndex"];
        _aNode = this.node;
        _bNode = null;
      };
      NewClass.prototype._touchMove = function(event) {
        if (!_aNode) return;
        var delta = event.getDelta();
        var node = this.node;
        node.position = node.position.add(delta);
      };
      NewClass.prototype._touchEnd = function(event) {
        console.log(_aNode, _bNode);
        if (_aNode && _bNode) {
          this.audios[Math.floor(3 * Math.random())].play();
          var posB = cc.v2(10, -10);
          var posA = _aNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
          posA = _bNode.convertToNodeSpaceAR(posA);
          var dis = posA.sub(posB).mag();
          var d = dis < 200 ? dis / 800 : .25 + (dis - 200) / 4800;
          _aNode.parent = _bNode;
          _aNode.position = posA;
          var boxCollider = this.node.getComponent(cc.BoxCollider);
          boxCollider.enabled = false;
          this._removeEvent();
          _aNode.runAction(cc.sequence(cc.moveTo(d, posB), cc.callFunc(function() {})));
        } else this._touchCancel(event);
      };
      NewClass.prototype._touchCancel = function(event) {
        if (!_aNode) return;
        _aNode = null;
        var dis = this.node.position.sub(this.orgPos).mag();
        var d = dis < 200 ? dis / 800 : .25 + (dis - 200) / 4800;
        var action = cc.moveTo(d, this.orgPos);
        this.node.runAction(action);
      };
      NewClass.prototype.onCollisionEnter = function(other, self) {
        if (!_aNode) return;
        if (other.node != _aNode) return;
        if (other.node.name != self.node.name) return;
        _bNode = this.node;
      };
      NewClass.prototype.onCollisionExit = function(other, self) {
        self.node == _bNode && (_bNode = null);
      };
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "audios", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  trail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a44e1bLW8BNlocv/2o6Z7gf", "trail");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var trail = function(_super) {
      __extends(trail, _super);
      function trail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sound = null;
        _this.animation = null;
        _this.index = 0;
        _this.soundId = -1;
        _this.animState = null;
        _this.originalPos = null;
        _this.originalRotation = 0;
        return _this;
      }
      trail.prototype.onLoad = function() {
        this.originalPos = this.node.position;
        this.originalRotation = this.node.angle;
      };
      trail.prototype.onEnable = function() {
        this.node.position = this.originalPos;
        this.node.angle = this.originalRotation;
        if (this.animation) {
          var defaultClip = this.animation.defaultClip;
          this.animState = this.animation.play(defaultClip.name, 0);
          this.animState.pause();
        }
      };
      trail.prototype.onClick = function() {
        var _this = this;
        var btn = this.node.getComponent(cc.Button);
        btn.interactable = false;
        this.animState && this.animState.resume();
        if (this.animState.isPlaying) {
          if (this.sound) if (this.soundId > -1) cc.audioEngine.resume(this.soundId); else {
            this.soundId = cc.audioEngine.play(this.sound, true, 1);
            cc.audioEngine.pause(this.soundId);
          }
          this.scheduleOnce(function(_) {
            _this.sound && cc.audioEngine.pause(_this.soundId);
            _this.animState && _this.animState.pause();
            btn.interactable = true;
          }, 1);
        }
      };
      trail.prototype.onFinished = function() {
        this.node.getParent().getParent().emit("anim.finish", this.index);
      };
      trail.prototype.stopAudio = function() {
        cc.audioEngine.stop(this.soundId);
      };
      __decorate([ property({
        type: cc.AudioClip,
        tooltip: "\u866b\u5b50\u58f0\u97f3"
      }) ], trail.prototype, "sound", void 0);
      __decorate([ property({
        type: cc.Animation,
        tooltip: "\u866b\u5b50\u52a8\u753b"
      }) ], trail.prototype, "animation", void 0);
      __decorate([ property({
        tooltip: "\u5e8f\u53f7\uff081,2,3,4,5\uff09"
      }) ], trail.prototype, "index", void 0);
      trail = __decorate([ ccclass ], trail);
      return trail;
    }(cc.Component);
    exports.default = trail;
    cc._RF.pop();
  }, {} ],
  trash_recycling: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5eb1hzcitNwpKZLsgPReX6", "trash_recycling");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        father: cc.Node,
        first_positon: cc.Vec2,
        music: cc.AudioSource
      },
      onLoad: function onLoad() {
        this.first_positon.x = this.node.x;
        this.first_positon.y = this.node.y;
        this.random_angle();
        this.node.on("touchmove", function(event) {
          this.node.x += event.getDelta().x;
          this.node.y += event.getDelta().y;
        }, this);
        this.node.on("touchend", function(event) {
          if (Math.abs(this.node.x - this.father.x) + Math.abs(this.node.y - this.father.y) <= 100) {
            this.node.getComponent(cc.AudioSource).play();
            this.director.getComponent("director_recycling").add_head_index();
            this.node.y = 1e3;
          } else {
            this.node.x = this.first_positon.x;
            this.node.y = this.first_positon.y;
          }
        }, this);
        this.node.on("touchcancel", function(event) {
          if (Math.abs(this.node.x - this.father.x) + Math.abs(this.node.y - this.father.y) <= 100) {
            this.node.getComponent(cc.AudioSource).play();
            this.director.getComponent("director_recycling").add_head_index();
            this.node.active = false;
          } else {
            this.node.x = this.first_positon.x;
            this.node.y = this.first_positon.y;
          }
        }, this);
      },
      start: function start() {},
      random_angle: function random_angle() {
        this.node.angle = -Math.floor(361 * Math.random() + 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  "tv 6-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8445d/dN2NDabY/Gd6yfu+n", "tv 6-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        director: cc.Node,
        txt: cc.Node,
        ban: cc.Node,
        flag: 0,
        music: cc.AudioSource
      },
      onLoad: function onLoad() {},
      cin: function cin() {
        if (1 == this.ban.getComponent("ban 6-1").flag && 0 == this.flag) {
          this.flag = 1;
          if (1 == this.director.getComponent("director 6-1").num) {
            this.exchang_1();
            this.txt.getComponent(cc.Label).string = 1;
            this.txt.active = true;
            cc.log(this.txt);
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          } else if (2 == this.director.getComponent("director 6-1").num) {
            this.exchang_2();
            this.txt.getComponent(cc.Label).string = 2;
            this.txt.active = true;
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          } else if (3 == this.director.getComponent("director 6-1").num) {
            this.exchang_3();
            this.txt.getComponent(cc.Label).string = 3;
            this.txt.active = true;
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          } else if (4 == this.director.getComponent("director 6-1").num) {
            this.exchang_4();
            this.txt.getComponent(cc.Label).string = 4;
            this.txt.active = true;
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          } else if (5 == this.director.getComponent("director 6-1").num) {
            this.exchang_5();
            this.txt.getComponent(cc.Label).string = 5;
            this.txt.active = true;
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          } else if (6 == this.director.getComponent("director 6-1").num) {
            this.exchang_6();
            this.txt.getComponent(cc.Label).string = 6;
            this.txt.active = true;
            this.director.getComponent("director 6-1").num++;
            this.music.play();
          }
        }
      },
      init: function init() {
        this.node.color = (100, 100, 100);
      },
      exchang_1: function exchang_1() {
        this.node.color = cc.Color.RED;
        var action = cc.tintTo(1, 255, 69, 255);
        this.node.runAction(action);
      },
      exchang_2: function exchang_2() {
        this.node.color = cc.Color.GREEN;
        var action = cc.tintTo(1, 0, 255, 255);
        this.node.runAction(action);
      },
      exchang_3: function exchang_3() {
        this.node.color = cc.Color.RED;
        var action = cc.tintTo(1, 224, 255, 0);
        this.node.runAction(action);
      },
      exchang_4: function exchang_4() {
        this.node.color = (245, 261, 13);
        var action = cc.tintTo(1, 245, 13, 22);
        this.node.runAction(action);
      },
      exchang_5: function exchang_5() {
        this.node.color = cc.Color.CYAN;
        var action = cc.tintTo(1, 13, 41, 245);
        this.node.runAction(action);
      },
      exchang_6: function exchang_6() {
        this.node.color = cc.Color.YELLOW;
        var action = cc.tintTo(1, 245, 97, 13);
        this.node.runAction(action);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  uiUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6193vSmHZBEqjL+fv9A6lI", "uiUpdate");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var uiUpdate = function(_super) {
      __extends(uiUpdate, _super);
      function uiUpdate() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      uiUpdate.prototype.start = function() {
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
        cc.log("\u6d4b\u8bd5\u70ed\u66f4\u65b0");
      };
      uiUpdate = __decorate([ ccclass ], uiUpdate);
      return uiUpdate;
    }(cc.Component);
    exports.default = uiUpdate;
    cc._RF.pop();
  }, {} ],
  ui_kefu_info: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a563IHG/1FRolYKomgnQLe", "ui_kefu_info");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ui_kefu_info = function(_super) {
      __extends(ui_kefu_info, _super);
      function ui_kefu_info() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ui_kefu_info.prototype.hide = function() {
        this.node.destroy();
      };
      ui_kefu_info = __decorate([ ccclass ], ui_kefu_info);
      return ui_kefu_info;
    }(cc.Component);
    exports.default = ui_kefu_info;
    cc._RF.pop();
  }, {} ],
  "use_v2.1-2.2.1_cc.Toggle_event": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "775fa0LpbRP9oy+Uk1WB6xr", "use_v2.1-2.2.1_cc.Toggle_event");
    "use strict";
    cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = true);
    cc._RF.pop();
  }, {} ],
  wheel2_bigwheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82261Fr/hZE1KO8CtbmixCl", "wheel2_bigwheel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rot: {
          default: [],
          type: cc.Node
        },
        spicons_flag: 0,
        ren: 0
      },
      onLoad: function onLoad() {
        this.node.on("touchstart", function(event) {
          this.exchange_bk();
        }, this);
      },
      exchange_bk: function exchange_bk() {
        var action1 = cc.repeatForever(cc.rotateBy(5, 360));
        action1.setTag(2);
        var action2 = cc.repeatForever(cc.rotateBy(5, -360));
        action2.setTag(3);
        var action4 = cc.repeatForever(cc.rotateBy(5, -360));
        action4.setTag(4);
        var action5 = cc.repeatForever(cc.rotateBy(5, -360));
        action5.setTag(5);
        var action6 = cc.repeatForever(cc.rotateBy(5, -360));
        action6.setTag(6);
        var action7 = cc.repeatForever(cc.rotateBy(5, -360));
        action7.setTag(7);
        var action8 = cc.repeatForever(cc.rotateBy(5, -360));
        action8.setTag(8);
        var action3 = cc.repeatForever(cc.rotateBy(5, 360));
        action3.setTag(4);
        if (this.spicons_flag < 1) {
          this.rot[0].runAction(action1);
          this.rot[1].runAction(action2);
          this.rot[3].runAction(action4);
          this.rot[4].runAction(action5);
          this.rot[5].runAction(action6);
          this.rot[6].runAction(action7);
          this.rot[7].runAction(action8);
          this.rot[2].runAction(action3);
          this.spicons_flag++;
        } else {
          this.spicons_flag = 0;
          this.rot[0].stopActionByTag(2);
          this.rot[1].stopActionByTag(3);
          this.rot[3].stopActionByTag(4);
          this.rot[4].stopActionByTag(5);
          this.rot[5].stopActionByTag(6);
          this.rot[6].stopActionByTag(7);
          this.rot[7].stopActionByTag(8);
          this.rot[2].stopActionByTag(4);
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  wheel_boxgames: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48f4bm+ia1B8rNUdL2n/+Vc", "wheel_boxgames");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rotateNode: cc.Node,
        isRot: false
      },
      start: function start() {},
      bnt: function bnt() {
        if (this.isRot) return;
        this.isRot = true;
        this.rotateNode.runAction(cc.rotateBy(.2, 60));
        setTimeout(function() {
          this.isRot = false;
        }.bind(this), 200);
      }
    });
    cc._RF.pop();
  }, {} ],
  wire_move: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60896t3ZNtLOIIO9pFSJo2s", "wire_move");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        animstate: null,
        spr: [ cc.SpriteFrame ]
      },
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          this.node.getComponent(cc.Sprite).spriteFrame = this.spr[1];
          null == this.animstate ? this.animstate = this.node.getComponent(cc.Animation).play() : this.node.getComponent(cc.Animation).resume();
          3 != this.node.x && -168 != this.node.y || (this.animstate = null);
        }.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          this.node.getComponent(cc.Sprite).spriteFrame = this.spr[0];
          this.node.getComponent(cc.Animation).pause();
        }.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
          this.node.getComponent(cc.Sprite).spriteFrame = this.spr[0];
          this.node.getComponent(cc.Animation).pause();
        }.bind(this));
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  xieyi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef5ccL/rtJIioOkF1zMVEaF", "xieyi");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var xieyi = function(_super) {
      __extends(xieyi, _super);
      function xieyi() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      xieyi.prototype.onclickFuWu = function() {
        cc.sys.openURL("http://www.redsnail.cn/userAgreement.html");
      };
      xieyi.prototype.onclickXieYi = function() {
        cc.sys.openURL("http://www.redsnail.cn/protocolPrivacy.html");
      };
      xieyi.prototype.hide = function() {
        cc.sys.localStorage.setItem("isFirst", true);
        this.node.active = false;
      };
      xieyi = __decorate([ ccclass ], xieyi);
      return xieyi;
    }(cc.Component);
    exports.default = xieyi;
    cc._RF.pop();
  }, {} ],
  "zhen 3-1-1": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b66b69Oic1J55T36X6bRk35", "zhen 3-1-1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        Animation1: cc.Node,
        Animation2: cc.Node,
        Animation3: cc.Node
      },
      start: function start() {},
      close: function close() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.getComponent(cc.Animation).play();
        this.scheduleOnce(function() {
          this.node.getComponent(cc.AudioSource).play();
          if ("1" == other.node.group) {
            this.Animation1.getComponent(cc.Animation).play();
            this.scheduleOnce(function() {
              this.Animation1.active = false;
            }, 2);
            this.close();
          } else if ("2" == other.node.group) {
            this.Animation2.getComponent(cc.Animation).play();
            this.scheduleOnce(function() {
              this.Animation2.active = false;
            }, 2);
            this.close();
          } else if ("3" == other.node.group) {
            this.Animation3.getComponent(cc.Animation).play();
            this.scheduleOnce(function() {
              this.Animation3.active = false;
            }, 2);
            this.close();
          }
        }, .4);
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "bottles 8-1", "bottles_games", "director_bottles", "eyes", "noses", "newton_game", "snow_select", "snowflake", "wire_move", "BoxPaoPao", "Box_Games", "PaoPaoMgr", "PaoPaoMgr_1", "Tiger", "Zebra", "animals_boxgames", "apple_boxgames", "arrange_boxgames", "arrange_boxgames_Mgr", "balloon_boxgames", "costume_boxgames", "fish_blocks_boxgames", "fishing_boxgames", "hand_boxgames", "insects_boxgames", "shapes_boxgames", "wheel_boxgames", "Games_Butterfly", "Games_Butterfly_Move", "butterfly", "Games_beecircle", "beecircle", "circle", "petal", "Games_beefly", "beefly", "BezierAction", "Dragable", "DrawBezier", "Games_bughunt", "bug", "bug_collision", "clover", "Games_cubes", "cube", "Games_notebugs", "notebug", "Games_outlines", "bug_anim", "Games_trails", "trail", "Gendarmes_bug", "Bug_Games", "Click_Audio", "ChrismasTree_mgr", "close_eys1", "clock_home", "coloring_games1-9", "CompareGames", "matching_1", "touchmove", "director 1-1", "man 1-1", "director 2-1", "run 2-1", "director 3-1-1", "zhen 3-1-1", "drum  4-1", "hero 4-1", "director 5-1", "ban 6-1", "director 6-1", "tv 6-1", "dolls", "chuizi 8-1", "director 8-1", "pingzi 8-1", "director 9-1", "touch 9-1", "child123_open", "end_123games", "home123_open", "JG_main", "JG_match", "JG_module", "ball_417", "director_417", "eye_417", "panzi1_417", "panzi_417", "dolphin_box", "dolphins_Mgr", "dolphins_PZ", "kaliedascopeFang", "kaliedascopeMgr", "kaliedascopeOne", "Pig_box", "LittleGames_back", "LittleGames_child", "LittleGames_drag0", "LittleGames_drag1", "LittleGames_ft", "LittleGames_home", "LittleGames_walk", "theatre_game", "paint_paintgame1-5", "ground_wav_red", "ground_wav_red1", "ShadowGames", "ShadowGames_game_0", "ShadowGames_game_1", "ShadowGames_game_2", "ShadowGames_game_3", "ShadowGames_game_4", "ShadowGames_game_5", "ShadowGames_game_6", "ShadowGames_game_7", "ShadowGames_game_base", "ShapesGames", "ShapesGames_mapItem", "Song_Games", "contrl_sound", "main_sound", "director_SpinGames", "hualun_SpinGames", "player_SpinGames", "star_SpinGames", "Star_Games", "child_Wooden", "exchang2_Wooden", "exchang3_Wooden", "exchang4_Wooden", "exchang_Wooden", "move_Wooden", "close_button", "close_eys", "ground_sound", "ground_sound_1", "kidshome_backhome", "kidshome_child", "use_v2.1-2.2.1_cc.Toggle_event", "mushrooms", "mushrooms_item", "1_PianoGames", "2_PianoGames", "3_PianoGames", "button_PianoGames", "director_PianoGames", "hotupdate", "uiUpdate", "ui_kefu_info", "balloon_ball", "cloth_ball", "eye_ball", "man_ball", "peng_bigwheel", "wheel2_bigwheel", "ball_915", "move_417", "drag_bungee", "drawline2_bungee", "drawline_bungee", "butter_910", "prefab_910", "director_duck", "duck", "NewScript_fish", "fish_games", "touch_fish", "flower_417", "control0", "control1", "control2", "puzzle_backhome", "puzzle_child_open", "director_qingting", "qinting", "director_929", "director_recycling", "trash_recycling", "string_rocket", "xieyi" ]);