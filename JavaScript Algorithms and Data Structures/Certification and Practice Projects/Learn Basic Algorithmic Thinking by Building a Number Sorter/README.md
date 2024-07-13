# Description

- In computer science, there are fundamental sorting algorithms that all developers should learn. In this number sorter project, you'll learn how to implement and visualize different sorting algorithms like bubble sort, selection sort, and insertion sort – all with JavaScript.
- This project will help you understand the fundamental concepts behind these algorithms, and how you can apply them to sort numerical data in web applications.

# Notes

- Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array. Here is an example of a function that has a fallback value:
  Example Code
  const myFunction = (string = "") => {}
- To perform an action on each element in the array, use the method that is meant for iterating over arrays. Use the forEach() method, and pass it an empty callback which takes num and i as the parameters.
- Now you need to actually sort the array. The first sorting algorithm you will implement is the bubble sort, which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.
- Time to implement another sorting algorithm. This time, you'll be implementing a selection sort. Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.
- A selection sort relies on tracking the index of the smallest value in the array. Declare a variable minIndex and set it to i - this ensures that if your current value is the smallest, it will be swapped with itself and not be moved. You will need to be able to reassign the value of minIndex as you iterate through the array. Then, write another for loop, using j as the iterator. This loop needs to start at the index after i and iterate through the rest of the array.
- The last sorting algorithm you will implement is the insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
- An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted. With this in mind, create a for loop that starts at the second element in the array - it should still iterate through the rest of the array.
- For this algorithm, you'll want to use a while loop. This loop needs two conditions:

* First, it should not run beyond the beginning of the array (accessed with j).
* Second, the loop should not run after it finds a value smaller than the current value.To prevent an infinite loop, decrement j inside your loop.

- To sort the elements of an array, you can use the built-in method called .sort(). Therefore, you can update the sortedValues variable by assigning it the result of calling .sort() on the inputValues array.
- The Sort button may appear to work correctly when clicked, but this is only because all the values in the array are single digits, and the sorting may not work as expected with more complex values. Change the value and text of the option element that is selected from 1 to 10, and click the Sort button again.
- Notice how the number 10 is placed at the beginning of the array. This is because the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically. And 10 comes before 2 alphabetically.
- To fix this, you can pass a callback function to the .sort() method. The callback function has two parameters - for yours, use a and b. The parameters of a and b represent the number values in the array that will be sorted.
