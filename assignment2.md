---
layout: page
title: Assignment2
permalink: /assignment2/
---


Resources
---------

### Use the MSA 

```
var msa = require("msa");
var opts = {
  el: document.getElementById('snippetDiv'), // DOM element into which you want to load the MSA
  importURL: "https://cdn.rawgit.com/greenify/msa/master/snippets/data/fer1.clustal", // which file to load: fasta, clustal
  bootstrapMenu: true, // optional - builds a simplified menu
};
var m = new msa(opts);
```

* [Demos](http://biojs.io/d/msa)
* [Documentation](https://github.com/greenify/msa)

### Use the Tree viewer
