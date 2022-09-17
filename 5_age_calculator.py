# AGE CALCULATOR

import datetime

dt = datetime.datetime.now()

yob = input('Enter year of birth (YYYY): ').strip()

age = dt.year - int(yob)

print('You are', age, 'years old!')
input()
