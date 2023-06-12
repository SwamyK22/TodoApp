 
export const inputFields = [
    {
        name:'email',
        placeholder:'Email Address',
        className: 'rounded-t-md',

    },
    {
        name:'password',
        placeholder:'Password',
        className: 'rounded-b-md',

    },
 ];

 export const initValue = inputFields.reduce((p,c) => ({...p, [c.name]:''}),{});