

interface Person {
    fullName: string;
    age: number;
    address: {
        country: string;
        houseNo: number;
    }
}



export const ObjectLiteral = () => {

    const person:Person = {
        fullName: 'Esteban',
        age: 22,
        address: {
            country: 'Colombia',
            houseNo: 711,
        }
    }



  return (
   <>
    <h3>ObjectLiteral</h3>
    { JSON.stringify( person, null, 2 ) }
   </>
  )
}
