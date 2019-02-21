//// [/src/first/bin/.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/first/",
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 142,
          "kind": "text"
        },
        {
          "pos": 142,
          "end": 182,
          "kind": "sourceMapUrl"
        }
      ],
      "sources": {
        "prologues": [
          {
            "file": "/src/first/first_PART1.ts",
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              }
            ]
          }
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 157,
          "kind": "text"
        },
        {
          "pos": 157,
          "end": 199,
          "kind": "sourceMapUrl"
        }
      ]
    }
  }
}

//// [/src/first/bin/.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
text: (15-142)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
sourceMapUrl: (142-182)
//# sourceMappingURL=first-output.js.map
======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
sourceMapUrl: (157-199)
//# sourceMappingURL=first-output.d.ts.map
======================================================================

//// [/src/first/bin/first-output.js]
"use strict";
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>"use strict";
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(2, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(2, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(2, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(2, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(3, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(4, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(4, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(4, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(4, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(4, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(4, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(4, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(4, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(5, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(5, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(5, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(5, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(5, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(5, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(5, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(5, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(5, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(6, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(6, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(6, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(7, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(7, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(7, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(7, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(8, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(8, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);

//// [/src/third/thirdjs/output/.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/third/",
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 13,
          "kind": "prologue",
          "data": "use strict"
        },
        {
          "pos": 15,
          "end": 28,
          "kind": "prologue",
          "data": "myPrologue"
        },
        {
          "pos": 30,
          "end": 44,
          "kind": "prologue",
          "data": "myPrologue2"
        },
        {
          "pos": 46,
          "end": 213,
          "kind": "prepend",
          "data": "/src/first/bin/first-output.js",
          "texts": [
            {
              "pos": 46,
              "end": 173,
              "kind": "text"
            },
            {
              "pos": 173,
              "end": 213,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 215,
          "end": 541,
          "kind": "prepend",
          "data": "/src/2/second-output.js",
          "texts": [
            {
              "pos": 215,
              "end": 500,
              "kind": "text"
            },
            {
              "pos": 500,
              "end": 541,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 543,
          "end": 579,
          "kind": "text"
        },
        {
          "pos": 579,
          "end": 619,
          "kind": "sourceMapUrl"
        }
      ],
      "sources": {
        "prologues": [
          {
            "file": "/src/third/third_part1.ts",
            "text": "",
            "directives": [
              {
                "pos": -1,
                "end": -1,
                "expression": {
                  "pos": -1,
                  "end": -1,
                  "text": "use strict"
                }
              }
            ]
          }
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 199,
          "kind": "prepend",
          "data": "/src/first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            },
            {
              "pos": 157,
              "end": 199,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 201,
          "end": 344,
          "kind": "prepend",
          "data": "/src/2/second-output.d.ts",
          "texts": [
            {
              "pos": 201,
              "end": 301,
              "kind": "text"
            },
            {
              "pos": 301,
              "end": 344,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 346,
          "end": 365,
          "kind": "text"
        },
        {
          "pos": 365,
          "end": 407,
          "kind": "sourceMapUrl"
        }
      ]
    }
  }
}

//// [/src/third/thirdjs/output/.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prologue: (0-13):: use strict
"use strict";
----------------------------------------------------------------------
prologue: (15-28):: myPrologue
"myPrologue";
----------------------------------------------------------------------
prologue: (30-44):: myPrologue2
"myPrologue2";
----------------------------------------------------------------------
prepend: (46-213):: /src/first/bin/first-output.js texts:: 2
>>--------------------------------------------------------------------
text: (46-173)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

>>--------------------------------------------------------------------
sourceMapUrl: (173-213)
//# sourceMappingURL=first-output.js.map
----------------------------------------------------------------------
prepend: (215-541):: /src/2/second-output.js texts:: 2
>>--------------------------------------------------------------------
text: (215-500)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

>>--------------------------------------------------------------------
sourceMapUrl: (500-541)
//# sourceMappingURL=second-output.js.map
----------------------------------------------------------------------
text: (543-579)
var c = new C();
c.doSomething();

----------------------------------------------------------------------
sourceMapUrl: (579-619)
//# sourceMappingURL=third-output.js.map
======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-199):: /src/first/bin/first-output.d.ts texts:: 2
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

>>--------------------------------------------------------------------
sourceMapUrl: (157-199)
//# sourceMappingURL=first-output.d.ts.map
----------------------------------------------------------------------
prepend: (201-344):: /src/2/second-output.d.ts texts:: 2
>>--------------------------------------------------------------------
text: (201-301)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

>>--------------------------------------------------------------------
sourceMapUrl: (301-344)
//# sourceMappingURL=second-output.d.ts.map
----------------------------------------------------------------------
text: (346-365)
declare var c: C;

----------------------------------------------------------------------
sourceMapUrl: (365-407)
//# sourceMappingURL=third-output.d.ts.map
======================================================================

//// [/src/third/thirdjs/output/third-output.js]
"use strict";
"myPrologue";
"myPrologue2";
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../second/second_part1.ts","../../../second/second_part2.ts","../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../third_part1.ts"],"names":[],"mappings":";AAAA,YAAY,CAAA;ACAZ,aAAa,CAAC;ACId,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;AJGD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;;AILD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../second/second_part1.ts,../../../second/second_part2.ts,../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>"use strict";
>>>"myPrologue";
1 >
2 >^^^^^^^^^^^^
3 >            ^
4 >             ^^->
1 >
2 >"myPrologue"
3 >            
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 13) Source(1, 13) + SourceIndex(0)
3 >Emitted(2, 14) Source(1, 13) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>"myPrologue2";
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^->
1->
2 >"myPrologue2"
3 >             ;
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
3 >Emitted(3, 15) Source(1, 15) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1->interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(4, 5) Source(5, 7) + SourceIndex(2)
3 >Emitted(4, 6) Source(5, 8) + SourceIndex(2)
4 >Emitted(4, 9) Source(5, 11) + SourceIndex(2)
5 >Emitted(4, 23) Source(5, 25) + SourceIndex(2)
6 >Emitted(4, 24) Source(5, 26) + SourceIndex(2)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(5, 1) Source(11, 1) + SourceIndex(2)
2 >Emitted(5, 8) Source(11, 8) + SourceIndex(2)
3 >Emitted(5, 9) Source(11, 9) + SourceIndex(2)
4 >Emitted(5, 12) Source(11, 12) + SourceIndex(2)
5 >Emitted(5, 13) Source(11, 13) + SourceIndex(2)
6 >Emitted(5, 14) Source(11, 14) + SourceIndex(2)
7 >Emitted(5, 15) Source(11, 15) + SourceIndex(2)
8 >Emitted(5, 16) Source(11, 16) + SourceIndex(2)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(6, 1) Source(12, 1) + SourceIndex(2)
2 >Emitted(6, 8) Source(12, 8) + SourceIndex(2)
3 >Emitted(6, 9) Source(12, 9) + SourceIndex(2)
4 >Emitted(6, 12) Source(12, 12) + SourceIndex(2)
5 >Emitted(6, 13) Source(12, 13) + SourceIndex(2)
6 >Emitted(6, 14) Source(12, 14) + SourceIndex(2)
7 >Emitted(6, 15) Source(12, 15) + SourceIndex(2)
8 >Emitted(6, 16) Source(12, 16) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(7, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(7, 8) Source(1, 8) + SourceIndex(3)
3 >Emitted(7, 9) Source(1, 9) + SourceIndex(3)
4 >Emitted(7, 12) Source(1, 12) + SourceIndex(3)
5 >Emitted(7, 13) Source(1, 13) + SourceIndex(3)
6 >Emitted(7, 14) Source(1, 14) + SourceIndex(3)
7 >Emitted(7, 16) Source(1, 16) + SourceIndex(3)
8 >Emitted(7, 17) Source(1, 17) + SourceIndex(3)
9 >Emitted(7, 18) Source(1, 18) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(8, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(8, 10) Source(1, 10) + SourceIndex(4)
3 >Emitted(8, 11) Source(1, 11) + SourceIndex(4)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(9, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(9, 12) Source(2, 12) + SourceIndex(4)
3 >Emitted(9, 28) Source(2, 28) + SourceIndex(4)
4 >Emitted(9, 29) Source(2, 29) + SourceIndex(4)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(10, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(10, 2) Source(3, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->"myPrologue"
  >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(12, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(12, 5) Source(6, 11) + SourceIndex(0)
3 >Emitted(12, 6) Source(6, 12) + SourceIndex(0)
4 >Emitted(12, 7) Source(12, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(13, 1) Source(6, 1) + SourceIndex(0)
2 >Emitted(13, 12) Source(6, 11) + SourceIndex(0)
3 >Emitted(13, 13) Source(6, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(14, 5) Source(7, 5) + SourceIndex(0)
2 >Emitted(14, 14) Source(7, 14) + SourceIndex(0)
3 >Emitted(14, 15) Source(7, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(15, 9) Source(8, 9) + SourceIndex(0)
2 >Emitted(15, 16) Source(8, 16) + SourceIndex(0)
3 >Emitted(15, 17) Source(8, 17) + SourceIndex(0)
4 >Emitted(15, 20) Source(8, 20) + SourceIndex(0)
5 >Emitted(15, 21) Source(8, 21) + SourceIndex(0)
6 >Emitted(15, 30) Source(8, 30) + SourceIndex(0)
7 >Emitted(15, 31) Source(8, 31) + SourceIndex(0)
8 >Emitted(15, 32) Source(8, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(16, 5) Source(9, 5) + SourceIndex(0)
2 >Emitted(16, 6) Source(9, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(17, 5) Source(11, 5) + SourceIndex(0)
2 >Emitted(17, 6) Source(11, 6) + SourceIndex(0)
3 >Emitted(17, 8) Source(11, 8) + SourceIndex(0)
4 >Emitted(17, 9) Source(11, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(18, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(18, 2) Source(12, 2) + SourceIndex(0)
3 >Emitted(18, 4) Source(6, 11) + SourceIndex(0)
4 >Emitted(18, 5) Source(6, 12) + SourceIndex(0)
5 >Emitted(18, 10) Source(6, 11) + SourceIndex(0)
6 >Emitted(18, 11) Source(6, 12) + SourceIndex(0)
7 >Emitted(18, 19) Source(12, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->"myPrologue2";
  >
1->Emitted(19, 1) Source(2, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(20, 5) Source(2, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(21, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(21, 6) Source(6, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(22, 5) Source(3, 5) + SourceIndex(1)
2 >Emitted(22, 28) Source(3, 16) + SourceIndex(1)
3 >Emitted(22, 31) Source(3, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(23, 9) Source(4, 9) + SourceIndex(1)
2 >Emitted(23, 16) Source(4, 16) + SourceIndex(1)
3 >Emitted(23, 17) Source(4, 17) + SourceIndex(1)
4 >Emitted(23, 20) Source(4, 20) + SourceIndex(1)
5 >Emitted(23, 21) Source(4, 21) + SourceIndex(1)
6 >Emitted(23, 41) Source(4, 41) + SourceIndex(1)
7 >Emitted(23, 42) Source(4, 42) + SourceIndex(1)
8 >Emitted(23, 43) Source(4, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(24, 5) Source(5, 5) + SourceIndex(1)
2 >Emitted(24, 6) Source(5, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(25, 5) Source(6, 1) + SourceIndex(1)
2 >Emitted(25, 13) Source(6, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(26, 1) Source(6, 1) + SourceIndex(1)
2 >Emitted(26, 2) Source(6, 2) + SourceIndex(1)
3 >Emitted(26, 2) Source(2, 1) + SourceIndex(1)
4 >Emitted(26, 6) Source(6, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(28, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(28, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(28, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(28, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(28, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(28, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(28, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(28, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(29, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(29, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(29, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(29, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(29, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(29, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

