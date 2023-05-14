type TechType = {
    id: Number
    title: String
}
type CityType = {
    title: String
    countryTitle: String 
}
type AddressType = {
    streetTitle: String
    city: CityType
}
type ObjectType = {
    id: Number
    age: Number
    name: String
    isStudent: Boolean
    isWorking: Boolean
    address: AddressType
    technologies: Array<TechType>
    technologies_obj: Array<TechType>
}


