#!/bin/bash
# This script runs a bike rental service where users can rent or return bikes.
# The PSQL variable is defined here for database queries, but it's commented out for now.
# Uncomment and define properly when testing in a database environment.
# PSQL="psql -X --username=freecodecamp --dbname=bikes --no-align --tuples-only -c"
PSQL="psql -X --username=postgres --dbname=bikes --no-align --tuples-only -c"

# Display the welcome message
echo -e "\n~~~~ Bike Rental Shop ~~~~\n"

# The Main Menu function
MAIN_MENU() {
    # If an argument is passed to this function, display it (used for messages)
    if [[ $1 ]]; then
        echo -e "\n$1"
    fi

    # Display main menu options
    echo "How may I help you?"
    echo -e "\n1. Rent a bike \n2. Return a bike \n3. Exit"

    # Read user's menu selection
    read MAIN_MENU_SELECTION

    # Handle the user's selection using a case statement
    case $MAIN_MENU_SELECTION in
    1) RENT_MENU ;;                                # Go to rent menu
    2) RETURN_MENU ;;                              # Go to return menu
    3) EXIT ;;                                     # Exit the program
    *) MAIN_MENU "Please enter a valid option." ;; # Loop back to main menu on invalid input
    esac
}

# The Rent Menu function
RENT_MENU() {
    # Query available bikes and store the result
    AVAILABLE_BIKES=$($PSQL "SELECT bike_id, type, size FROM bikes WHERE available=TRUE ORDER BY bike_id")

    # If no bikes are available
    if [[ -z $AVAILABLE_BIKES ]]; then
        # Return to the main menu with a message
        MAIN_MENU "Sorry, we don't have any bikes available right now."
    else
        # Display available bikes
        echo -e "\nHere are the bikes we have available:"
        echo "$AVAILABLE_BIKES" | while IFS='|' read BIKE_ID TYPE SIZE; do
            # Remove any remaining whitespace and display each bike's info
            BIKE_ID=$(echo $BIKE_ID | xargs)
            TYPE=$(echo $TYPE | xargs)
            SIZE=$(echo $SIZE | xargs)
            echo "${BIKE_ID}) ${SIZE}\" ${TYPE} Bike"
        done

        # Prompt the user to select a bike
        echo -e "\nWhich one would you like to rent?"
        read BIKE_ID_TO_RENT

        # Check if the input is a valid number
        if [[ ! $BIKE_ID_TO_RENT =~ ^[0-9]+$ ]]; then
            # Return to the main menu with a message
            MAIN_MENU "That is not a valid bike number."
        else
            # Check if the selected bike is available
            BIKE_AVAILABILITY=$($PSQL "SELECT available FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT AND available = true")

            # If the bike is not available
            if [[ -z $BIKE_AVAILABILITY ]]; then
                # Return to the main menu with a message
                MAIN_MENU "That bike is not available."
            else
                # Get customer information
                echo -e "\nWhat's your phone number?"
                read PHONE_NUMBER
                CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$PHONE_NUMBER'")

                # If the customer doesn't exist, prompt for their name and add them to the database
                if [[ -z $CUSTOMER_NAME ]]; then
                    echo -e "\nWhat's your name?"
                    read CUSTOMER_NAME
                    INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$PHONE_NUMBER')")
                fi

                # Retrieve the customer ID
                CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")

                # Record the rental in the rentals table
                INSERT_RENTAL_RESULT=$($PSQL "INSERT INTO rentals(customer_id, bike_id) VALUES($CUSTOMER_ID, $BIKE_ID_TO_RENT)")

                # Mark the bike as unavailable
                SET_TO_FALSE_RESULT=$($PSQL "UPDATE bikes SET available = false WHERE bike_id = $BIKE_ID_TO_RENT")

                # Get and format the bike details
                BIKE_INFO=$($PSQL "SELECT size, type FROM bikes WHERE bike_id = $BIKE_ID_TO_RENT")
                BIKE_INFO_FORMATTED=$(echo "$BIKE_INFO" | sed 's/|/" /')

                # Return to the main menu with a confirmation message
                MAIN_MENU "I have put you down for the $BIKE_INFO_FORMATTED Bike, $(echo $CUSTOMER_NAME | sed -r 's/^ *| *$//g')."
            fi
        fi
    fi
}

# The Return Menu function
RETURN_MENU() {
    # Prompt the customer for their phone number
    echo -e "\nWhat's your phone number?"
    read PHONE_NUMBER

    # Retrieve the customer ID based on the phone number
    CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$PHONE_NUMBER'")

    # If the customer doesn't exist
    if [[ -z $CUSTOMER_ID ]]; then
        MAIN_MENU "I could not find a record for that phone number."
    else
        # Query the customer's rentals that have not been returned
        CUSTOMER_RENTALS=$($PSQL "SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone='$PHONE_NUMBER' AND date_returned IS NULL ORDER BY bike_id")

        # If no rentals are found
        if [[ -z $CUSTOMER_RENTALS ]]; then
            MAIN_MENU "You do not have any bikes rented."
        else
            # Display the rented bikes
            echo -e "\nHere are your rentals:"
            echo "$CUSTOMER_RENTALS" | while IFS='|' read BIKE_ID TYPE SIZE; do
                BIKE_ID=$(echo $BIKE_ID | xargs)
                TYPE=$(echo $TYPE | xargs)
                SIZE=$(echo $SIZE | xargs)
                echo "${BIKE_ID}) ${SIZE}\" ${TYPE} Bike"
            done

            # Prompt the customer to select a bike to return
            echo -e "\nWhich one would you like to return?"
            read BIKE_ID_TO_RETURN

            # Check if the input is a valid number
            if [[ ! $BIKE_ID_TO_RETURN =~ ^[0-9]+$ ]]; then
                MAIN_MENU "That is not a valid bike number."
            else
                # Check if the customer has rented the selected bike
                RENTAL_ID=$($PSQL "SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '$PHONE_NUMBER' AND bike_id = $BIKE_ID_TO_RETURN AND date_returned IS NULL;")

                # If the bike isn't rented by this customer
                if [[ -z $RENTAL_ID ]]; then
                    MAIN_MENU "You do not have that bike rented."
                else
                    # Mark the bike as returned and update availability
                    RETURN_BIKE_RESULT=$($PSQL "UPDATE rentals SET date_returned = NOW() WHERE rental_id = $RENTAL_ID")
                    SET_TO_TRUE_RESULT=$($PSQL "UPDATE bikes SET available = TRUE WHERE bike_id = $BIKE_ID_TO_RETURN")

                    # Return to the main menu with a thank-you message
                    MAIN_MENU "Thank you for returning your bike."
                fi
            fi
        fi
    fi
}

# Exit function
EXIT() {
    echo -e "\nThank you for stopping in.\n"
}

# Start the script by calling the main menu
MAIN_MENU
