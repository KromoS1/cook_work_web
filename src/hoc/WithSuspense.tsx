import {ComponentType, Suspense} from "react";

export const WithSuspense = (Component:ComponentType) => {
    return (props:any) => {
        return <Suspense fallback={<></>}>
            <Component {...props}/>
        </Suspense>
    }
}
