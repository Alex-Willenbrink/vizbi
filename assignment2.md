---
layout: page
title: Assignment2
permalink: /assignment2/
---


Resources
---------

### Use the MSA 

<img src="{{ site.baseurl}}/screenies/msa.jpg" />

Minimal example:

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

A more extended example:


```
var rootDiv = document.getElementById('snippetDiv'); // the root element for the MSA
var msa = require("msa");

// create a msa viewer and a menu bar
var menuDiv = document.createElement('div');
var msaDiv = document.createElement('div');
rootDiv.appendChild(menuDiv);
rootDiv.appendChild(msaDiv);

var url = "https://cdn.rawgit.com/greenify/msa/master/snippets/data/fer1.clustal";
var opts = {
  el: msaDiv
  conf: {
  	dropImport: true // allow to import sequences via drag & drop
  },
  vis: {
  	conserv: false,
  	overviewbox: false,
  	seqlogo: true,
  	metacell: true
  },
  zoomer: {
	labelIdLength: 20
  }
};

// init msa
var m = msa(opts);

m.u.file.importURL(url, function() {
  m.g.zoomer.autoHeight(1000); // auto calcs the height from the sequences (with a cut-off)
  m.render();

  // the menu is independent to the MSA container
  var defMenu = new msa.menu.defaultmenu({
    el: menuDiv,
    msa: m
  });
  defMenu.render();
});
```


### Use the Tree viewer

<img src="{{ site.baseurl}}/screenies/tree.jpg" />

Minimal example: 

```
var xTree = require("exelixis");
var opts = {
	el: document.getElementById('snippetDiv') //DOM element into which you want to load the tree
	tree: {
		data: "(A,(B,C))" //Newick string
	}
}
xTree.createTree(opts);
```

Full example options/settings for the tree:

```
opts = {

		el : document.getElementById("snippetDiv"),
		tree : {
			data : "(homo_sapiens:12,(mus_musculus:12,(danio_rerio:13,(pan_troglodytes:9,(taeniopygia_guttata:10,callithrix_jacchus:11):12):12):10);",	
			width : 500,
			height : 12,
			scale : false,
			layoutInput : "vertical",
		},
		label : {
			fontsize : 12,
			usePics : true, 
			pics : {
				pictureWidth : 30,
				pictureHeight : 40,
			},
		},
		nodes : {
			toggle : true, //allows onClickEvent
			select: true, //allows selections
			size : 5,
			fill : "grey",
			stroke : "black",
			selectedFill : "steelblue",
			selectedSize : 4,
		},
};
```

* [Demos](http://biojs.io/d/exelixis)
* [Documentation](https://github.com/daviddao/exelixis)


