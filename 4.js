const friends=['aich','sagor','basic','no one','lonely','only me'];
function perfectFriend(array){
    for(const element of array){
        if(element.length==5){
            // console.log(element);
            return element;
        }
    }
}
console.log(perfectFriend(friends));