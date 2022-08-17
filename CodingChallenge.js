console.log('Hi');

let arr = [
    {
      "id": "3",
      "firstName": "John",
      "lastName": "Doe",
      "locations": [
        "Arizona",
        "Seattle"
      ]
    },
    {
      "id": "4",
      "firstName": "Kate",
      "lastName": "Doe",
      "locations": [
        "Arizona",
        "Seattle",
        "Miami"
      ]
    },
    {
      "firstName": "Mark",
      "lastName": "Doe",
      "locations": [
        "Arizona",
        "Seattle"
      ]
    }
  ]

let newArr = []
arr.forEach(item => {
    let obj = {}
    if(item?.id){
        obj['id'] = item.id
    }
    obj['fullName'] = item.firstName + ' ' + item.lastName
    obj['pastLocations'] = item.locations.join(', ')

    newArr.push(obj)
})

console.log(newArr)


;
/*
1. forEach method to loop through the Array
2. We can use Object.values and Splice methos to combine the values retrieved and another variable for the existing array
3. Create a new array to push the object
4. array.push method to created a new array with modified objects
*/