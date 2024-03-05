import java .io.*;
import java.util.*;
 
class LinkedList{
    Node head;

    class Node{
        int data;
        Node next;
        Node(int d){
            data=d;
            next=null;
        }
    }


    void append(int new_data){
        Node new_node = new Node(new_data);
        while(head == null){
            head=new Node(new_data);
            return;
        }
        new_node.next=null;

        Node last  =head;
        while(last.next!=null){
            last=last.next;
        }
        last.next=new_node;
        return;
    }

    void printList(){
        Node tnode= head;
        while(tnode!=null){
            System.out.println(tnode.data + " ");
            tnode=tnode.next;
        }
        System.out.println();
    }

    public static void main(String[] args){
        LinkedList ll = new LinkedList();
        ll.append(6); // add at last in linkedlist
      //  ll.push(7);//add first in linkedlist

        ll.printList();
    }
}