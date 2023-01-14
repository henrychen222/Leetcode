<?php
/**
 * 01/11/23 night
 * https://leetcode.com/contest/weekly-contest-327/problems/time-to-cross-a-bridge/
 */

error_reporting(E_ERROR | E_PARSE); // ignore warning

function pr($x) { echo $x.PHP_EOL; }
function pra($a) { echo json_encode($a).PHP_EOL; }

class TreeSet {
    public $m;
    function __construct() {
        $this->m = array();
    }
    function add($x) {
        $this->m[$x] = $x;
    }
    function remove($x) {
        unset($this->m[$x]);
    }
    function first() {
        asort($this->m);
        return array_values($this->m)[0];
    }
    function last() {
        asort($this->m);
        return array_values($this->m)[sizeof($this->m) - 1];
    }
    function size() {
        return sizeof($this->m);
    }
}

// issue
class DinnerPlates {
    public $n;
    public $used;
    public $notfull;
    public $g;
    public $cap;
    function __construct($capacity) {
        $this->n = 100;
        $this->used = new TreeSet();
        $this->notfull = new TreeSet();
        $this->g = array();
        $this->cap = $capacity;
        for ($i = 0; $i < $this->n; $i++) {
           array_push($this->g, array());
           $this->notfull->add($i);
        }
    }
    function push($v) {
        $idx = $this->notfull->size() == 0 ? 0 : $this->notfull->first();
        // pr("notfull: ".$this->notfull->size()." idx:".$idx);
        array_push($this->g[$idx], $v);
        $this->used->add($idx);
        // pr($this->used->size()." ".sizeof($this->g[$idx]));
        if (sizeof($this->g[$idx]) == $this->cap) $this->notfull->remove($idx);
    }
    function pop() {
        return $this->used->size() == 0 ? -1 : $this->popAtStack($this->used->last());
    }
    function popAtStack($idx) {
        if (sizeof($this->g[$idx]) == 0) return -1;
        $res = array_pop($this->g[$idx]);
        // pra($this->g[$idx]);
        $this->notfull->add($idx);
        if (sizeof($this->g[$idx]) == 0) $this->used->remove($idx);
        return $res;
    }
}


function main () {
    $D = new DinnerPlates(2);
    $D->push(1);
    $D->push(2);
    $D->push(3);
    $D->push(4);
    $D->push(5);
    pr($D->popAtStack(0)); // 2
    $D->push(20);
    $D->push(21);
    pr($D->popAtStack(0)); // 20
    pr($D->popAtStack(2)); // 21
    pr($D->pop()); // 5
    pr($D->pop()); // 4
    pr($D->pop()); // 3
    pr($D->pop()); // 1
    pr($D->pop()); // -1
}

main();