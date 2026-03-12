import { useState } from "react";
import Header from "../components/header";
import StepBar from "../components/StepBar";
import Seleccionar from "../components/Seleccionar";

function Personas() {
    const [comensales, setComensales] = useState(5);
    const opciones = [1, 2, 3, 4]
    return (
        <div>
            <Header />
            <StepBar />
            {/* Cuerpo de la web: Cantidad de Comensales*/}

            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-xl font-bold tracking-widest mb-10">
                    CANTIDAD DE COMENSALES
                </h2>
                <div className="bg-[url('/Comidas_Peruanas1.png')] bg-cover bg-center px-35 py-20 flex flex-col items-center gap-10 shadow-lg rounded-2xl mb-10">
                    <div>
                        <div className="flex gap-2 mb-10">
                            {opciones.map((numero) => (
                                <button
                                    key={numero}
                                    onClick={() => setComensales(numero)}
                                    className="flex items-center justify-center text-2xl text-center bg-[#D94141] text-white w-12 h-12  rounded-full cursor-pointer">
                                    {numero}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <button onClick={() => {
                                if (comensales > 5) {
                                    setComensales(comensales - 1)
                                }
                            }}
                                className="bg-gray-200 w-10 h-10 rounded-xl border-2 border-[#E9A299] cursor-pointer">
                                -
                            </button>
                            <span className="flex text-xl items-center justify-center font-bold bg-gray-200 w-16 h-10 rounded-xl text-center border-2 border-[#E9A299]">
                                {comensales}
                            </span>
                            <button onClick={() => {
                                if (comensales < 14) {
                                    setComensales(comensales + 1)
                                }
                            }} className="bg-gray-200 w-10 h-10 rounded-xl border-2 border-[#E9A299] cursor-pointer">
                                +
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <div>
                    <Seleccionar />
                    <p className="text-s text-center font-bold mb-2"> 
                        Número de Comensales
                    </p>
                    <p className="text-center text-[#3F973A] font-bold text-lg">
                        5 PERSONAS
                    </p>
                    <p className="text-s text-center font-bold mt-6"> 
                        NUESTRA PROPUESTA
                    </p>
                    <p className="text-lg text-center font-bold mt-1"> 
                        "Una experiencia auténtica"
                    </p>
                    <h1 className="text-3xl text-center text-[#D94141] font-extrabold mt-6 tracking-widest"> 
                        RICO RICO PERÚ
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Personas