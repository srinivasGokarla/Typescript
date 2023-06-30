enum directions {
    north = 1,
    east, 
    south,
    west
}

console.log(directions.north)

//An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric

//By default, enums will initialize the first value to 0 and add 1 to each additional value:




enum errors {

  Success = 200,
  Accepted = 202,
  BadRequest = 400,
  NotFound = 404,
}

console.log(errors)
//You can assign unique number values for each enum value. Then the values will not incremented automatically:


enum team {
    manager = "Manager",
    teamLead = "TeamLead",
    member = "Member"
}

console.log(team)

//Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.