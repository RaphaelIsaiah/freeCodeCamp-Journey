# Commands for the terminal in the kitty ipsum translator project
echo hello bash >stdout.txt
echo hello bash >>stdout.txt
echo hello bash >stdout.txt
echo >stdout.txt OR >stdout.txt
bad_command
bad_command >stderr.txt
bad_command 2>stderr.txt
echo hello bash 1>stdout.txt
read NAME
echo $NAME
echo $NAME >stdout.txt
echo freeCodeCamp >name.txt
read NAME <name.txt
echo $NAME
echo Morbius | read NAME
echo $NAME
cat
cat name.txt
cat <name.txt
echo Tommy | cat

echo Tommy | ./script.sh
echo Tommy | ./script.sh 2>stderr.txt
echo Tommy | ./script.sh 2>stderr.txt >stdout.txt
./script.sh <name.txt
./script.sh <name.txt 2>stderr.txt
./script.sh <name.txt 2>stderr.txt >stdout.txt
