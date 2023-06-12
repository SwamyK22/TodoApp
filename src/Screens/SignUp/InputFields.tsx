 
export const inputFields = [
    {
        name:'name',
        placeholder:'Name',
        className: 'rounded-t-md',
    },
    {
        name:'email',
        placeholder:'Email Address',

    },
    {
        name:'password',
        placeholder:'Password',
    },
    {
        name:'confirmPassword',
        placeholder:'Confirm Password',
        className: 'rounded-b-md',
    },
 ];

 export const initValue = inputFields.reduce((p,c) => ({...p, [c.name]:''}),{});