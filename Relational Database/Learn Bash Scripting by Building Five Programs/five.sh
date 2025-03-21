#!/bin/bash
# Program to run my other four programs

# Ensure scripts are executable
chmod +x questionnaire.sh countdown.sh bingo.sh fortune.sh

./questionnaire.sh

echo -e "\n====================\n"

./countdown.sh 3

echo -e "\n====================\n"

./bingo.sh

echo -e "\n====================\n"

./fortune.sh
