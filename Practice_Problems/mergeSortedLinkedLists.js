function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    let temp = l3
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2
            l2 = l2.next
        }

        temp = temp.next
    }

    temp.next = l1 || l2;

    return l3.next;
};

let n3 = new Node(10, null);
let n2 = new Node(3, n3);
let n1 = new Node(1, n2);

let L1 = n1;

let n6 = new Node(9, null);
let n5 = new Node(6, n6);
let n4 = new Node(5, n5);
var L2 = n4;

console.log(merge(L1, L2));
