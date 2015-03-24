---
layout: page
title: Assignment 1
permalink: /assignment1/
order: 5
---

Resources
---------

### Use NtSeq

index.html

```
<meta charset="UTF-8">
<script src="bundle.js"></script>
<textarea id="txt-input">
AAACCTTTTAAAAA
</textarea>
<p>
<button id="btn-convert">Convert</button>
</p>
<textarea id="txt-output"></textarea>
```

index.js

```
var nt = require("ntseq");

var input = document.getElementById("txt-input");
var output = document.getElementById("txt-output");
var btn = document.getElementById("btn-convert");

function updateBox(){
  var seq = new nt.Seq();
  seq.read(input.value);
  output.value =  seq.translate();
}

input.addEventListener("change", updateBox);
btn.addEventListener("click", updateBox);
```

<a class="jsbin-embed" href="http://jsbin.com/titiyu/1/embed?js,output&height=350px">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

### Use a parser

index.html

```
<meta charset="UTF-8">
<script src="bundle.js"></script>
<textarea id="txt-output" style="width:80%; height: 200px">
>sp|Q8VY26|CCD8_ARATH Carotenoid cleavage dioxygenase 8, chloroplastic OS=Arabidopsis thaliana GN=CCD8 PE=1 SV=1
MASLITTKAMMSHHHVLSSTRITTLYSDNSIGDQQIKTKPQVPHRLFARRIFGVTRAVIN</textarea>
<p>
<button id="btn-convert">Convert</button>
</p>
<textarea id="txt-output" style="width:80%; height: 200px"></textarea>
```

index.js

```
var parser = require("biojs-io-fasta");

var input = document.getElementById("txt-input");
var output = document.getElementById("txt-output");
var btn = document.getElementById("btn-convert");

function updateBox(){
  i2.value = JSON.stringify(parser.parse(i1.value));
}

input.addEventListener("change", updateBox);
btn.addEventListener("click", updateBox);
```

<a class="jsbin-embed" href="http://jsbin.com/nazufe/2/embed?js,output&height=350px">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

