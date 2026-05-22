
export const PokemonPage = () => {
    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#001 Bulbasaur</h3>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt=""
            />

            <div className="flex gap-2">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Anterior
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Siguiente
                </button>

            </div>
        </div>
    );
}