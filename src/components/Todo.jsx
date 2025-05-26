export const Todo = () => {
    return(
        <>
            <div className="w-[500px] mx-auto  rounded-xl bg-slate-400 p-8 ">
                <div className="title flex justify-center items-center mb-3">
                    <h1 className="text-4xl font-bold text-black">To-do List :-</h1>
                </div>
                <div className="from mt-3 ">
                    <form action="" className="flex justify-around items-center">
                        <div className="input w-[75%]">
                            <input type="text"  placeholder="Set your task" className="w-full py-3 rounded-full px-6" />
                        </div>
                        <div className="button ">
                            <button type="submit" className="bg-blue-900 p-3 rounded-xl font-bold" >Add Task</button>
                        </div>
                    </form>
                </div>
                <ul>

                </ul>
            </div>
        </>
    )
}