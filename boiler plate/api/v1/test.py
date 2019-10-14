num = int(input())
for i in range
arr = []

for x in range(totalNum):
    if x is 0 or x is 1:
        arr.append(1)
        print("pushing 1",arr)
        continue
    if x % 2 is 0:
        arr.append(x)
        print("pushing",x,arr)
        continue
    else:
        arr.append(2)
        print("pushing 2",arr)
        continue
mystring = ''
for x in arr:
    mystring += str(x)+" "

print(mystring)
    