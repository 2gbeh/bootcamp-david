# CALCULATE PERCENTAGE

p = input('Enter price: ').strip()
d = input('Enter discount(%): ').strip()

price = int(p)
discount = int(d)

ans = (price * discount) / 100
ans_f = '{:,.2f}' . format(ans)

print('The answer is', ans_f)
input()
