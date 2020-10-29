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
