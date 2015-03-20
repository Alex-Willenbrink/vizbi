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
<textarea id="i1">
>sp|Q8VY26|CCD8_ARATH Carotenoid cleavage dioxygenase 8, chloroplastic OS=Arabidopsis thaliana GN=CCD8 PE=1 SV=1
MASLITTKAMMSHHHVLSSTRITTLYSDNSIGDQQIKTKPQVPHRLFARRIFGVTRAVIN
SAAPSPLPEKEKVEGERRCHVAWTSVQQENWEGELTVQGKIPTWLNGTYLRNGPGLWNIG
DHDFRHLFDGYSTLVKLQFDGGRIFAAHRLLESDAYKAAKKHNRLCYREFSETPKSVIIN
KNPFSGIGEIVRLFSGESLTDNANTGVIKLGDGRVMCLTETQKGSILVDHETLETIGKFE
YDDVLSDHMIQSAHPIVTETEMWTLIPDLVKPGYRVVRMEAGSNKREVVGRVRCRSGSWG
PGWVHSFAVTENYVVIPEMPLRYSVKNLLRAEPTPLYKFEWCPQDGAFIHVMSKLTGEVV
ASVEVPAYVTFHFINAYEEDKNGDGKATVIIADCCEHNADTRILDMLRLDTLRSSHGHDV
LPDARIGRFRIPLDGSKYGKLETAVEAEKHGRAMDMCSINPLYLGQKYRYVYACGAQRPC
NFPNALSKVDIVEKKVKNWHEHGMIPSEPFFVPRPGATHEDDGVVISIVSEENGGSFAIL
LDGSSFEEIARAKFPYGLPYGLHGCWIPKD  
</textarea><br />
<textarea id="i2"></textarea>
```

index.js

```
var parser = require("biojs-io-fasta");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");

i1.addEventListener("focus", function(){
  i2.value = JSON.stringify(parser.parse(i1.value));
})
```

### Use NtSeq

index.html

```
<meta charset="UTF-8">
<script src="https://wzrd.in/bundle/ntseq@latest"></script>
<textarea id="i1">
AAACCTTTTAAAAA
</textarea><br />
<textarea id="i2"></textarea>
```

index.js

```
var nt = require("ntseq");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");

i1.addEventListener("focus", function(){
  var seq = new nt.Seq();
  seq.read(i1.value);
  i2.value =  seq.translate();
})
```
