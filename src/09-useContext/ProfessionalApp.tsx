import { RouterProvider } from "react-router"
import { router } from "./router/app.router"
import { UserContextProvider } from "./context/userContext"

export const ProfessionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient flex flex-col">
                < RouterProvider router={router} />
            </div>
        </UserContextProvider>
    )
}

