function StepBar() {
    return(
        <div className="flex justify-center ">
                <div className="bg-[#D94141] text-xs text-white rounded-3xl flex items-center justify-center gap-3 md:gap-8 shadow-lg px-3 md:px-8 py-3 md:py-4 w-full max-w-[900px]">
                    <div className="text-[#E9A299] flex items-center gap-1">
                        <span className="material-symbols-outlined">
                            group
                        </span>
                        <p>Personas</p>
                    </div>
                    <div>
                        <span>|</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px] text-[#E9A299]">
                            calendar_today
                        </span>
                        <p>Fecha</p>
                    </div>
                    <div>
                        <span>|</span>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <span className="material-symbols-outlined text-[#E9A299]">
                            schedule
                        </span>
                        <p>Hora</p>
                    </div>
                    <div>
                        <span>|</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[#E9A299]">
                            flag_2
                        </span>
                        <p>Confirmación</p>
                    </div>
                </div>
            </div>
    )
}

export default StepBar