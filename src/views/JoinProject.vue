<template>
  <div class="whole">
    <div class="wrapper">
      <head>
        <meta name="viewport"
          content="width=320,
            height=480,
            initial-scale=1.0,
            minimum-scale=1.0,
            maximum-scale=2.0,
            user-scalable=yes" />
      </head>
      <div class="logo">
        <img src="LOGO.svg">
      </div>
      <div class="Network">
        <network
          class="network"
          ref="network"
          :nodes="network.nodes"
          :edges="network.edges"
          :options="network.options"
          @click="networkEvent('click')"
          @double-click="networkEvent('doubleClick')"
          @oncontext="networkEvent('oncontext')"
          @hold="networkEvent('hold')"
          @release="networkEvent('release')"
          @select="networkEvent('select')"
          @select-node="networkEvent('selectNode')"
          @select-edge="networkEvent('selectEdge')"
          @deselect-node="networkEvent('deselectNode')"
          @deselect-edge="networkEvent('deselectEdge')"
          @drag-start="networkEvent('dragStart')"
          @dragging="networkEvent('dragging')"
          @drag-end="networkEvent('dragEnd')"
          @hover-node="networkEvent('hoverNode')"
          @blur-node="networkEvent('blurNode')"
          @hover-edge="networkEvent('hoverEdge')"
          @blur-edge="networkEvent('blurEdge')"
          @zoom="networkEvent('zoom')"
          @show-popup="networkEvent('showPopup')"
          @hide-popup="networkEvent('hidePopup')"
          @start-stabilizing="networkEvent('startStabilizing')"
          @stabilization-progress="networkEvent('stabilizationProgress')"
          @stabilization-iterations-done="networkEvent('stabilizationIterationsDone')"
          @stabilized="networkEvent('stabilized')"
          @resize="networkEvent('resize')"
          @init-redraw="networkEvent('initRedraw')"
          @before-drawing="drawBg"
          @after-drawing="networkEvent('afterDrawing')"
          @animation-finished="networkEvent('animationFinished')"
          @config-change="networkEvent('configChange')"
          @nodes-mounted="networkEvent('nodes-mounted')"
          @nodes-add="networkEvent('nodes-add')"
          @nodes-update="networkEvent('nodes-update')"
          @nodes-remove="networkEvent('nodes-remove')"
          @edges-mounted="networkEvent('edges-mounted')"
          @edges-add="networkEvent('edges-add')"
          @edges-update="networkEvent('edges-update')"
          @edges-remove="networkEvent('edges-remove')"
        ></network>
        
      </div>
      <!--<img
        id="scream"
        src="quokka.svg"
        style="display: none;"
        alt="Noth Pole"
      />-->


      <button @click="addNode">Add node</button>
      <!--この機能は使わない
      <button @click="resetNetwork">Reset Network</button>
      <button @click="removeNode">Remove Node</button>
      <button @click="removeEdge">Remove Edge</button>
      -->
    
      <!--これは
        <div class="Conect">
        <h3>Conect video</h3>
        <table>
          <tr>
              <td></td>
              <td><label for="edge-from">From</label></td>
              <td><input id="edge-from" type="text" value="1" /></td>
              <td><label for="edge-to">To</label></td>
              <td><input id="edge-to" type="text" value="4" /></td>
          </tr>
        </table>
        <button @click="addEdge">Add</button>
      </div>
      -->
      <Modal :postId="postId" />
    </div>
  </div>
</template>

<script>
import { Network } from "vue-vis-network";
import Modal from "../components/Modal.vue";


let defNodes = [
  { id: 1, label: "Node 1",shape: "image", image: "5.jpg",size:35 },
  { id: 2, label: "Node 2",shape: "image", image: "4.jpg",size:35 },
  { id: 3, label: "Node 3", shape: "image", image: "1.jpg",size:35},
  { id: 4, label: "Node 4", shape: "image", image: "2.jpg",size:35},
  { id: 5, label: "Node 5", shape: "image", image:"3.jpg", size:35}
]

let defEdges = [
        { id: 1, from: 1, to: 3 },
        { id: 2, from: 1, to: 2 },
        { id: 3, from: 2, to: 4 },
        { id: 4, from: 2, to: 5 },
      ]


var idNum = 5   //idを連続的につける

export default {

  data: () => ({
    postId:"",
    networkEvents: "",
    network: {
      nodes: defNodes.slice(0),    //slice():配列の内容代入
      edges: defEdges.slice(0),
      options: {
        outline: 5,
        physics:  false,
        layout: {
          hierarchical: {
            sortMethod: 'directed'
          }
        },
        edges:  {
          color: {
            color:'#000000',
            highlight:'yellow',
            hover: '#fff450',
            inherit: 'from',
            opacity:1.0
          },
          width:3
        },
        nodes: {
          shape: "image",
          size:23,
          color: {
            border: 'black',
            
            highlight: {
              border: 'black',
              background: 'white'
            },
            hover: {
              border: 'orange',
              background: 'grey'
            }
          },
          font:{color:'black'},
          shapeProperties: {
          useBorderWithImage:true
          }
        }
      }
    }
  }),
  components: {
    Network,
    Modal,
  },
  methods: {

    drawBg(ctx) {
      let mapBgWidth = document.getElementById("scream").width;
      let mapBgHeight = document.getElementById("scream").height;
      ctx.drawImage(
        document.getElementById("scream"),
        -mapBgWidth / 2,
        -mapBgHeight / 2
      );
    },
    hide : function () {
      this.$modal.hide('selectNode');
    },
    select(){
      alert("クリックされたよ");
    },
    networkEvent(eventName) {
      if(eventName=="selectNode") {
        const postId=this.$refs.network.getSelectedNodes();
        this.postId=postId[0];
        this.$modal.show('selectNode');
      }
    },
    addNode(params) {
      alert(params+"クリックされたよ");
      const id = ++idNum;
      this.network.nodes.push({ id, label: "Node"+id,shape:"image", image: "1.jpg",size:35 });
      //(ある１つのNodeが削除されても、)idは+1ずつされていく
    },
    addEdge() {
      let n1 = document.getElementById("edge-from").value-1;
      let n2 = document.getElementById("edge-to").value-1;
      this.network.edges.push({
        id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
        from: this.network.nodes[n1].id,
        to: this.network.nodes[n2].id
      });
      //同じ組み合わせの数字を2回打つとエラーになる
    },
    resetNetwork() {
      this.network = {
        nodes: defNodes.slice(0),
        edges: defEdges.slice(0),
        options: {},
      };
      idNum=5   //resetされるとidNumは5に初期化する
    },
    removeNode() {
      this.network.nodes.splice(0, 1);
    },
    removeEdge() {
      this.network.edges.splice(0, 1);
    }
  },
  
};
</script>

<style>
* {
  font-family: sans-serif;
}

.whole{
  min-height: 98vh;
  background-color:#FFA756;
}

.wrapper {
  padding: 20px 20px;
  text-align: center;

}

.logo{
  position:relative;
}
.Network{
  background-color: grey;

}

.network {
  position:relative;
  margin-left: auto;
  margin-right: auto;
  min-height: 70vh;
  height:500px;
  width: device-width;
  border: 1px solid #ccc;
  margin: 5px 0;
}

table {
    margin-left: auto;
    margin-right: auto;
}
button{
    margin-left: auto;
    margin-right: auto;
}


</style>
