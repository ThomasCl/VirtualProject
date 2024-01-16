#!/bin/bash

# Logic to determine the color (e.g., alternating between blue and green)
CURRENT_COLOR=$(curl -s https://raw.githubusercontent.com/ThomasCl/VirtualProject/master/color.txt | tr -d '"')
if [ "$CURRENT_COLOR" = "blue" ]; then
  echo "green" > color.txt
else
  echo "blue" > color.txt
fi
echo $CURRENT_COLOR
 