#for f in *.png; do mv "$f" "${f/Mr Robot _/}"; done
#step 1
#for f in *.json; do mv "$f" "${f/Mr Robot _/}"; done
#for f in *.json; do mv "$f" "${f/Data_/}"; done
for f in *.json; do mv "$f" "${f/.json/}"; done