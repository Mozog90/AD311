# Merge Customer Data (In-Place)

## What this is

This is a common “merge two sorted lists” problem, but the twist is the final answer has to be stored inside `customerData1`.
`customerData1` has extra space at the end (placeholders) so we can merge in-place.

## Clarifying questions I would ask

- Are both arrays sorted non-decreasing (and can they have duplicates)?
- Is `customerData1` always size `m + n` with the last `n` values as placeholders?
- Do we need to do this in-place (no extra array)? (The prompt says yes.)
- Can `customerData2` be empty? (Handle `n = 0`.)

## Approach (simple explanation)

I use 3 pointers:

- `i = m - 1` (end of the real part of customerData1)
- `j = n - 1` (end of customerData2)
- `k = m + n - 1` (end of customerData1)

I merge from the back so I don’t overwrite values in customerData1 that I still need.

## Complexity

- Time: O(m + n) because each element gets looked at once
- Extra Space: O(1) because it’s in-place

## Tests

This repo includes at least 3 normal test cases and at least 3 edge cases.

Run tests with:

```bash
pytest -q
```
