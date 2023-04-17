const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #searchInstall = (element,deep) => {
    let res1,res2;
    if (element.left){
      res1 = this.#searchInstall(element.left,deep+1);
    } else return {element, deep};
    if (element.right){
      res2 = this.#searchInstall(element.right,deep+1);
    } else return {element, deep};

    if (res1 && res2){
      if(res1.deep<=res2.deep){
        return res1;
      } else return res2;
    } else {
      if (res1){
        return res1;
      }
      if (res2){
        return res2;
      }
    }
  }

  #searchData = (element,searchedData) => {
    let res1,res2;
    if (element.data === searchedData) {
      return element;
    }

    if (element.left){
      res1 = this.#searchData(element.left,searchedData);
    };
    if (element.right){
      res2 = this.#searchData(element.right,searchedData);
    };

    if (res1){
      return res1;
    }
    if (res2){
      return res2;
    }

    return;
  }

  #searchBeforeData = (element,searchedData) => {
    let res1,res2;

    if (element.left){
      if (element.left.data === searchedData) {
        return element;
      }
      res1 = this.#searchBeforeData(element.left,searchedData);
    };
    if (element.right){
      if (element.right.data === searchedData) {
        return element;
      }
      res2 = this.#searchBeforeData(element.right,searchedData);
    };

    if (res1){
      return res1;
    }
    if (res2){
      return res2;
    }

    return;
  }

  #searchMaxMin = (element,curMax,curMin) => {
    let res1,res2;

    if(element.data>curMax){
      curMax = element.data;
    }
    if(element.data<curMin){
      curMin = element.data;
    }

    if (element.left){
      res1 = this.#searchMaxMin(element.left,curMax,curMin);
      if(res1.curMax>curMax){
        curMax = res1.curMax;
      }
      if(res1.curMin<curMin){
        curMin = res1.curMin;
      }
    };
    if (element.right){
      res2 = this.#searchMaxMin(element.right,curMax,curMin);
      if(res2.curMax>curMax){
        curMax = res2.curMax;
      }
      if(res2.curMin<curMin){
        curMin = res2.curMin;
      }
    };

    return {curMax,curMin}
  }

  constructor(){
    this.memory = null;
  }

  root() {
    return this.memory;
  }

  add(data/* data */) {
    if (!this.memory){
      this.memory = new Node(data);
    } else {
      const res = this.#searchInstall(this.memory,0).element;
      // console.log(this.searchInstall(this.memory));
      if(!res.left){
        res.left= new Node(data);
      } else res.right= new Node(data);
    }
  }

  has(data/* data */) {
    if (!this.memory){
      return false;
    } else {
      const res = this.#searchData(this.memory,data);
      // console.log(res);
      if(!res){
       return false;
      } else return true;;
    }
  }

  find(data/* data */) {
    if (!this.memory){
      return null;
    } else {
      const res = this.#searchData(this.memory,data);
      // console.log(res);
      if(!res){
       return null;
      } else return res;;
    }
  }

  remove(data/* data */) {
    if (!this.memory){
      return;
    } 

    if (this.memory.data === data){
      this.memory= null;
      return;
    }

    const res = this.#searchBeforeData(this.memory,data);
    if(res.left.data===data){
        res.left = null;
        return;
    } else {
        res.right = null
        return;
    };
  }

  min() {
    if (!this.memory){
      return null;
    } else {
      const res = this.#searchMaxMin(this.memory,this.memory.data,this.memory.data);
      return res.curMin;
    }
  }

  max() {
    if (!this.memory){
      return null;
    } else {
      const res = this.#searchMaxMin(this.memory,this.memory.data,this.memory.data);
      return res.curMax;
    }
  }
}

module.exports = {
  BinarySearchTree
};