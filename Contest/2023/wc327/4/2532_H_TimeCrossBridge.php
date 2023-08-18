<?php
/**
 * 01/11/23 night
 * https://leetcode.com/contest/weekly-contest-327/problems/time-to-cross-a-bridge/
 */
 
function pr($x) { echo $x.PHP_EOL; }

class Worker {
    public $startTime;
    public $endTime;
    public $idx;
    public $LR;
    public $pickOld;
    public $RL;
    public $putNew;
    function __construct($startTime, $endTime, $idx, $LR, $pickOld, $RL, $putNew) {
        $this->startTime = $startTime;
        $this->endTime = $endTime;
        $this->idx = $idx;
        $this->LR = $LR;
        $this->pickOld = $pickOld;
        $this->RL = $RL;
        $this->putNew = $putNew;
    }
    function show() {
        return $this->startTime." ".$this->endTime." ".$this->idx." ".$this->LR." ".$this->pickOld." ".$this->RL." ".$this->putNew;
    }
}

class MinHeap extends SplHeap {
    function compare($x, $y) {
        return $y->startTime - $x->startTime;
    }
}

class MaxHeap extends SplHeap { // PHP is opposite to Java and JS
    function compare($x, $y) {
        // pr(($x->LR." ".$x->RL." ".$y->LR." ".$y->RL." cmp: ".(($y->LR + $y->RL) - ($x->LR + $x->RL))));
        if ($x->endTime != $y->endTime) return $x->endTime - $y->endTime;
        if ($x->LR + $x->RL != $y->LR + $y->RL) return ($x->LR + $x->RL) - ($y->LR + $y->RL);
        if ($x->idx != $y->idx) return $x->idx - $y->idx;
    }
}

// Accepted
class Solution {
    function findCrossingTime($n, $k, $time) {
        $collect = new SplMinHeap(); // Also Accepted
        // $collect = new MinHeap();
        $waiting = new MaxHeap();
        for ($i = 0; $i < sizeof($time); $i++) {
            $item = new Worker(0, 0, $i, $time[$i][0], $time[$i][1], $time[$i][2], $time[$i][3]);
            // pr($item->show());
            $collect->insert($item);
        }
        $clock = 0;
        $np = $n;
        // pr($collect->count());
        while (1) {
           if ($waiting->count() == 0 && $collect->top()->startTime > $clock) $clock = $collect->top()->startTime;
           while ($collect->count() && $collect->top()->startTime <= $clock) $waiting->insert($collect->extract());
           $cur = $waiting->extract();
           // pr($cur->show());
           if ($cur->endTime != 0 || $np != 0) {
             $nextClock = 0;
             if ($cur->endTime == 0) {
                $np--;
                $cur->endTime = 1;
                $nextClock = $clock + $cur->LR;
                $cur->startTime = $clock + $cur->LR + $cur->pickOld;
             } else {
                if (--$n == 0) return $clock + $cur->RL;
                $cur->endTime = 0;
                $nextClock = $clock + $cur->RL;
                $cur->startTime = $clock + $cur->RL + $cur->putNew;
             }
             $clock = $nextClock;
             $collect->insert($cur);
           }
        }
    }
}



function main() {
    $sol = new Solution();
    $n = 1; $k = 3; $time = array(array(1,1,2,1),array(1,1,3,1),array(1,1,4,1));
    $n2 = 3; $k2 = 2; $time2 = array(array(1,9,1,8),array(10,10,10,10));
    $n_debug1 = 10; $k_debug1 = 6; $time_debug1 = array(
        array(2,10,5,8),
        array(3,5,2,2), 
        array(5,8,10,10),
        array(7,8,8,5),
        array(5,6,6,10),
        array(6,10,6,2),
    );
    pr($sol->findCrossingTime($n, $k, $time));
    pr($sol->findCrossingTime($n2, $k2, $time2));
    pr($sol->findCrossingTime($n_debug1, $k_debug1, $time_debug1)); // 149
}
 
main();