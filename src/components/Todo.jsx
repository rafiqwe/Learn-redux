import { useSelector } from "react-redux"

export const Todo = () => {
    const state = useSelector((state) => state.task);
    console.log(state);
    return(
        <>
            <div className="w-[400px] sm:w-[500px] mx-auto  rounded-xl bg-slate-400 p-8 ">
                <div className="title flex justify-center items-center mb-3">
                    <h1 className="text-4xl font-bold text-black">To-do List :-</h1>
                </div>
                <div className="from mt-7 mb-7 ">
                    <form action="" className="flex justify-around items-center">
                        <div className="input w-[70%]">
                            <input type="text"  placeholder="Set your task" className="w-full py-3 rounded-full px-6 outline-none text-black" />
                        </div>
                        <div className="button ">
                            <button type="submit" className="bg-blue-900 p-3 rounded-xl font-bold" >Add Task</button>
                        </div>
                    </form>
                </div>
                <ul>
                    {state.map((task, index) => {
                        return(
                            <li key={index} className="flex justify-between items-center   bg-white p-3 mb-2 rounded-lg">
                                <div className="text flex  justify-center items-start gap-1 sm:gap-2">
                                    <p className="text-black font-bold">ID: {index +1} </p>
                                    <h1 className="text-md font-bold text-black">{task}</h1>
                                </div>
                                <div className="delete_icon">
                                    <button className="bg-red-600 p-2 rounded-full text-white font-bold">Delete</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}