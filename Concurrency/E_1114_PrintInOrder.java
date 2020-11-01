/**
 * 10.28 afternoon
 * https://leetcode.com/problems/print-in-order/
 */


// Accepted --- 11ms 48.33%
class Foo {

    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        Thread.sleep(50);
        printSecond.run();
    }

    public void third(Runnable printThird) throws InterruptedException {
        Thread.sleep(100);
        printThird.run();
    }
}

// Accepted --- 11ms 48.33%
class Foo {

    public Foo() {
        
    }

    public void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        Thread.sleep(48);
        printSecond.run();
    }

    public void third(Runnable printThird) throws InterruptedException {
        Thread.sleep(80);
        printThird.run();
    }
}


// 10.30 afternoon
// Accepted --- 10ms
// reference: https://leetcode.com/problems/print-in-order/discuss/332890/Java-Basic-semaphore-solution-8ms-36MB
class Foo {
    private Semaphore mutex1; 
    private Semaphore mutex2;
    public Foo() {
        mutex1 = new Semaphore(0);
        mutex2 = new Semaphore(0);
    }

    public void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        mutex1.release();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        mutex1.acquire();
        printSecond.run();
        mutex2.release();
    }

    public void third(Runnable printThird) throws InterruptedException {
        mutex2.acquire();
        printThird.run();
    }
}