// 03/18/21 evening

#include <iostream>
#include <queue>
#include <vector>
using namespace std;

// TLE 16/18
class MedianFinder {
public:
	priority_queue<int, vector<int>, greater<int>> pq; // greater working correct, not sure why java has issue
	MedianFinder() {

	}

	void addNum(int num) {
		pq.push(num);
	}

	double findMedian() {
		int n = pq.size();
		int m = n >> 1;
		int i = 0;
		double v, right;
		v = right = 0;
		double left = 0;
		priority_queue<int, vector<int>, greater<int>> pqc = pq;
		while (!pqc.empty()) {
			int cur = pqc.top();
			pqc.pop();
			if (i == m - 1) {
				left = cur;
			} else if (i == m) {
				v = right = cur;
				break;
			}
			i++;
		}
		return n & 1 ? v : (double) (left + right) / 2;
	}
};

// TLE 16/18
class MedianFinder {
public:
	vector<int> v;
	MedianFinder() {

	}

	void addNum(int num) {
		v.push_back(num);
	}

	double findMedian() {
		sort(v.begin(), v.end());
		int n = v.size();
		int m = n >> 1;
		return n & 1 ? v[m] : (double) (v[m - 1] + v[m]) / 2;
	}
};

