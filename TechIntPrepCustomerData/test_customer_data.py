from customer_data import merge_customer_data

# -----------------------
# Normal test cases
# -----------------------

def test_normal_interleaving():
    a = [101, 104, 107, 0, 0, 0]
    b = [102, 105, 108]
    merge_customer_data(a, 3, b, 3)
    assert a == [101, 102, 104, 105, 107, 108]

def test_normal_all_b_smaller():
    a = [200, 300, 400, 0, 0, 0]
    b = [10, 20, 30]
    merge_customer_data(a, 3, b, 3)
    assert a == [10, 20, 30, 200, 300, 400]

def test_normal_with_duplicates():
    a = [101, 101, 105, 0, 0, 0]
    b = [101, 104, 105]
    merge_customer_data(a, 3, b, 3)
    assert a == [101, 101, 101, 104, 105, 105]

# -----------------------
# Edge test cases
# -----------------------

def test_edge_n_is_zero():
    a = [103]
    b = []
    merge_customer_data(a, 1, b, 0)
    assert a == [103]

def test_edge_m_is_zero():
    a = [0, 0, 0]
    b = [1, 2, 3]
    merge_customer_data(a, 0, b, 3)
    assert a == [1, 2, 3]
    