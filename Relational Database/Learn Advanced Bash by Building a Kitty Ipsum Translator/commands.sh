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

cat kitty_ipsum_1.txt
cat kitty_ipsum_2.txt
wc kitty_ipsum_1.txt
wc --help OR man wc
wc kitty_ipsum_1.txt -l
wc kitty_ipsum_1.txt -w
cat kitty_ipsum_1.txt >wc
wc <kitty_ipsum_1.txt
echo "~~ kitty_ipsum_1.txt info ~~" >kitty_info.txt
echo -e "\nNumber of lines:" >>kitty_info.txt
cat kitty_ipsum_1.txt | wc -l >>kitty_info.txt
echo -e "\nNumber of words:" >>kitty_info.txt
cat kitty_ipsum_1.txt | wc -w >>kitty_info.txt
echo -e "\nNumber of characters:" >>kitty_info.txt
wc -m <kitty_ipsum_1.txt >>kitty_info.txt
grep 'meow' kitty_ipsum_1.txt
man grep OR grep --help
grep 'meow' kitty_ipsum_1.txt --color
grep 'meow' kitty_ipsum_1.txt -n --color
grep 'meow[a-z]*' kitty_ipsum_1.txt -n --color
echo -e "\nNumber of times meow or meowzer appears:" >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_1.txt -n --color
man grep OR grep --help
grep 'meow[a-z]*' kitty_ipsum_1.txt -n --color
man grep OR grep --help
grep 'meow[a-z]*' kitty_ipsum_1.txt -o | wc -l
grep 'meow[a-z]*' kitty_ipsum_1.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_1.txt -n --color
man grep OR grep --help
cat name.txt
sed 's/r/2/' name.txt
sed 's/free/f233/' name.txt
sed 's/freecodecamp/f233C0d3C@mp/' name.txt
sed 's/freecodecamp/f233C0d3C@mp/i' name.txt
sed 's/freecodecamp/f233C0d3C@mp/i' <name.txt
cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i'
grep 'meow[a-z]*' kitty_ipsum_1.txt -n
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/[0-9]/1/'
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/[0-9]+/1/'
man sed OR sed --help
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/[0-9]+/1/' -E
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/([0-9]+)/\1/' -E
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/([0-9]+).*/\1/' -E
grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed 's/([0-9]+).*/\1/' -E >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_1.txt --color
echo -e "\nNumber of times cat, cats, or catnip appears:" >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_1.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_1.txt -n
grep 'cat[a-z]*' kitty_ipsum_1.txt -n | sed 's/[0-9]+/\1/' -E
grep 'cat[a-z]*' kitty_ipsum_1.txt -n | sed 's/[0-9]+/\1/' -E >>kitty_info.txt

