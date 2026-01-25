from typing import List

def merge_customer_data(customerData1: List[int], m: int,
                        customerData2: List[int], n: int) -> None:
    """
    Merge customerData2 into customerData1 in-place.
    customerData1 has length m+n (last n spots are placeholders).
    """

    i = m - 1          # last real item in customerData1
    j = n - 1          # last item in customerData2
    k = m + n - 1      # last index in customerData1

    # Only need to place all items from customerData2.
    while j >= 0:
        if i >= 0 and customerData1[i] > customerData2[j]:
            customerData1[k] = customerData1[i]
            i -= 1
        else:
            customerData1[k] = customerData2[j]
            j -= 1
        k -= 1
