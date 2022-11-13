// 04/10/21 night

using ll = long long;

struct node
{
	node* son[2], * pre;
	int val;
	ll sum;
	int size;
	node();
};

node* nil = new node;

node::node()
{
	son[0] = son[1] = pre = nil;
	val = 0;
	sum = 0;
	size = 0;
}

struct splay_tree
{

	node* root;

	splay_tree()
	{
		nil->son[0] = nil->son[1] = nil->pre = nil;
		root = nil;
	}

	void update(node* x)
	{
		x->size = x->son[0]->size + x->son[1]->size + 1;
		x->sum = x->son[0]->sum + x->son[1]->sum + x->val;
	}

	void rotate(node* x, int p)
	{
		node* y = x->pre;
		if (x->son[p] != nil)
			x->son[p]->pre = y;
		y->son[p ^ 1] = x->son[p];
		x->son[p] = y;
		if (y == y->pre->son[0])
			y->pre->son[0] = x;
		else if (y == y->pre->son[1])
			y->pre->son[1] = x;
		x->pre = y->pre;
		y->pre = x;
		update(y);
		update(x);
	}

	void splay(node* x, node* p = nil)
	{
		while (x->pre != p)
		{
			node* y = x->pre;
			if (y->pre == p)
				if (x == y->son[0])
					rotate(x, 1);
				else
					rotate(x, 0);
			else
				if (y == y->pre->son[0])
					if (x == y->son[0])
					{
						rotate(y, 1);
						rotate(x, 1);
					}
					else
					{
						rotate(x, 0);
						rotate(x, 1);
					}
				else
					if (x == y->son[0])
					{
						rotate(x, 1);
						rotate(x, 0);
					}
					else
					{
						rotate(y, 0);
						rotate(x, 0);
					}
		}
		if (p == nil) root = x;
	}

	node* insert(int v)
	{
		if (root == nil)
		{
			root = new node;
			root->val = v;
			root->sum = v;
			root->size = 1;
			return root;
		}
		node* x = root;
		while (1)
		{
			if (x->val > v)
			{
				if (x->son[0] == nil)
				{
					x->son[0] = new node;
					x->son[0]->pre = x;
					x = x->son[0];
					x->val = v;
					x->sum = v;
					x->size = 1;
					break;
				}
				x = x->son[0];
			}
			else
			{
				if (x->son[1] == nil)
				{
					x->son[1] = new node;
					x->son[1]->pre = x;
					x = x->son[1];
					x->val = v;
					x->sum = v;
					x->size = 1;
					break;
				}
				x = x->son[1];
			}
		}
		splay(x);
		return x;
	}

	node* last_node(node* x)
	{
		node* p = x->son[0];
		while (p->son[1] != nil) p = p->son[1];
		return p;
	}

	node* next_node(node* x)
	{
		node* p = x->son[1];
		while (p->son[0] != nil) p = p->son[0];
		return p;
	}

	void erase(node* x)
	{
		splay(x);
		node* L = last_node(x);
		node* R = next_node(x);
		if (L == nil && R == nil)
		{
			root = nil;
		}
		else if (L == nil)
		{
			splay(R);
			R->son[0] = nil;
			update(R);
		}
		else if (R == nil)
		{
			splay(L);
			L->son[1] = nil;
			update(L);
		}
		else
		{
			splay(L);
			splay(R, L);
			R->son[0] = nil;
			update(R);
			update(L);
		}
	}

	node* get_last(node* x)
	{
		splay(x);
		node* p = last_node(x);
		if (p != nil) splay(p);
		return p;
	}

	node* get_next(node* x)
	{
		splay(x);
		node* p = next_node(x);
		if (p != nil) splay(p);
		return p;
	}

	void erase(int val)
	{
		node* it = root;
		while (it != nil)
		{
			if (it->val == val)
			{
				erase(it);
				return;
			}
			if (it->val > val)
			{
				it = it->son[0];
			}
			else
			{
				it = it->son[1];
			}
		}
	}

	node* getKth(int k)
	{
		node* it = root;
		while (it != nil)
		{
			if (it->son[0]->size + 1 == k)
			{
				break;
			}
			if (it->son[0]->size >= k)
				it = it->son[0];
			else
			{
				k -= it->son[0]->size + 1;
				it = it->son[1];
			}
		}
		splay(it);
		return it;
	}
};

class MKAverage {
public:
	int m, k;
	vector<int> v;
	splay_tree T;
	MKAverage(int m, int k) {
		this->m = m;
		this->k = k;
	}

	void addElement(int x) {
		v.push_back(x);
		T.insert(x);
		if (v.size() > m)
		{
			T.erase(v[v.size() - m - 1]);
		}
	}

	int calculateMKAverage() {
		if (v.size() < m) return -1;
		ll res = T.root->sum;
		{
			node* it = T.getKth(k + 1);
			res -= it->son[0]->sum;
		}
		{
			node* it = T.getKth(m - k);
			res -= it->son[1]->sum;
		}
		return res / (m - 2 * k);
	}
};