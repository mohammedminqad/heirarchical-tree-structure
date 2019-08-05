import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];
  addChild;

  ngOnInit() {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }

  addChildren(node) {
    node.addChildren = true;
    node.showChildren = true;
  }
  
  addNode(node) {
    let newNode = {
        name: this.addChild,
        showChildren: false,
        addChildren: false,
        children: []
    }
    node.children.push(newNode);
    node.addChildren = false;
  }

  cancleNode(node) {
    node.addChildren = false;
    node.showChildren = false;
  }

}
