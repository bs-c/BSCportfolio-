---
title: "複雜度"
date: "2026-01-20"
category: "DEV"
lang: "繁中"
description: "複雜度筆記"
---

# 複雜度、Big O、BIG Omega、BIG Theta

複雜度(compleity)

描述演算法與其、參數的關係，可分為時間複雜度與空間複雜度

1.時間複雜度(**time complexity**):

演算法所需的時間，但考慮同一演算法在同一台電腦上每次運行時間不同，以及同一演算法在不同硬體條件運行時間也不相同，一般會以運算元的多寡作為評斷標準

2.空間複雜度(**space complexity**):

演算法所需記憶體空間

BIG O

用來描述當input size特別大(即最糟糕情況)的時候，演算法的複雜度以判斷演算法的優劣

其正視定義如下:

$$
f(n)=O(g(n))\quad iff\quad \exists \mathrm{R^{+}} \quad c,n_0\quad s.t.\quad 0\le f(n)\le c\cdot g(n) ,\quad \forall n\ge n_0
$$

f(n)=O(g(n)) if and only if ∃ c,

如何計算演算法之BIG O

1. 係數可忽略，改以1計算 f(n)=3n ⇒O(n)
2. 次方數較小的的項可忽略 f(n)=3n^2+6n+4 ⇒O(n^2)
3. log底數可忽略

   $\log_2n$ ⇒ O(logn)

BIG Omega

$$
f(n)=\Omega(g(n))\quad iff\quad \exists \mathrm{R^{+}} \quad c,n_0\quad s.t.\quad 0\le c\cdot g(n)\le f(n) ,\quad \forall n\ge n_0
$$

BIG Theta

$$
f(n)=\Theta(g(n))\quad iff\quad \exists \mathrm{R^{+}} \quad c_1,c_2,n_0\quad s.t.\quad 0\le c_1\cdot g(n)\le  f(n)  \le c_2\cdot g(n),\quad \forall n\ge n_0
$$

**Big O、Big Ω、Big θ三者的比較:**

BigO:看upperbound

**Big Ω:**看lowerbound

**Big θ:同時看**upperbound與lowerbound
