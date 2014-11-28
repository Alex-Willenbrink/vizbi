
var Clustal = require("biojs-io-clustal");
var msa = require("biojs-vis-msa");
var tntTree = require("biojs-vis-tree");
var Newick = require("biojs-io-newick");

var tree_vis = tntTree.tree();
var tree_vis2 = tntTree.tree();

var msaEl = document.getElementById("msa");
var tntEl = document.getElementById("tnt");
var tntEl2 = document.getElementById("tnt2");

Clustal.read("http://www.corsproxy.com/rostlab.org/~goldberg/jalv_example.clustal", function(seqs){

  var opts = {};

  // set your custom properties
  // @see: https://github.com/greenify/biojs-vis-msa/tree/master/src/g 
  opts.seqs = seqs; //msa.utils.seqgen.getDummySequences(1000,300);
  opts.el = msaEl;
  opts.vis = {conserv: false, overviewbox: false, seqlogo: false};
  opts.zoomer = {alignmentHeight: 280, alignmentWidth: opts.el.offsetWidth -130, labelWidth: 130,labelFontsize: "13px",labelIdLength: 20,   menuFontsize: "12px",menuMarginLeft: "3px", menuPadding: "3px 4px 3px 4px", menuItemFontsize: "14px", menuItemLineHeight: "14px"};

  // init msa
  var m = new msa.msa(opts);

  /*
  // the menu is independent to the MSA container
  var menuOpts = {};
  menuOpts.el = document.getElementById('div');
  menuOpts.msa = m;
  var defMenu = new msa.menu.defaultmenu(menuOpts);
  m.addView("menu", defMenu);
  */

  // call render at the end to display the whole MSA
  m.render();

  m.g.on("row:click", function(data){
    var seqId = data.seqId;
    var root = tree_vis.root();
    var node = root.find_node_by_name(seqId);
    console.log(node.data());
    node.toggle();
    tree_vis.update();
  });

  tntEl.style.marginTop = "-50px";
  tntEl.style.textAlign= "center";
  tntEl2.style.textAlign= "center";

  data = {"name": "root", children: [{"name": "c1", children: seqs.filter(function(f,i){return i % 2 == 0 })},
    {"name": "c2", children: seqs.filter(function(f,i){return i % 2 == 1 })}]};

  // tree 1
    tree_vis.data(data).layout(tntTree.tree.layout.radial().width(tntEl.offsetWidth * 0.9).scale(false));
    tree_vis.on_click(function(node) {
      hack(m,node);
      //node.toggle();
      tree_vis.update();
    });
    tree_vis.label().height(function() {
      return 20;
    });
    tree_vis(tntEl);

    // tree 2
    tree_vis2.data(data).layout(tntTree.tree.layout.vertical().width(tntEl.offsetWidth * 0.6).scale(false));
    tree_vis2.on_click(function(node) {
      hack(m,node);
      //node.toggle();
      tree_vis2.update();
    });
    tree_vis2.label().height(function() {
      return 20;
    });
    tree_vis2(tntEl2);



});


function hack(m,node){
  // sT
  var toggled = false;

  var childs = node.get_all_nodes();
  var ids = [];

  if(childs.length == 1){
    ids.push(node.data().name);
  }

  // reduce
  for(var i=1;i < childs.length;i++){
    ids.push(childs[i].data().name);
  }

  // convert to selection
  var sel = [];
  for(var i=0;i < ids.length;i++){
    sel.push(new msa.selection.rowsel({seqId:ids[i]}));
    var seq = m.seqs.where({id:ids[i]})[0];
    if(seq === undefined){
      continue
    }else{

      console.log("hidden");
      if(toggled){
        seq.set('hidden', false);
      }else{
        seq.set('hidden', true);
      }
    }
  }

  console.log(sel);
  m.g.selcol.reset(sel);
  console.log(ids);
  console.log(node.data());
  console.log(node);
}
