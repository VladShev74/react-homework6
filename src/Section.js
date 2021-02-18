import React from 'react';
import Weather from "./Weather";

export default function Section({name, children}) {
    return (<>
    <h1>{name}</h1>
    {children}
    </>
)};
