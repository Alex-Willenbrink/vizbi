---
layout: page
title: Assignment 2
permalink: /assignment2/
order: 5
---

Resources
---------

### Use the MSA 

```
var msa  = require("msa");
var m = new msa({el: document.body});
m.u.file.importURL("https://raw.githubusercontent.com/greenify/biojs-io-fasta/master/test/foo.fasta", function(){
    m.render();
});
```

