
var isScramble = function (s1, s2) {
    var list1 = new Array();
    var list2 = new Array();

    for (var i in s1) {
        list1.push(s1.charAt(i));
        list2.push(s2.charAt(i));
    }
    if (!judgeSame(list1,list2))
        return false;
    
    

    return true;
};

var judgeSame = function (list1, list2) {
    var list3 = list1.concat().sort().toString();
    var list4 = list2.concat().sort().toString();
    return list3 == list4;
}

var panduan = function(temp1,temp2){
    if(temp1.length <= 3){
          
    }
                                                                                      
}

var init = function () {
    var s1 = 'abcd';
    var s2 = 'adbc';
    var result = isScramble(s1, s2);
    console.log(result);
}

init();
