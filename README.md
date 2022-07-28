# generate-recharge-pin-localStorage
I created this project for generating recharge PIN for networks (test samples: MTN, GLO, AIRTEL, ETISALAT) 
I just want to test how database/server works 
The project generates unique PIN for each phone number you enter and stores it into pinGenerated array 
Such that it doesn't generate same PIN again each number is pushed with their PINs and date created into array 
The List is then stored into the localStorage for reference

It also has load PIN side, where it checks if a PIN has been used 
Hence the "customer" will be unable to load same PIN into the system Until new PIN is generated
