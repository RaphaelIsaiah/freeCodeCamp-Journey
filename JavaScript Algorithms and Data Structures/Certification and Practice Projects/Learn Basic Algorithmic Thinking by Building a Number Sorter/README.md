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