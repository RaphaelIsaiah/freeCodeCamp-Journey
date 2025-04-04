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
wc kitty_ipsum_1.txt -m 
wc kitty_ipsum_1.txt
cat kitty_ipsum_1.txt | wc
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
grep 'meow[a-z]*' kitty_ipsum_1.txt -n -c
man grep OR grep --help
grep 'meow[a-z]*' kitty_ipsum_1.txt -o -n
grep 'meow[a-z]*' kitty_ipsum_1.txt -o | wc -l
grep 'meow[a-z]*' kitty_ipsum_1.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_1.txt -n 
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
grep 'cat[a-z]*' kitty_ipsum_1.txt --color -o
grep 'cat[a-z]*' kitty_ipsum_1.txt -o | wc -l
grep 'cat[a-z]*' kitty_ipsum_1.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_1.txt -n
grep 'cat[a-z]*' kitty_ipsum_1.txt -n | sed 's/([0-9]+).*/\1/' -E
grep 'cat[a-z]*' kitty_ipsum_1.txt -n | sed 's/([0-9]+).*/\1/' -E >> kitty_info.txt
echo -e "\n\n~~ kitty_ipsum_2.txt info ~~" >>kitty_info.txt
echo -e "\nNumber of lines:" >>kitty_info.txt
cat kitty_ipsum_2.txt | wc -l >>kitty_info.txt
echo -e "\nNumber of words:" >>kitty_info.txt
wc -w <kitty_ipsum_2.txt >>kitty_info.txt
echo -e "\nNumber of characters:" >>kitty_info.txt
wc -m <kitty_ipsum_2.txt >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_2.txt --color
echo -e "\nNumber of times meow or meowzer appears:" >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_2.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'meow[a-z]*' kitty_ipsum_2.txt -n | sed 's/([0-9]+).*/\1/' -E >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_2.txt --color
echo -e "\nNumber of times cat, cats, or catnip appears:" >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_2.txt -o | wc -l >>kitty_info.txt
echo -e "\nLines that they appear on:" >>kitty_info.txt
grep 'cat[a-z]*' kitty_ipsum_2.txt -n | sed 's/([0-9]+).*/\1/' -E >>kitty_info.txt
# commands for the translate.sh file.
touch translate.sh
chmod +x translate.sh
Add shebang #!/bin/bash
cat $1
./translate.sh kitty_ipsum_1.txt
./translate.sh <kitty_ipsum_1.txt
cat kitty_ipsum_1.txt | ./translate.sh
./translate.sh kitty_ipsum_1.txt
./translate.sh kitty_ipsum_1.txt | grep 'dogchow' --color
./translate.sh kitty_ipsum_1.txt | grep 'catnip' --color
./translate.sh kitty_ipsum_1.txt | grep 'catnip' --color
./translate.sh kitty_ipsum_1.txt | grep 'dog[a-z]*' --color
./translate.sh kitty_ipsum_1.txt | grep 'cat[a-z]*' --color
./translate.sh kitty_ipsum_1.txt | grep 'dog[a-z]*|woof[a-z]*' --color -E
./translate.sh kitty_ipsum_1.txt | grep 'dog[a-z]*|woof[a-z]*' --color -E
./translate.sh kitty_ipsum_1.txt | grep 'dog[a-z]*|woof[a-z]*' --color -E
./translate.sh kitty_ipsum_1.txt | grep 'meow[a-z]*|cat[a-z]*' --color -E
./translate.sh kitty_ipsum_2.txt | grep 'meow[a-z]*|cat[a-z]*' --color -E
./translate.sh kitty_ipsum_1.txt >doggy_ipsum_1.txt
cat doggy_ipsum_1.txt
diff kitty_ipsum_1.txt doggy_ipsum_1.txt
man diff OR diff --help
diff kitty_ipsum_1.txt doggy_ipsum_1.txt --color
./translate.sh kitty_ipsum_2.txt >doggy_ipsum_2.txt
cat doggy_ipsum_2.txt
diff kitty_ipsum_2.txt doggy_ipsum_2.txt --color
