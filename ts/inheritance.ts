class Abcd{ //base / parent


    private first(){
        return 'Hello from parent'
    }

}


class Xyz extends Abcd{ //derived /child
    second(){
        let v=super.first()
        console.log(v)
    }
}

let a=new Xyz()

a.second()