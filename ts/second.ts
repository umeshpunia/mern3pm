interface RBI_P1{
    name:string
    dob:string
    address:string
    bill?:string
}

interface RBI_P2{
    adhar:number
    pan:string
}

export class Sbi implements RBI_P1,RBI_P2{
    name="umesh"
    dob
    address: string
    adhar: number
    pan: string
}
