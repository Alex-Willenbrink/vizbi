---
layout: page
title: Assignment 1
permalink: /assignment1/
order: 5
---

API guides
----------

### Parser

tbd

[https://github.com/biojs/biojs-io-parser](https://github.com/biojs/biojs-io-parser)

### NtSeq 

tbd

[https://github.com/keithwhor/NtSeq](https://github.com/keithwhor/NtSeq)

Resources
---------

### Use a parser

index.html

```
<meta charset="UTF-8">
<script src="https://wzrd.in/bundle/biojs-io-fasta@latest"></script>
<textarea id="i1" style="width:80%; height: 200px">
>sp|Q8VY26|CCD8_ARATH Carotenoid cleavage dioxygenase 8, chloroplastic OS=Arabidopsis thaliana GN=CCD8 PE=1 SV=1
MASLITTKAMMSHHHVLSSTRITTLYSDNSIGDQQIKTKPQVPHRLFARRIFGVTRAVIN</textarea>
<p>
<button id="btn-convert">Convert</button>
</p>
<textarea id="i2" style="width:80%; height: 200px"></textarea>
```

index.js

```
var parser = require("biojs-io-fasta");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var btn = document.getElementById("btn-convert");

function updateBox(){
  i2.value = JSON.stringify(parser.parse(i1.value));
}

i1.addEventListener("change", updateBox);
btn.addEventListener("click", updateBox);
```

<a class="jsbin-embed" href="http://jsbin.com/nazufe/1/embed?js,output&height=350px">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

### Use NtSeq

index.html

```
<meta charset="UTF-8">
<script src="https://wzrd.in/bundle/ntseq@latest"></script>
<textarea id="i1">
AAACCTTTTAAAAA
</textarea>
<p>
<button id="btn-convert">Convert</button>
</p>
<textarea id="i2"></textarea>
```

index.js

```
var nt = require("ntseq");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var btn = document.getElementById("btn-convert");

function updateBox(){
  var seq = new nt.Seq();
  seq.read(i1.value);
  i2.value =  seq.translate();
}

i1.addEventListener("change", updateBox);
btn.addEventListener("click", updateBox);
```

<a class="jsbin-embed" href="http://jsbin.com/giqilehito/1/embed?js,output&height=350px">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>
