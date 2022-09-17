# CIRCUMFERENCE OF A CIRCLE

import math

r = input('Enter radius (r): ').strip()

circum = 2 * math.pi * int(r)
circum_f = round(circum, 2)

print('The circumference of the circle is', circum_f)
input()
