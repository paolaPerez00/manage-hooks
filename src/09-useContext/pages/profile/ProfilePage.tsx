import { UserContext } from "@/09-useContext/context/userContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { useNavigate } from "react-router";

export const ProfilePage = () => {

    const { user, logout } = use(UserContext);
    const navigation = useNavigate();

    const handleLogout = () => {
        logout();
        navigation('/');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">Perfil del usuario</h1>
            <hr />
            <pre className="my-4 w-[80%] overflow-x-auto">{JSON.stringify(user, null, 2)}</pre>
            <Button
                variant="destructive"
                onClick={handleLogout}
            >Salir</Button>
        </div>
    )
}

