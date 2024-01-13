1. OOPS in JS(prototypes)
   => Objects are linked to prototype object , so prototype contains methods and properties that are accessible to all objects linked to that protoypes.

2. it is also called prototypal inheritance or delegation also remember that it is not same as inheritancve of classes , beacuse here object is inherited with prototype object

3. example for this is
   Array.prototype.map()

=> here array.protrotype is prototype of all array objects we create in js , so all arrays have access to map method

=> so we don't write array.protoype.map beacuse the syntax is large , to reduce it and make it more readble.

4. there are 3 ways to write or implement oops in js
   i) constructor fucntions
   ii) ES6 classes
   iii) object.create()
